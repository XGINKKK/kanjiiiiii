import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// CREDENCIAIS DE ACESSO (em produção, isso viria de um backend)
const VALID_CREDENTIALS = {
  email: 'membro@kanjikids.com.br',
  password: 'kanji2024',
  name: 'Membro Kanji Kids'
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Verificar se há usuário logado ao carregar
  useEffect(() => {
    const storedUser = localStorage.getItem('kanji-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 800));

    // Validar credenciais
    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
      const userData: User = {
        email: VALID_CREDENTIALS.email,
        name: VALID_CREDENTIALS.name
      };

      setUser(userData);
      localStorage.setItem('kanji-user', JSON.stringify(userData));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kanji-user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
