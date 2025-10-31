#!/bin/bash

# Script para baixar vídeos durante build da Vercel
echo "=== Vercel Video Setup ==="

# Criar diretório de vídeos se não existir
mkdir -p public/videos

# Verifica tamanho dos arquivos atuais
TUTORIAL_SIZE=$(stat -c%s "public/videos/tutorial-membros.mp4" 2>/dev/null || echo "0")
PRATICA_SIZE=$(stat -c%s "public/videos/ver-na-pratica.mp4" 2>/dev/null || echo "0")

echo "Current file sizes:"
echo "  tutorial-membros.mp4: $TUTORIAL_SIZE bytes"
echo "  ver-na-pratica.mp4: $PRATICA_SIZE bytes"

# Se os arquivos são grandes o suficiente, já estão OK
if [ "$TUTORIAL_SIZE" -gt 100000000 ] && [ "$PRATICA_SIZE" -gt 30000000 ]; then
    echo "✓ Videos already present and valid"
    exit 0
fi

echo ""
echo "Videos not present or too small (LFS pointers)"
echo "Attempting to download from LFS..."

# Obtém o OID dos ponteiros LFS
get_lfs_oid() {
    local file=$1
    if [ -f "$file" ]; then
        # Lê o OID do ponteiro LFS
        grep "oid sha256:" "$file" 2>/dev/null | cut -d: -f2 | tr -d ' '
    fi
}

# Baixa arquivo via LFS HTTP API
download_lfs_file() {
    local file=$1
    local oid=$(get_lfs_oid "$file")

    if [ -z "$oid" ]; then
        echo "Could not extract OID from $file"
        return 1
    fi

    echo "Downloading $file (OID: ${oid:0:8}...)"

    # URL do GitHub LFS
    local repo="XGINKKK/kanjiiiiii"
    local lfs_url="https://github.com/${repo}.git/info/lfs/objects/batch"

    # Requisição para obter URL de download
    local response=$(curl -s -X POST "$lfs_url" \
        -H "Accept: application/vnd.git-lfs+json" \
        -H "Content-Type: application/vnd.git-lfs+json" \
        -d "{\"operation\":\"download\",\"transfers\":[\"basic\"],\"objects\":[{\"oid\":\"$oid\",\"size\":150000000}]}")

    # Extrai URL de download
    local download_url=$(echo "$response" | grep -o '"href":"[^"]*"' | cut -d'"' -f4 | head -1)

    if [ -n "$download_url" ]; then
        echo "Downloading from LFS storage..."
        curl -L "$download_url" -o "$file"
        return 0
    fi

    return 1
}

# Tenta baixar os vídeos
echo "Attempting direct LFS download..."
download_lfs_file "public/videos/tutorial-membros.mp4" || echo "Failed to download tutorial-membros.mp4"
download_lfs_file "public/videos/ver-na-pratica.mp4" || echo "Failed to download ver-na-pratica.mp4"

# Verifica resultado final
TUTORIAL_SIZE=$(stat -c%s "public/videos/tutorial-membros.mp4" 2>/dev/null || echo "0")
PRATICA_SIZE=$(stat -c%s "public/videos/ver-na-pratica.mp4" 2>/dev/null || echo "0")

echo ""
echo "=== Final file sizes ==="
echo "  tutorial-membros.mp4: $TUTORIAL_SIZE bytes"
echo "  ver-na-pratica.mp4: $PRATICA_SIZE bytes"

if [ "$TUTORIAL_SIZE" -gt 100000000 ] && [ "$PRATICA_SIZE" -gt 30000000 ]; then
    echo "✓ Videos ready for build"
    exit 0
else
    echo "⚠ Warning: Videos not fully downloaded"
    echo "Build will continue but videos might not work properly"
    exit 0
fi
