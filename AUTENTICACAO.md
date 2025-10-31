# Sistema de Autenticação - Kanji Kids

Sistema completo de login e proteção de rotas implementado na área de membros.

## Arquivos Criados

### 1. **`src/contexts/AuthContext.tsx`**
Contexto React para gerenciar autenticação globalmente.

**Funcionalidades:**
- Gerenciamento de estado do usuário
- Funções de login/logout
- Persistência no localStorage
- Verificação automática ao carregar

### 2. **`src/components/ProtectedRoute.tsx`**
Componente para proteger rotas que exigem autenticação.

**Funcionalidades:**
- Redireciona para login se não autenticado
- Mostra loading durante verificação
- Renderiza conteúdo protegido se autenticado

### 3. **Atualizações em arquivos existentes:**
- `src/App.tsx` - Adicionado AuthProvider e ProtectedRoute
- `src/pages/Login.tsx` - Integrado com AuthContext
- `src/pages/AreaMembros.tsx` - Usa useAuth hook

---

## Como Funciona

### Fluxo de Autenticação

```
1. Usuário acessa /membros
   ↓
2. ProtectedRoute verifica autenticação
   ↓
3a. SE autenticado → Mostra AreaMembros
3b. SE NÃO autenticado → Redireciona para /login
   ↓
4. Usuário faz login com credenciais
   ↓
5. AuthContext valida e salva no localStorage
   ↓
6. Redireciona para /membros (área protegida)
```

---

## Credenciais de Acesso

### Usuário de Teste

```
Email: membro@kanjikids.com.br
Senha: kanji2024
```

**IMPORTANTE:** Em produção, essas credenciais devem vir de um backend real!

---

## Como Usar

### 1. Login

Acesse: `http://localhost:5173/login`

```tsx
// A página de login usa o AuthContext
const { login } = useAuth();

const handleLogin = async (email, password) => {
  const success = await login(email, password);
  if (success) {
    // Redireciona automaticamente
  } else {
    // Mostra erro
  }
};
```

### 2. Área Protegida

```tsx
// App.tsx
<Route
  path="/membros"
  element={
    <ProtectedRoute>
      <AreaMembros />
    </ProtectedRoute>
  }
/>
```

### 3. Logout

```tsx
// Em qualquer componente
const { logout } = useAuth();

const handleLogout = () => {
  logout(); // Limpa estado e redireciona para /login
};
```

### 4. Verificar se está autenticado

```tsx
const { isAuthenticated, user } = useAuth();

if (isAuthenticated) {
  console.log('Usuário logado:', user.name);
}
```

---

## Estrutura do Contexto

### AuthContext API

```tsx
interface AuthContextType {
  user: User | null;              // Dados do usuário logado
  isAuthenticated: boolean;       // true se logado
  isLoading: boolean;             // true durante verificação inicial
  login: (email, password) => Promise<boolean>;  // Função de login
  logout: () => void;             // Função de logout
}
```

### User Object

```tsx
interface User {
  email: string;
  name: string;
}
```

---

## Persistência

O sistema usa `localStorage` para persistir a sessão:

```javascript
// Após login bem-sucedido
localStorage.setItem('kanji-user', JSON.stringify(userData));

// Ao carregar a aplicação
const storedUser = localStorage.getItem('kanji-user');

// Ao fazer logout
localStorage.removeItem('kanji-user');
```

---

## Rotas

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/` | Pública | Landing page |
| `/criancas` | Pública | Página para crianças |
| `/login` | Pública | Página de login |
| `/membros` | **Protegida** | Área de membros (requer login) |

---

## Segurança

### ⚠️ IMPORTANTE para Produção

Este é um sistema de autenticação **BÁSICO** para demonstração. Para produção, você precisa:

#### 1. **Backend Real**
```javascript
// Substituir validação local por API
const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    setUser(data.user);
    localStorage.setItem('auth-token', data.token);
    return true;
  }
  return false;
};
```

#### 2. **JWT Tokens**
```javascript
// Usar tokens em vez de localStorage simples
const token = localStorage.getItem('auth-token');

fetch('/api/protected-route', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

#### 3. **HTTPS**
- Sempre use HTTPS em produção
- Nunca envie credenciais por HTTP

#### 4. **Validação no Backend**
- Nunca confie apenas na autenticação do frontend
- Sempre valide tokens no backend
- Use bcrypt para hash de senhas

#### 5. **Expiração de Sessão**
```javascript
// Token com expiração
const isTokenExpired = (token) => {
  const decoded = jwtDecode(token);
  return decoded.exp < Date.now() / 1000;
};
```

---

## Exemplo de Integração com Backend

### Frontend (AuthContext.tsx)

```typescript
const login = async (email: string, password: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const data = await response.json();

      setUser(data.user);
      localStorage.setItem('auth-token', data.token);
      localStorage.setItem('kanji-user', JSON.stringify(data.user));

      return true;
    }

    return false;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
};
```

### Backend (Express.js exemplo)

```javascript
// POST /auth/login
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  // Buscar usuário no banco
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  // Validar senha (usando bcrypt)
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  // Gerar JWT token
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({
    success: true,
    token,
    user: {
      email: user.email,
      name: user.name
    }
  });
});

// Middleware de autenticação
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};

// Rota protegida
app.get('/api/membros/recursos', authenticate, (req, res) => {
  // req.user contém dados do token
  res.json({ recursos: [...] });
});
```

---

## Testando

### 1. Acessar área protegida sem login

1. Acesse `http://localhost:5173/membros`
2. Deve redirecionar automaticamente para `/login`

### 2. Fazer login

1. Acesse `http://localhost:5173/login`
2. Use as credenciais:
   - Email: `membro@kanjikids.com.br`
   - Senha: `kanji2024`
3. Deve redirecionar para `/membros`

### 3. Logout

1. Na área de membros, clique no botão "Sair"
2. Deve voltar para `/login`
3. Estado do usuário deve ser limpo

### 4. Persistência

1. Faça login
2. Recarregue a página (F5)
3. Deve continuar logado
4. Deve ver seus dados no header

---

## Próximos Passos (Produção)

- [ ] Implementar backend real com Node.js/Python
- [ ] Usar JWT tokens
- [ ] Hash de senhas com bcrypt
- [ ] Refresh tokens
- [ ] Recuperação de senha
- [ ] Verificação de email
- [ ] Rate limiting
- [ ] 2FA (autenticação em 2 fatores)
- [ ] Logs de auditoria

---

## Troubleshooting

### "Cannot read property 'login' of undefined"
**Solução:** Certifique-se que o AuthProvider está envolvendo suas rotas no App.tsx

### Redirecionamento infinito
**Solução:** Verifique se não há loops de redirecionamento entre /login e /membros

### Sessão não persiste após recarregar
**Solução:** Verifique se o localStorage está funcionando e se o useEffect está carregando o usuário

---

**Sistema implementado e pronto para uso!** 🎉

Para testar: acesse `http://localhost:5173/login`
