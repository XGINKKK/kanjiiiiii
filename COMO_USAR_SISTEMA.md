# Como Usar o Sistema Kanji Kids

## Início Rápido

### Opção 1: Script Automático (Recomendado para Windows)
```bash
# Dê duplo clique no arquivo:
iniciar_servidores.bat
```

### Opção 2: Manual

**Terminal 1 - Frontend React:**
```bash
npm run dev
```

**Terminal 2 - Backend Python:**
```bash
cd gerador_atividades
python api_server.py
```

---

## URLs do Sistema

### Frontend (React)
- **Landing Page:** http://localhost:8080
- **Login:** http://localhost:8080/login
- **Área de Membros:** http://localhost:8080/area-membros
- **Gerar Atividades:** http://localhost:8080/criancas

### Backend (Python API)
- **Health Check:** http://localhost:5000/api/health
- **Status:** http://localhost:5000/api/status
- **Listar Arquivos:** http://localhost:5000/api/listar-arquivos

---

## Como Gerar as Atividades

### Método 1: Pela Interface Web (Recomendado)

1. Certifique-se de que ambos os servidores estão rodando
2. Acesse: http://localhost:8080/criancas
3. Clique em **"Gerar Todas as 300+ Atividades"**
4. Aguarde (pode levar 1-2 minutos)
5. O download iniciará automaticamente

### Método 2: Linha de Comando (Rápido)

```bash
cd gerador_atividades
python gerador_pdf_unico.py
```

O PDF será gerado em: `gerador_atividades/pdf_final/Kanji_Kids_300_Atividades_Completo.pdf`

---

## Estrutura do Sistema

```
kanji-kids-leap/
├── src/                          # Frontend React
│   ├── pages/
│   │   ├── Index.tsx            # Landing page
│   │   ├── Login.tsx            # Login
│   │   ├── AreaMembros.tsx      # Área de membros
│   │   └── Criancas.tsx         # Gerador de atividades
│   └── components/              # Componentes React
│
├── gerador_atividades/          # Backend Python
│   ├── api_server.py            # API Flask
│   ├── gerador_pdf_unico.py     # Gerador principal
│   ├── gerador_completo_300.py  # Gerador alternativo
│   └── pdf_final/               # PDFs gerados
│
└── iniciar_servidores.bat       # Script de inicialização
```

---

## Endpoints da API Python

### GET /api/health
Verifica se a API está online
```bash
curl http://localhost:5000/api/health
```

### POST /api/gerar-exemplos
Gera 5 exemplos de atividades (teste rápido)
```bash
curl -X POST http://localhost:5000/api/gerar-exemplos
```

### POST /api/gerar-completas
Gera TODAS as 300+ atividades
```bash
curl -X POST http://localhost:5000/api/gerar-completas
```

### GET /api/status
Verifica status da geração em andamento
```bash
curl http://localhost:5000/api/status
```

### GET /api/download-exemplos
Baixa ZIP com exemplos gerados
```bash
curl http://localhost:5000/api/download-exemplos --output atividades.zip
```

### GET /api/listar-arquivos
Lista todos os arquivos gerados
```bash
curl http://localhost:5000/api/listar-arquivos
```

---

## Solução de Problemas

### Erro: "Servidor não conectado"

**Causa:** O servidor Python não está rodando

**Solução:**
```bash
cd gerador_atividades
python api_server.py
```

Aguarde ver a mensagem:
```
Servidor rodando em: http://localhost:5000
```

### Erro: "Port 5000 already in use"

**Solução 1 - Matar processo:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID [PID_NUMBER] /F

# Linux/Mac
lsof -i :5000
kill -9 [PID]
```

**Solução 2 - Usar outra porta:**
Edite `api_server.py` e mude a porta:
```python
app.run(debug=True, port=5001)
```

### Erro: "Port 8080 already in use"

**Solução:**
Edite `vite.config.ts` e mude a porta:
```typescript
server: {
  port: 3000
}
```

### Erro ao gerar PDF: "Module not found"

**Causa:** Bibliotecas Python não instaladas

**Solução:**
```bash
pip install reportlab pillow pypdf2 flask flask-cors
```

### Geração lenta

**Normal:** Gerar 300 páginas pode levar 1-2 minutos

**Dica:** Use o gerador de exemplos primeiro (5 atividades) para testar:
```bash
curl -X POST http://localhost:5000/api/gerar-exemplos
```

---

## Arquivos Gerados

### PDF Único (Recomendado)
- **Arquivo:** `gerador_atividades/pdf_final/Kanji_Kids_300_Atividades_Completo.pdf`
- **Tamanho:** ~15-25 MB
- **Páginas:** 300
- **Formato:** A4
- **Qualidade:** 300 DPI

### PDFs Individuais (Alternativo)
- **Localização:** `gerador_atividades/atividades_grafismo/`
- **Estrutura:**
  ```
  atividades_grafismo/
  ├── 01_linhas_basicas/
  ├── 02_formas_geometricas/
  ├── 03_pre_escrita/
  ├── 04_letras_maiusculas/
  ├── 05_letras_minusculas/
  ├── 06_numeros/
  └── 07_tematicas/
  ```

---

## Tipos de Atividades Geradas

### 1. Formação Silábica (130 páginas)
- Cada consoante + todas as vogais
- Exemplo: L → LA, LE, LI, LO, LU
- Círculos decorativos coloridos
- Área de prática

### 2. Palavras Simples (120 páginas)
- 20 palavras de 2 sílabas
- Decomposição visual
- Ilustrações de animais
- Exemplos: LUPA, LOBO, PATO, GATO

### 3. Associação Múltipla (50 páginas)
- Múltiplas sílabas com cores
- Exercícios de correspondência
- Grid de associação

---

## Paleta de Cores Utilizada

Todas as atividades usam a paleta oficial do Kanji Kids:

- **Coral** (#FF8B7A) - Destaques e títulos
- **Soft Blue** (#A7D7F5) - Backgrounds
- **Yellow Soft** (#FFE066) - Atenção
- **Beige** (#FAF5E4) - Fundo suave
- **Mint** (#7EDDC7) - Confirmações
- **Pink Soft** (#FFD1E0) - Feminino
- **Navy** (#1A365D) - Títulos principais

---

## Fluxo Completo de Uso

### Para Desenvolvedores:

1. **Instalar dependências:**
   ```bash
   npm install
   pip install -r requirements.txt
   ```

2. **Iniciar servidores:**
   ```bash
   # Terminal 1
   npm run dev

   # Terminal 2
   cd gerador_atividades && python api_server.py
   ```

3. **Testar:**
   - Landing page: http://localhost:8080
   - Gerar atividades: http://localhost:8080/criancas

### Para Usuários Finais:

1. Duplo clique em `iniciar_servidores.bat`
2. Aguardar servidores iniciarem
3. Navegar até http://localhost:8080/criancas
4. Clicar em "Gerar Atividades"
5. Aguardar download

---

## Status Atual do Sistema

### ✅ Funcionando
- Landing page com seção de preços R$ 37,90
- Sistema de depoimentos (6 depoimentos)
- FAQ expandido (10 perguntas)
- Gerador de PDF único (300 páginas)
- API Python com endpoints
- Interface web de geração

### 🚧 Em Desenvolvimento
- Sistema de pagamento (checkout)
- Área de membros com autenticação
- Download via área de membros
- Integração com gateway de pagamento

### 📋 Próximas Features
- Vídeo-depoimentos
- Fotos reais de crianças usando
- Seção de comparação de métodos
- Testes A/B de headlines

---

## Dicas de Uso

### Para Melhor Performance:
- Use o gerador de PDF único (mais rápido)
- Gere uma vez e distribua o mesmo PDF
- Comprima o PDF se necessário (online-convert.com)

### Para Testes:
- Use o endpoint `/api/gerar-exemplos` (5 atividades)
- Testa rapidamente sem esperar 2 minutos

### Para Produção:
- Use servidor WSGI (Gunicorn/uWSGI) para Python
- Configure CORS adequadamente
- Adicione rate limiting na API
- Configure CDN para distribuir PDFs

---

## Dependências

### Frontend (npm)
```json
{
  "react": "^18.x",
  "vite": "^5.x",
  "tailwindcss": "^3.x",
  "shadcn-ui": "latest"
}
```

### Backend (pip)
```
reportlab==4.4.4
pillow==12.0.0
pypdf2==3.0.1
flask==3.0.0
flask-cors==4.0.0
```

---

## Contato e Suporte

- **Documentação:** Este arquivo
- **Melhorias Landing Page:** Ver `MELHORIAS_LANDING_PAGE.md`
- **Geração de Atividades:** Ver `COMO_GERAR_ATIVIDADES.md`

---

**Kanji Kids** - Sistema Completo de Alfabetização
Versão: 1.0.0 | Data: 2025-10-24
