import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Lock, Mail, BookOpen, Loader2 } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login, isAuthenticated } = useAuth();

  // Redirecionar se já estiver logado
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/membros");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const success = await login(email, senha);

      if (success) {
        toast({
          title: "Login realizado com sucesso! 🎉",
          description: "Bem-vindo à Área de Membros Kanji Kids",
          duration: 3000,
        });

        navigate("/membros");
      } else {
        toast({
          title: "Erro no login",
          description: "Email ou senha incorretos",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-blue via-beige to-mint flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-coral rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-navy font-fredoka mb-2">
            Kanji Kids
          </h1>
          <p className="text-muted-foreground">
            Área de Membros - Kit Completo de Alfabetização
          </p>
        </div>

        {/* Card de Login */}
        <Card className="shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-fredoka text-center">
              Acesse sua Área de Membros
            </CardTitle>
            <CardDescription className="text-center">
              Entre com suas credenciais para acessar todo o conteúdo exclusivo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              {/* Senha */}
              <div className="space-y-2">
                <Label htmlFor="senha" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Senha
                </Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              {/* Botão de Login */}
              <Button
                type="submit"
                className="w-full h-12 bg-coral hover:bg-coral/90 text-white font-bold text-lg"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Acessar Área de Membros"}
              </Button>
            </form>

            {/* Link de Recuperação */}
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-coral hover:underline">
                Esqueci minha senha
              </a>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Acesso de demonstração
                </span>
              </div>
            </div>

            {/* Credenciais de Teste */}
            <div className="bg-mint/20 border border-mint rounded-lg p-4 space-y-2">
              <p className="text-sm font-bold text-navy">
                Credenciais de Acesso:
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>Email:</strong> membro@kanjikids.com.br<br />
                <strong>Senha:</strong> kanji2024
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Não tem acesso?{" "}
            <a href="/" className="text-coral hover:underline font-bold">
              Adquira o Kit Kanji Kids
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
