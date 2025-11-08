import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Heart,
  Clock,
  Target,
  AlertCircle,
  CheckCircle,
  Star,
  Home,
  Calendar,
  Users,
  Sparkles,
  TrendingUp,
  Award,
  Lightbulb,
  Play,
  Pause,
  BarChart,
  Smile,
  Frown,
  ArrowRight,
  Download,
  Gift
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const GuiaPais = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige via-white to-pink-soft/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy via-coral/90 to-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-soft rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-mint rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Button
              variant="ghost"
              className="text-white hover:text-yellow-soft"
              onClick={() => navigate("/membros")}
            >
              <Home className="w-4 h-4 mr-2" />
              Voltar para Área de Membros
            </Button>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-soft/20 border-2 border-yellow-soft/50 rounded-full mb-6">
              <Heart className="w-5 h-5 text-yellow-soft" />
              <span className="font-nunito font-bold text-yellow-soft">Para Pais Dedicados</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-fredoka leading-tight">
              Guia Completo para Pais
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-soft-blue leading-relaxed">
              Tudo que você precisa saber para alfabetizar seu filho em casa
              <br className="hidden md:block" />
              com segurança, eficácia e muito amor
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-mint" />
                <span>Passo a Passo Detalhado</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-mint" />
                <span>Dicas Práticas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-mint" />
                <span>Solução de Problemas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto h-auto flex-wrap md:flex-nowrap">
              <TabsTrigger value="inicio" className="gap-2">
                <Star className="w-4 h-4" />
                Primeiros Passos
              </TabsTrigger>
              <TabsTrigger value="rotina" className="gap-2">
                <Calendar className="w-4 h-4" />
                Rotina Diária
              </TabsTrigger>
              <TabsTrigger value="cronograma" className="gap-2">
                <Clock className="w-4 h-4" />
                Cronograma 8 Semanas
              </TabsTrigger>
              <TabsTrigger value="dicas" className="gap-2">
                <Lightbulb className="w-4 h-4" />
                Dicas Essenciais
              </TabsTrigger>
              <TabsTrigger value="problemas" className="gap-2">
                <AlertCircle className="w-4 h-4" />
                Solução de Problemas
              </TabsTrigger>
              <TabsTrigger value="progresso" className="gap-2">
                <TrendingUp className="w-4 h-4" />
                Acompanhamento
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeSection} className="w-full">
            {/* PRIMEIROS PASSOS */}
            <TabsContent value="inicio" className="space-y-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-navy mb-6 font-fredoka">
                  Primeiros Passos: Como Começar
                </h2>

                <div className="bg-gradient-to-r from-yellow-soft/20 to-coral/20 p-8 rounded-2xl mb-8 border-l-4 border-coral">
                  <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-coral" />
                    Antes de Tudo: A Mentalidade Certa
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      <strong>Você não precisa ser professor(a) profissional!</strong> O método foi
                      desenhado para pais sem formação pedagógica. Tudo que você precisa é:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <Heart className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <span><strong>Amor e paciência:</strong> Seu filho aprende no ritmo dele</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <span><strong>10 minutos por dia:</strong> Consistência é mais importante que quantidade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Smile className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <span><strong>Diversão:</strong> Se não estiver divertido, você está fazendo errado</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <Card className="border-t-4 border-mint">
                    <CardHeader>
                      <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center mb-3">
                        <span className="text-2xl font-bold text-white">1</span>
                      </div>
                      <CardTitle>Preparação do Ambiente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-mint mt-1" />
                          <span>Local tranquilo sem distrações</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-mint mt-1" />
                          <span>Boa iluminação</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-mint mt-1" />
                          <span>Mesa e cadeira confortáveis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-mint mt-1" />
                          <span>Materiais organizados</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-soft-blue">
                    <CardHeader>
                      <div className="w-12 h-12 bg-soft-blue rounded-full flex items-center justify-center mb-3">
                        <span className="text-2xl font-bold text-white">2</span>
                      </div>
                      <CardTitle>Materiais Necessários</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-soft-blue mt-1" />
                          <span>PDFs das atividades impressas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-soft-blue mt-1" />
                          <span>Lápis de cor coloridos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-soft-blue mt-1" />
                          <span>Giz de cera ou canetinhas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-soft-blue mt-1" />
                          <span>Caderno para prática livre</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-coral">
                    <CardHeader>
                      <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center mb-3">
                        <span className="text-2xl font-bold text-white">3</span>
                      </div>
                      <CardTitle>Escolha do Horário</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-coral mt-1" />
                          <span>Criança descansada e alimentada</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-coral mt-1" />
                          <span>Mesmo horário todos os dias</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-coral mt-1" />
                          <span>Evite perto do horário de dormir</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-coral mt-1" />
                          <span>Manhã geralmente funciona melhor</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-navy to-navy/95 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Award className="w-6 h-6 text-yellow-soft" />
                      Primeira Sessão: O Que Fazer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="font-bold mb-2 flex items-center gap-2">
                        <span className="bg-coral px-2 py-1 rounded text-sm">DIA 1</span>
                        Apresentação Inicial (5-10 minutos)
                      </div>
                      <ol className="space-y-3 ml-4 mt-3">
                        <li className="flex items-start gap-3">
                          <span className="bg-yellow-soft text-navy w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                          <div>
                            <strong>Converse sobre aprender a ler:</strong>
                            <p className="text-sm text-gray-300 mt-1">
                              "Vamos aprender a ler brincando! Vai ser muito divertido!"
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-yellow-soft text-navy w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                          <div>
                            <strong>Mostre 3 palavras simples:</strong>
                            <p className="text-sm text-gray-300 mt-1">
                              BOLA, GATO, CASA - deixe a criança observar sem pressão
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-yellow-soft text-navy w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                          <div>
                            <strong>Pronuncie devagar apontando:</strong>
                            <p className="text-sm text-gray-300 mt-1">
                              "Olha, essa palavra é BO-LA. BOLA!"
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-yellow-soft text-navy w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                          <div>
                            <strong>Deixe a criança colorir:</strong>
                            <p className="text-sm text-gray-300 mt-1">
                              Sem cobrar perfeição, apenas para criar familiaridade
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-yellow-soft text-navy w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                          <div>
                            <strong>Celebre o momento:</strong>
                            <p className="text-sm text-gray-300 mt-1">
                              "Muito bem! Você está aprendendo a ler!" (mesmo que só observou)
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>

                    <div className="bg-yellow-soft/20 border-2 border-yellow-soft/50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-6 h-6 text-yellow-soft mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-yellow-soft">DICA IMPORTANTE:</strong>
                          <p className="text-sm text-gray-300 mt-1">
                            Pare ANTES da criança cansar. É melhor ela querer mais do que ficar cansada.
                            Se após 5 minutos ela perdeu o interesse, está ótimo! Volte amanhã.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-12 flex justify-center">
                  <Button
                    size="lg"
                    className="bg-coral hover:bg-coral/90 text-lg px-8"
                    onClick={() => setActiveSection("rotina")}
                  >
                    Ver Rotina Diária Ideal
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* ROTINA DIÁRIA */}
            <TabsContent value="rotina" className="space-y-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-navy mb-6 font-fredoka">
                  Rotina Diária Ideal
                </h2>

                <p className="text-xl text-gray-600 mb-8">
                  Um exemplo de sessão perfeita de 10 minutos que você pode replicar todos os dias
                </p>

                <div className="space-y-6">
                  {/* Minutos 1-2 */}
                  <Card className="border-l-4 border-mint">
                    <CardHeader className="bg-mint/5">
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <div className="bg-mint text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                            1-2
                          </div>
                          Aquecimento e Conexão
                        </CardTitle>
                        <Badge variant="outline" className="border-mint text-mint">
                          2 minutos
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <strong className="text-navy block mb-2">🎯 Objetivo:</strong>
                          <p className="text-gray-700">
                            Criar um momento especial e estabelecer conexão emocional positiva
                          </p>
                        </div>
                        <div>
                          <strong className="text-navy block mb-2">📋 O que fazer:</strong>
                          <ul className="space-y-2 ml-4">
                            <li className="text-gray-700">• Sente-se ao lado da criança (não na frente)</li>
                            <li className="text-gray-700">• "Você está pronto para nossa brincadeira de ler?"</li>
                            <li className="text-gray-700">• Mostre entusiasmo genuíno</li>
                            <li className="text-gray-700">• Deixe a criança escolher a cor do lápis</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Minutos 3-7 */}
                  <Card className="border-l-4 border-soft-blue">
                    <CardHeader className="bg-soft-blue/5">
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <div className="bg-soft-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                            3-7
                          </div>
                          Atividade Principal
                        </CardTitle>
                        <Badge variant="outline" className="border-soft-blue text-soft-blue">
                          5 minutos
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <strong className="text-navy block mb-2">🎯 Objetivo:</strong>
                          <p className="text-gray-700">
                            Trabalhar o conteúdo do dia (varia conforme a semana do cronograma)
                          </p>
                        </div>
                        <div>
                          <strong className="text-navy block mb-2">📋 Exemplo - Semana 1:</strong>
                          <div className="bg-beige p-4 rounded-lg space-y-3">
                            <div>
                              <strong>1. Mostre a palavra completa (30s):</strong>
                              <p className="text-sm text-gray-600 mt-1">
                                "Hoje vamos conhecer essa palavra: BOLA"
                              </p>
                            </div>
                            <div>
                              <strong>2. Decomponha visualmente (1min):</strong>
                              <p className="text-sm text-gray-600 mt-1">
                                "Olha, BOLA tem duas partes: BO e LA. BO-LA"
                              </p>
                            </div>
                            <div>
                              <strong>3. Atividade prática (3min):</strong>
                              <p className="text-sm text-gray-600 mt-1">
                                Criança pinta as sílabas com cores diferentes ou traça as letras pontilhadas
                              </p>
                            </div>
                            <div>
                              <strong>4. Reforço (30s):</strong>
                              <p className="text-sm text-gray-600 mt-1">
                                "Consegue ler comigo? BO-LA, BOLA!"
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Minutos 8-9 */}
                  <Card className="border-l-4 border-coral">
                    <CardHeader className="bg-coral/5">
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <div className="bg-coral text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                            8-9
                          </div>
                          Revisão Rápida
                        </CardTitle>
                        <Badge variant="outline" className="border-coral text-coral">
                          2 minutos
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <strong className="text-navy block mb-2">🎯 Objetivo:</strong>
                          <p className="text-gray-700">
                            Consolidar o aprendizado e reforçar memória
                          </p>
                        </div>
                        <div>
                          <strong className="text-navy block mb-2">📋 O que fazer:</strong>
                          <ul className="space-y-2 ml-4">
                            <li className="text-gray-700">• Mostre novamente as palavras do dia</li>
                            <li className="text-gray-700">• "Qual era mesmo essa palavra?"</li>
                            <li className="text-gray-700">• Elogie qualquer esforço (mesmo se errar)</li>
                            <li className="text-gray-700">• Mostre 1-2 palavras de dias anteriores</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Minuto 10 */}
                  <Card className="border-l-4 border-yellow-soft">
                    <CardHeader className="bg-yellow-soft/5">
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <div className="bg-yellow-soft text-navy w-10 h-10 rounded-full flex items-center justify-center font-bold">
                            10
                          </div>
                          Celebração e Encerramento
                        </CardTitle>
                        <Badge variant="outline" className="border-yellow-soft text-yellow-soft">
                          1 minuto
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <strong className="text-navy block mb-2">🎯 Objetivo:</strong>
                          <p className="text-gray-700">
                            Terminar com sentimento positivo e vontade de voltar
                          </p>
                        </div>
                        <div>
                          <strong className="text-navy block mb-2">📋 O que fazer:</strong>
                          <div className="bg-gradient-to-r from-yellow-soft/20 to-coral/20 p-4 rounded-lg">
                            <ul className="space-y-2">
                              <li className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-soft" />
                                <span>"Você está se tornando um(a) leitor(a)! Parabéns!"</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Heart className="w-5 h-5 text-coral" />
                                <span>Abraço ou high-five</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Award className="w-5 h-5 text-mint" />
                                <span>Adesivo ou carimbo no caderno (opcional)</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-soft-blue" />
                                <span>"Amanhã vamos aprender mais coisas legais!"</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-8 bg-navy text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-yellow-soft" />
                      Regras de Ouro da Rotina
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <strong>Mesma hora, mesmo lugar</strong>
                          <p className="text-sm text-gray-300">Criança se habitua e antecipa</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <strong>Nunca pule dias</strong>
                          <p className="text-sm text-gray-300">Consistência {'>'} Quantidade</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <strong>Pare no auge</strong>
                          <p className="text-sm text-gray-300">Quando estiver divertido ainda</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <strong>Zero distrações</strong>
                          <p className="text-sm text-gray-300">Sem TV, tablet ou irmãos por perto</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-12 flex justify-center gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setActiveSection("inicio")}
                  >
                    Voltar
                  </Button>
                  <Button
                    size="lg"
                    className="bg-coral hover:bg-coral/90"
                    onClick={() => setActiveSection("cronograma")}
                  >
                    Ver Cronograma Completo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* CRONOGRAMA 8 SEMANAS */}
            <TabsContent value="cronograma" className="space-y-12">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-navy mb-6 font-fredoka">
                  Cronograma Completo de 8 Semanas
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Plano detalhado dia a dia para alfabetizar seu filho usando as atividades do Kit Kanji Kids
                </p>

                <div className="bg-gradient-to-r from-yellow-soft/20 to-coral/20 p-6 rounded-2xl mb-8 border-l-4 border-yellow-soft">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-coral mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-navy mb-2">Como Usar Este Cronograma</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Este cronograma está organizado para usar os <strong>3 níveis de atividades</strong> disponíveis na Área de Membros</li>
                        <li>• Você pode escolher entre <strong>letra bastão ou cursiva</strong> conforme preferência</li>
                        <li>• Se seu filho precisar de mais tempo, <strong>não tenha pressa!</strong> Repita a semana até dominar</li>
                        <li>• O cronograma é apenas uma <strong>sugestão</strong>. Adapte ao ritmo do seu filho</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Semanas 1-2: Nível 1 */}
                <div className="space-y-6">
                  <Card className="border-l-8 border-mint">
                    <CardHeader className="bg-mint/5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">1-2</span>
                          </div>
                          <div>
                            <CardTitle className="text-2xl">Semanas 1 e 2: Fundação</CardTitle>
                            <CardDescription className="text-base">Nível 1 - Primeiras sílabas e palavras simples</CardDescription>
                          </div>
                        </div>
                        <Download className="w-6 h-6 text-mint" />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="bg-beige p-6 rounded-xl mb-4">
                        <h4 className="font-bold text-navy mb-3">Material:</h4>
                        <p className="text-gray-700">📥 <strong>Nível 1 - Bastão</strong> ou <strong>Nível 1 - Cursiva</strong> (escolha um)</p>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                          <div className="font-bold text-mint mb-2 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Semana 1: Vogais e Primeiras Sílabas
                          </div>
                          <div className="ml-7 space-y-3 text-sm">
                            <div>
                              <strong className="text-gray-700">Dias 1-2:</strong>
                              <p className="text-gray-600 ml-4">• Apresentação das vogais (A, E, I, O, U)<br/>• Atividade de colorir e traçar<br/>• Use as páginas iniciais do Nível 1</p>
                            </div>
                            <div>
                              <strong className="text-gray-700">Dias 3-5:</strong>
                              <p className="text-gray-600 ml-4">• Família silábica do B (BA, BE, BI, BO, BU)<br/>• Palavras: BOLA, BOCA, BEBÊ<br/>• Colorir e traçar as sílabas com cores diferentes</p>
                            </div>
                            <div>
                              <strong className="text-gray-700">Dias 6-7:</strong>
                              <p className="text-gray-600 ml-4">• Família silábica do C (CA, CO, CU)<br/>• Palavras: CASA, COCO<br/>• Revisão de tudo aprendido</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                          <div className="font-bold text-mint mb-2 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Semana 2: Expandindo o Vocabulário
                          </div>
                          <div className="ml-7 space-y-3 text-sm">
                            <div>
                              <strong className="text-gray-700">Dias 8-10:</strong>
                              <p className="text-gray-600 ml-4">• Família do D (DA, DE, DI, DO, DU)<br/>• Palavras: DADO, DEDO, DUDU<br/>• Combine com sílabas anteriores (BODE, CADE)</p>
                            </div>
                            <div>
                              <strong className="text-gray-700">Dias 11-12:</strong>
                              <p className="text-gray-600 ml-4">• Família do F (FA, FE, FI, FO, FU)<br/>• Palavras: FACA, FOCA, FADA</p>
                            </div>
                            <div>
                              <strong className="text-gray-700">Dias 13-14:</strong>
                              <p className="text-gray-600 ml-4">• Revisão geral das 5 famílias (B, C, D, F, vogais)<br/>• Formação livre de palavras<br/>• 🎁 <strong>Bônus:</strong> Use "Alfabeto Ilustrado" para reforço</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Semanas 3-5: Nível 2 */}
                  <Card className="border-l-8 border-soft-blue">
                    <CardHeader className="bg-soft-blue/5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-soft-blue rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">3-5</span>
                          </div>
                          <div>
                            <CardTitle className="text-2xl">Semanas 3, 4 e 5: Consolidação</CardTitle>
                            <CardDescription className="text-base">Nível 2 - Estruturas mais complexas</CardDescription>
                          </div>
                        </div>
                        <Download className="w-6 h-6 text-soft-blue" />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="bg-beige p-6 rounded-xl mb-4">
                        <h4 className="font-bold text-navy mb-3">Material:</h4>
                        <p className="text-gray-700">📥 <strong>Nível 2 - Bastão</strong> ou <strong>Nível 2 - Cursiva</strong></p>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                          <div className="font-bold text-soft-blue mb-2 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Semana 3: Novas Famílias
                          </div>
                          <div className="ml-7 space-y-3 text-sm">
                            <div>
                              <strong className="text-gray-700">Dias 15-17:</strong>
                              <p className="text-gray-600 ml-4">• Famílias do G, J, L<br/>• Palavras: GATO, JOGO, LATA, LUVA<br/>• Combinações mais complexas</p>
                            </div>
                            <div>
                              <strong className="text-gray-700">Dias 18-21:</strong>
                              <p className="text-gray-600 ml-4">• Famílias do M, N, P<br/>• Palavras: MALA, NAVIO, PATO, PANELA<br/>• Introdução de palavras com 3 sílabas</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                          <div className="font-bold text-soft-blue mb-2 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Semana 4: Ampliando Vocabulário
                          </div>
                          <div className="ml-7 space-y-3 text-sm">
                            <div>
                              <strong className="text-gray-700">Dias 22-24:</strong>
                              <p className="text-gray-600 ml-4">• Famílias do R, S, T<br/>• Palavras: RATO, SAPO, TATU, TOMATE<br/>• 🎁 Use "Caderno Sílabas Simples" como reforço</p>
                            </div>
                            <div>
                              <strong className="text-gray-700">Dias 25-28:</strong>
                              <p className="text-gray-600 ml-4">• Famílias do V, Z<br/>• Palavras: VACA, VIOLÃO, ZEBRA<br/>• Revisão de todas as famílias trabalhadas</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                          <div className="font-bold text-soft-blue mb-2 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Semana 5: Consolidação Intermediária
                          </div>
                          <div className="ml-7 space-y-3 text-sm">
                            <div>
                              <strong className="text-gray-700">Dias 29-31:</strong>
                              <p className="text-gray-600 ml-4">• Leitura de frases simples<br/>• Combine palavras aprendidas: "O GATO BEBE"<br/>• 🎁 Use "Formando Palavras" para prática extra</p>
                            </div>
                            <div>
                              <strong className="text-gray-700">Dias 32-35:</strong>
                              <p className="text-gray-600 ml-4">• Revisão completa de todas as sílabas<br/>• Jogos de caça-palavras e cruzadinhas<br/>• Avaliação informal do progresso</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Semanas 6-8: Nível 3 */}
                  <Card className="border-l-8 border-coral">
                    <CardHeader className="bg-coral/5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">6-8</span>
                          </div>
                          <div>
                            <CardTitle className="text-2xl">Semanas 6, 7 e 8: Maestria</CardTitle>
                            <CardDescription className="text-base">Nível 3 - Alfabetização completa</CardDescription>
                          </div>
                        </div>
                        <Download className="w-6 h-6 text-coral" />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="bg-beige p-6 rounded-xl mb-4">
                        <h4 className="font-bold text-navy mb-3">Material:</h4>
                        <p className="text-gray-700">📥 <strong>Nível 3 - Bastão</strong> ou <strong>Nível 3 - Cursiva</strong></p>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                          <div className="font-bold text-coral mb-2 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Semana 6: Sílabas Complexas
                          </div>
                          <div className="ml-7 space-y-3 text-sm">
                            <div>
                              <strong className="text-gray-700">Dias 36-38:</strong>
                              <p className="text-gray-600 ml-4">• Encontros consonantais (BR, CR, DR, FR, GR, PR, TR)<br/>• Palavras: BRAÇO, CRUZ, DRAGÃO, FRIO, GRILO, PRATO, TREM</p>
                            </div>
                            <div>
                              <strong className="text-gray-700">Dias 39-42:</strong>
                              <p className="text-gray-600 ml-4">• Dígrafos (NH, LH, CH)<br/>• Palavras: NINHO, FILHO, CHAVE, CHUVA<br/>• Prática intensiva de leitura</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                          <div className="font-bold text-coral mb-2 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Semana 7: Leitura Fluente
                          </div>
                          <div className="ml-7 space-y-3 text-sm">
                            <div>
                              <strong className="text-gray-700">Dias 43-45:</strong>
                              <p className="text-gray-600 ml-4">• Palavras de 4 ou mais sílabas<br/>• BORBOLETA, PASSARINHO, JACARÉ<br/>• 🎁 Use "Descobrindo o Alfabeto" para revisão completa</p>
                            </div>
                            <div>
                              <strong className="text-gray-700">Dias 46-49:</strong>
                              <p className="text-gray-600 ml-4">• Frases completas e pequenos textos<br/>• "O PASSARINHO CANTA NA ÁRVORE"<br/>• Introdução à pontuação básica (. ! ?)</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                          <div className="font-bold text-coral mb-2 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Semana 8: Celebração e Autonomia
                          </div>
                          <div className="ml-7 space-y-3 text-sm">
                            <div>
                              <strong className="text-gray-700">Dias 50-52:</strong>
                              <p className="text-gray-600 ml-4">• Leitura de histórias curtas<br/>• Criança escolhe livrinhos simples<br/>• 🎁 Use "Atividades para Colorir" como recompensa</p>
                            </div>
                            <div>
                              <strong className="text-gray-700">Dias 53-56:</strong>
                              <p className="text-gray-600 ml-4">• Escrita livre e criativa<br/>• Criança escreve suas próprias frases<br/>• <strong className="text-coral">🎉 CELEBRAÇÃO FINAL!</strong> Certificado de conclusão</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-8 bg-gradient-to-r from-navy to-navy/95 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-6 h-6 text-yellow-soft" />
                      Dicas Importantes para o Cronograma
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <strong>Flexibilidade é fundamental:</strong>
                          <p className="text-sm text-gray-300">Algumas crianças completam em 6 semanas, outras em 12. Não há problema!</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <strong>Use os materiais bônus:</strong>
                          <p className="text-sm text-gray-300">Os 10 PDFs bônus são perfeitos para reforçar ou dar uma pausa divertida</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <strong>Repita quando necessário:</strong>
                          <p className="text-sm text-gray-300">Se uma semana foi difícil, repita antes de avançar. Segurança {'>'} Velocidade</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <strong>Celebre cada semana:</strong>
                          <p className="text-sm text-gray-300">Ao final de cada semana, faça uma mini-celebração com a criança</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-12 flex justify-center gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setActiveSection("rotina")}
                  >
                    Voltar
                  </Button>
                  <Button
                    size="lg"
                    className="bg-coral hover:bg-coral/90"
                    onClick={() => setActiveSection("dicas")}
                  >
                    Ver Dicas Essenciais
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* DICAS ESSENCIAIS */}
            <TabsContent value="dicas" className="space-y-12">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-navy mb-6 font-fredoka">
                  Dicas Essenciais para o Sucesso
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Truques práticos que fazem toda a diferença na alfabetização do seu filho
                </p>

                {/* Dica 1 - Ambiente */}
                <Card className="border-t-4 border-mint">
                  <CardHeader className="bg-mint/5">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-mint rounded-full flex items-center justify-center flex-shrink-0">
                        <Home className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">1. Crie um "Cantinho da Leitura"</CardTitle>
                        <CardDescription className="text-base">
                          Um espaço dedicado faz maravilhas para o foco da criança
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-navy mb-3">✅ Faça:</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-mint mt-1 flex-shrink-0" />
                            <span>Mesa e cadeira do tamanho da criança</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-mint mt-1 flex-shrink-0" />
                            <span>Boa iluminação natural ou luminária adequada</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-mint mt-1 flex-shrink-0" />
                            <span>Caixinha organizada com lápis de cor</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-mint mt-1 flex-shrink-0" />
                            <span>Parede com alfabeto visual (use os bônus!)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-mint mt-1 flex-shrink-0" />
                            <span>Sempre o mesmo lugar para criar hábito</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-3">❌ Evite:</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-coral mt-1 flex-shrink-0" />
                            <span>TV ou tablet no mesmo ambiente</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-coral mt-1 flex-shrink-0" />
                            <span>Barulho de outros irmãos brincando</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-coral mt-1 flex-shrink-0" />
                            <span>Objetos que distraem (brinquedos à vista)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-coral mt-1 flex-shrink-0" />
                            <span>Cadeira desconfortável ou muito alta</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-coral mt-1 flex-shrink-0" />
                            <span>Mudar de lugar a cada dia</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Dica 2 - Motivação */}
                <Card className="border-t-4 border-soft-blue">
                  <CardHeader className="bg-soft-blue/5">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-soft-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">2. Mantenha a Motivação em Alta</CardTitle>
                        <CardDescription className="text-base">
                          Criança motivada aprende 5x mais rápido
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-yellow-soft/20 to-coral/20 p-5 rounded-xl">
                        <h4 className="font-bold text-navy mb-3">🎯 Sistema de Recompensas Simples</h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div className="bg-white p-4 rounded-lg">
                            <div className="font-bold text-coral mb-2">Adesivos</div>
                            <p className="text-gray-600">Cada atividade completada = 1 adesivo no caderno</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <div className="font-bold text-coral mb-2">Tabela de Estrelas</div>
                            <p className="text-gray-600">7 estrelas (semana completa) = prêmio especial</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <div className="font-bold text-coral mb-2">Certificados</div>
                            <p className="text-gray-600">A cada nível completado, imprima um certificado</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-beige p-5 rounded-xl">
                        <h4 className="font-bold text-navy mb-3">💬 Frases que Motivam</h4>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-yellow-soft mt-1 flex-shrink-0" />
                            <span className="text-gray-700">"Você está se tornando um leitor de verdade!"</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-yellow-soft mt-1 flex-shrink-0" />
                            <span className="text-gray-700">"Olha só como você melhorou desde semana passada!"</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-yellow-soft mt-1 flex-shrink-0" />
                            <span className="text-gray-700">"Essa sílaba estava difícil e você conseguiu!"</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-yellow-soft mt-1 flex-shrink-0" />
                            <span className="text-gray-700">"Você é muito esforçado(a), estou orgulhoso!"</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Dica 3 - Técnicas */}
                <Card className="border-t-4 border-coral">
                  <CardHeader className="bg-coral/5">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">3. Técnicas que Funcionam</CardTitle>
                        <CardDescription className="text-base">
                          Truques testados por milhares de pais
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="bg-white p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-coral mb-3">🎨 Use Cores de Forma Estratégica</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          O método japonês funciona melhor com associação visual de cores:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 ml-4">
                          <li>• Cada sílaba uma cor diferente (BA = vermelho, BO = azul, etc)</li>
                          <li>• Vogais sempre com a mesma cor para reconhecimento</li>
                          <li>• Deixe a criança escolher as cores (ela se envolve mais)</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-coral mb-3">👆 Técnica do "Dedo Guia"</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Ensine a criança a acompanhar a leitura com o dedo:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 ml-4">
                          <li>• Aumenta concentração em 70%</li>
                          <li>• Ajuda a separar as sílabas visualmente</li>
                          <li>• Cria conexão olho-mão-cérebro</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-coral mb-3">🎭 Transforme em Teatro</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Dramatize as palavras para tornar memorável:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 ml-4">
                          <li>• "GATO" → miar como gato enquanto lê</li>
                          <li>• "SAPO" → pular como sapo</li>
                          <li>• "BOLA" → fazer movimento de jogar bola</li>
                          <li>• Memória cinestésica é poderosa!</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-coral mb-3">⏱️ Regra dos 10 Minutos Firmes</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Melhor 10 minutos focados que 30 minutos dispersos:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 ml-4">
                          <li>• Use timer visível (criança vê o tempo)</li>
                          <li>• Quando tocar, PARE mesmo se estiver no auge</li>
                          <li>• Deixar com vontade de mais é o segredo</li>
                          <li>• Nunca ultrapasse 15 minutos com iniciantes</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Dica 4 - Erros Comuns */}
                <Card className="border-t-4 border-yellow-soft">
                  <CardHeader className="bg-yellow-soft/5">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-yellow-soft rounded-full flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-7 h-7 text-navy" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">4. Erros Comuns a Evitar</CardTitle>
                        <CardDescription className="text-base">
                          Não cometa esses erros que atrasam o progresso
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-4 bg-coral/5 rounded-lg border-l-4 border-coral">
                        <Frown className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-navy">❌ Comparar com outras crianças</strong>
                          <p className="text-sm text-gray-600 mt-1">
                            "O filho da vizinha já lê!" - Cada criança tem seu ritmo. Comparação só gera frustração.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-coral/5 rounded-lg border-l-4 border-coral">
                        <Frown className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-navy">❌ Pressionar quando a criança está cansada</strong>
                          <p className="text-sm text-gray-600 mt-1">
                            Se ela perdeu o foco, pare! Forçar cria aversão à leitura.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-coral/5 rounded-lg border-l-4 border-coral">
                        <Frown className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-navy">❌ Pular a revisão</strong>
                          <p className="text-sm text-gray-600 mt-1">
                            Sempre revise brevemente o dia anterior. Repetição espaçada é crucial.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-coral/5 rounded-lg border-l-4 border-coral">
                        <Frown className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-navy">❌ Mostrar frustração quando ela erra</strong>
                          <p className="text-sm text-gray-600 mt-1">
                            Seu filho percebe! Errar faz parte. Comemore o esforço, não só o acerto.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-coral/5 rounded-lg border-l-4 border-coral">
                        <Frown className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-navy">❌ Avançar rápido demais</strong>
                          <p className="text-sm text-gray-600 mt-1">
                            Base sólida é tudo. Se a semana 1 não ficou clara, repita antes de ir para semana 2.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-coral/5 rounded-lg border-l-4 border-coral">
                        <Frown className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-navy">❌ Usar celular durante a atividade</strong>
                          <p className="text-sm text-gray-600 mt-1">
                            Seu filho merece 100% da sua atenção nesses 10 minutos. Deixe o celular longe.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Dica 5 - Bônus */}
                <Card className="bg-gradient-to-r from-mint/10 to-soft-blue/10 border-2 border-mint">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-mint rounded-full flex items-center justify-center flex-shrink-0">
                        <Gift className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">5. Como Usar os 10 Materiais Bônus</CardTitle>
                        <CardDescription className="text-base">
                          Maximize o valor dos PDFs extras
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white p-4 rounded-lg">
                        <strong className="text-mint">📚 Alfabeto Ilustrado:</strong>
                        <p className="text-gray-600 mt-1">Pendure na parede do cantinho da leitura como referência visual constante</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <strong className="text-mint">🎨 Atividades para Colorir:</strong>
                        <p className="text-gray-600 mt-1">Use como "prêmio" ao completar uma semana difícil</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <strong className="text-mint">✍️ Caderno Alfabeto Traçado:</strong>
                        <p className="text-gray-600 mt-1">Perfeito para treino motor paralelo ao método</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <strong className="text-mint">🔤 Caderno Sílabas Simples:</strong>
                        <p className="text-gray-600 mt-1">Reforço extra quando criança dominar Nível 1</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <strong className="text-mint">🧩 Formando Palavras:</strong>
                        <p className="text-gray-600 mt-1">Ótimo para revisar de forma lúdica aos sábados</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <strong className="text-mint">🎯 Descobrindo o Alfabeto:</strong>
                        <p className="text-gray-600 mt-1">Use no final do Nível 3 como revisão geral</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-12 flex justify-center gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setActiveSection("cronograma")}
                  >
                    Voltar
                  </Button>
                  <Button
                    size="lg"
                    className="bg-coral hover:bg-coral/90"
                    onClick={() => setActiveSection("problemas")}
                  >
                    Ver Solução de Problemas
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* SOLUÇÃO DE PROBLEMAS */}
            <TabsContent value="problemas" className="space-y-12">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-navy mb-6 font-fredoka">
                  Solução de Problemas Comuns
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Respostas práticas para os desafios mais frequentes na alfabetização
                </p>

                <div className="space-y-6">
                  {/* Problema 1 */}
                  <Card className="border-l-4 border-coral">
                    <CardHeader className="bg-coral/5">
                      <CardTitle className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-coral mt-1 flex-shrink-0" />
                        <span>"Meu filho não quer fazer as atividades, diz que está chato"</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="bg-mint/10 p-4 rounded-lg">
                          <strong className="text-mint flex items-center gap-2 mb-2">
                            <Lightbulb className="w-5 h-5" />
                            Possíveis Causas:
                          </strong>
                          <ul className="text-sm text-gray-700 space-y-1 ml-6">
                            <li>• Sessões muito longas (mais de 15 minutos)</li>
                            <li>• Nível muito difícil para a idade/capacidade atual</li>
                            <li>• Falta de variedade nas atividades</li>
                            <li>• Ambiente sem recompensas ou celebrações</li>
                          </ul>
                        </div>
                        <div className="bg-soft-blue/10 p-4 rounded-lg">
                          <strong className="text-soft-blue flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5" />
                            Soluções:
                          </strong>
                          <ul className="text-sm text-gray-700 space-y-2 ml-6">
                            <li><strong>1. Reduza o tempo:</strong> Faça apenas 5 minutos por 1 semana</li>
                            <li><strong>2. Aumente a gamificação:</strong> Sistema de adesivos/estrelas imediato</li>
                            <li><strong>3. Alterne materiais:</strong> Use os PDFs bônus para variar</li>
                            <li><strong>4. Envolva a criança:</strong> "Qual cor você quer usar hoje?"</li>
                            <li><strong>5. Mude o horário:</strong> Talvez esteja cansado nesse momento do dia</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Problema 2 */}
                  <Card className="border-l-4 border-soft-blue">
                    <CardHeader className="bg-soft-blue/5">
                      <CardTitle className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-soft-blue mt-1 flex-shrink-0" />
                        <span>"Ele confunde letras parecidas (b/d, p/q)"</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="bg-beige p-4 rounded-lg">
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Isso é COMPLETAMENTE NORMAL</strong> e esperado! A confusão de letras espelhadas
                            ocorre em 80% das crianças em alfabetização.
                          </p>
                        </div>
                        <div className="bg-soft-blue/10 p-4 rounded-lg">
                          <strong className="text-soft-blue flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5" />
                            Técnicas para Superar:
                          </strong>
                          <ul className="text-sm text-gray-700 space-y-2 ml-6">
                            <li><strong>Associação visual:</strong> "O 'b' tem barriga na frente (bola)" vs "O 'd' tem barriga atrás"</li>
                            <li><strong>Movimento físico:</strong> Desenhe as letras no ar com o corpo</li>
                            <li><strong>Cores diferentes:</strong> 'b' sempre azul, 'd' sempre vermelho</li>
                            <li><strong>Treino separado:</strong> Trabalhe uma letra por vez, não as duas juntas</li>
                            <li><strong>Repetição espaçada:</strong> Revisite essas letras em dias alternados</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Problema 3 */}
                  <Card className="border-l-4 border-mint">
                    <CardHeader className="bg-mint/5">
                      <CardTitle className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-mint mt-1 flex-shrink-0" />
                        <span>"Meu filho tem 4 anos, está muito novo?"</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="bg-beige p-4 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <strong>Não existe idade "certa"!</strong> O método funciona de 3 a 12 anos. O importante
                            é observar se a criança demonstra interesse e consegue manter foco por 5-10 minutos.
                          </p>
                        </div>
                        <div className="bg-mint/10 p-4 rounded-lg">
                          <strong className="text-mint flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5" />
                            Sinais de Prontidão (3-4 anos):
                          </strong>
                          <ul className="text-sm text-gray-700 space-y-1 ml-6">
                            <li>✅ Reconhece algumas letras do próprio nome</li>
                            <li>✅ Consegue segurar lápis corretamente</li>
                            <li>✅ Mostra interesse por livros ou letras</li>
                            <li>✅ Consegue se concentrar por 5 minutos</li>
                          </ul>
                          <p className="text-sm text-gray-700 mt-3">
                            <strong>Para crianças mais novas:</strong> Comece com os PDFs bônus de colorir e
                            apresente apenas 1-2 sílabas por semana, sem pressa!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Problema 4 */}
                  <Card className="border-l-4 border-yellow-soft">
                    <CardHeader className="bg-yellow-soft/5">
                      <CardTitle className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-yellow-soft mt-1 flex-shrink-0" />
                        <span>"Estamos há 3 semanas no Nível 1 e ainda não avança"</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="bg-beige p-4 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <strong>Não há problema nenhum!</strong> Algumas crianças precisam de 4-6 semanas no Nível 1.
                            O importante é a consolidação, não a velocidade.
                          </p>
                        </div>
                        <div className="bg-yellow-soft/10 p-4 rounded-lg">
                          <strong className="text-navy flex items-center gap-2 mb-2">
                            <Target className="w-5 h-5" />
                            Teste de Prontidão para Nível 2:
                          </strong>
                          <p className="text-sm text-gray-700 mb-2">Sua criança está pronta quando conseguir:</p>
                          <ul className="text-sm text-gray-700 space-y-1 ml-6">
                            <li>☑️ Reconhecer as 5 vogais imediatamente</li>
                            <li>☑️ Ler pelo menos 10 palavras simples (BOLA, CASA, GATO...)</li>
                            <li>☑️ Identificar as sílabas BA, BE, BI, BO, BU sozinha</li>
                            <li>☑️ Mostrar confiança (não hesitação excessiva)</li>
                          </ul>
                          <p className="text-sm text-coral mt-3 font-bold">
                            ⚠️ Se não cumpre todos os critérios, continue no Nível 1!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Problema 5 */}
                  <Card className="border-l-4 border-coral">
                    <CardHeader className="bg-coral/5">
                      <CardTitle className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-coral mt-1 flex-shrink-0" />
                        <span>"Ele lê bem mas não consegue escrever"</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="bg-beige p-4 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <strong>Completamente normal!</strong> Leitura e escrita são habilidades diferentes.
                            A leitura geralmente vem antes da escrita fluente.
                          </p>
                        </div>
                        <div className="bg-coral/10 p-4 rounded-lg">
                          <strong className="text-coral flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5" />
                            Como Desenvolver a Escrita:
                          </strong>
                          <ul className="text-sm text-gray-700 space-y-2 ml-6">
                            <li><strong>1. Coordenação motora:</strong> Use "Caderno Alfabeto Traçado" (bônus) diariamente</li>
                            <li><strong>2. Letra bastão primeiro:</strong> Mais fácil que cursiva para iniciantes</li>
                            <li><strong>3. Cópia antes de ditado:</strong> Deixe copiar palavras antes de escrever de memória</li>
                            <li><strong>4. Linhas pontilhadas:</strong> Ótimas para treino (use os PDFs do kit)</li>
                            <li><strong>5. Paciência:</strong> Escrita bonita leva 6-12 meses após aprender a ler</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Problema 6 */}
                  <Card className="border-l-4 border-soft-blue">
                    <CardHeader className="bg-soft-blue/5">
                      <CardTitle className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-soft-blue mt-1 flex-shrink-0" />
                        <span>"Ele fica frustrado quando erra e desiste"</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="bg-soft-blue/10 p-4 rounded-lg">
                          <strong className="text-soft-blue flex items-center gap-2 mb-2">
                            <Heart className="w-5 h-5" />
                            Estratégias de Gestão Emocional:
                          </strong>
                          <ul className="text-sm text-gray-700 space-y-2 ml-6">
                            <li><strong>Normalize o erro:</strong> "Todo mundo erra quando está aprendendo! Eu também errava."</li>
                            <li><strong>Celebre tentativas:</strong> "Que legal que você tentou! Vamos tentar de novo juntos?"</li>
                            <li><strong>Reduza dificuldade:</strong> Volte para atividades que ele domina, depois tente novamente</li>
                            <li><strong>Sistema de progresso visual:</strong> Mostre quanto já avançou (caderno de adesivos)</li>
                            <li><strong>Histórias motivadoras:</strong> "Sabe que até adultos erram palavras? É normal!"</li>
                            <li><strong>Pausas estratégicas:</strong> Se frustroumuito, pare e volte no dia seguinte</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Problema 7 */}
                  <Card className="border-l-4 border-mint">
                    <CardHeader className="bg-mint/5">
                      <CardTitle className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-mint mt-1 flex-shrink-0" />
                        <span>"Tenho dúvida entre começar com bastão ou cursiva"</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-mint/10 p-4 rounded-lg">
                            <strong className="text-mint mb-2 block">✍️ Letra Bastão</strong>
                            <p className="text-sm text-gray-700 mb-2"><strong>Vantagens:</strong></p>
                            <ul className="text-xs text-gray-600 space-y-1 ml-4">
                              <li>• Mais fácil de reconhecer (parecida com impressos)</li>
                              <li>• Criança lê placas e livros mais facilmente</li>
                              <li>• Traçado mais simples</li>
                            </ul>
                            <p className="text-sm text-gray-700 mt-3 mb-2"><strong>Desvantagens:</strong></p>
                            <ul className="text-xs text-gray-600 space-y-1 ml-4">
                              <li>• Não conecta letras (cada uma separada)</li>
                            </ul>
                          </div>
                          <div className="bg-soft-blue/10 p-4 rounded-lg">
                            <strong className="text-soft-blue mb-2 block">✍️ Letra Cursiva</strong>
                            <p className="text-sm text-gray-700 mb-2"><strong>Vantagens:</strong></p>
                            <ul className="text-xs text-gray-600 space-y-1 ml-4">
                              <li>• Fluxo contínuo facilita escrita</li>
                              <li>• Menos confusão entre letras (b/d)</li>
                              <li>• Preferida em algumas escolas</li>
                            </ul>
                            <p className="text-sm text-gray-700 mt-3 mb-2"><strong>Desvantagens:</strong></p>
                            <ul className="text-xs text-gray-600 space-y-1 ml-4">
                              <li>• Traçado mais complexo</li>
                              <li>• Precisa de coordenação motora melhor</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-yellow-soft/20 p-4 rounded-lg border-l-4 border-yellow-soft">
                          <strong className="text-navy">🎯 Nossa Recomendação:</strong>
                          <p className="text-sm text-gray-700 mt-2">
                            <strong>Comece com BASTÃO</strong> se a criança tem 3-5 anos ou está iniciando.
                            <strong> Comece com CURSIVA</strong> se já tem 6+ anos e boa coordenação motora.
                            Você pode mudar depois se quiser - os PDFs permitem experimentar!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Problema 8 */}
                  <Card className="border-l-4 border-yellow-soft">
                    <CardHeader className="bg-yellow-soft/5">
                      <CardTitle className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-yellow-soft mt-1 flex-shrink-0" />
                        <span>"Como sei se meu filho tem dificuldade real de aprendizagem?"</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="bg-beige p-4 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <strong>Primeiro:</strong> A maioria das "dificuldades" é apenas ritmo próprio da criança.
                            Dito isso, observe estes sinais por 3+ meses:
                          </p>
                        </div>
                        <div className="bg-coral/10 p-4 rounded-lg border-l-4 border-coral">
                          <strong className="text-coral mb-2 block">⚠️ Sinais que Merecem Atenção Profissional:</strong>
                          <ul className="text-sm text-gray-700 space-y-2 ml-6">
                            <li>🔴 Após 4+ meses, não reconhece nem 5 letras</li>
                            <li>🔴 Não consegue focar por 3 minutos em nada (TDAH possível)</li>
                            <li>🔴 Inverte MUITAS letras mesmo após 6 meses (dislexia possível)</li>
                            <li>🔴 Dificuldade extrema em distinguir sons (processamento auditivo)</li>
                            <li>🔴 Regride (esquece completamente o que sabia)</li>
                          </ul>
                          <p className="text-sm text-navy mt-3 font-bold">
                            Se observar 2+ sinais, consulte psicopedagogo ou fonoaudiólogo. Diagnóstico precoce ajuda muito!
                          </p>
                        </div>
                        <div className="bg-mint/10 p-4 rounded-lg">
                          <strong className="text-mint mb-2 block">✅ Sinais NORMAIS (não são problemas):</strong>
                          <ul className="text-sm text-gray-700 space-y-1 ml-6">
                            <li>• Aprender devagar mas consistentemente</li>
                            <li>• Confundir b/d, p/q até os 7 anos</li>
                            <li>• Precisar de muitas repetições</li>
                            <li>• Dias "bons" e "ruins" alternados</li>
                            <li>• Resistência inicial (primeiras 2 semanas)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-8 bg-gradient-to-r from-navy to-navy/95 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-6 h-6 text-yellow-soft" />
                      Ainda com Dúvidas?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Nossa comunidade de pais e o suporte estão aqui para ajudar!
                    </p>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <strong>Email de Suporte:</strong>
                          <p className="text-sm text-gray-300">suportekanjakids@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <div>
                          <strong>Tempo de Resposta:</strong>
                          <p className="text-sm text-gray-300">Até 48h úteis</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-12 flex justify-center gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setActiveSection("dicas")}
                  >
                    Voltar
                  </Button>
                  <Button
                    size="lg"
                    className="bg-coral hover:bg-coral/90"
                    onClick={() => setActiveSection("progresso")}
                  >
                    Ver Acompanhamento de Progresso
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* ACOMPANHAMENTO DE PROGRESSO */}
            <TabsContent value="progresso" className="space-y-12">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-navy mb-6 font-fredoka">
                  Acompanhamento de Progresso
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Ferramentas e checklists para monitorar a evolução do seu filho
                </p>

                {/* Checklist por Nível */}
                <div className="space-y-6">
                  {/* Nível 1 Checklist */}
                  <Card className="border-l-8 border-mint">
                    <CardHeader className="bg-mint/5">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center text-white font-bold">
                          1
                        </div>
                        Checklist Nível 1 - Iniciante
                      </CardTitle>
                      <CardDescription className="text-base">
                        Marque cada habilidade quando seu filho demonstrar domínio
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <h4 className="font-bold text-navy mb-3">📖 Leitura:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Reconhece as 5 vogais (A, E, I, O, U)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Identifica família BA (BA, BE, BI, BO, BU)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Lê palavras simples: BOLA, BOCA, BEBÊ</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Identifica famílias C, D, F</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Lê 15+ palavras de 2 sílabas</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-bold text-navy mb-3">✍️ Escrita:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Traça vogais com ajuda de pontilhado</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Copia palavras simples vendo o modelo</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Segura lápis corretamente</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Escreve o próprio nome</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-gradient-to-r from-mint/20 to-soft-blue/20 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong className="text-mint">✅ Critério para avançar:</strong> Deve dominar pelo menos 8 dos 9 itens acima
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Nível 2 Checklist */}
                  <Card className="border-l-8 border-soft-blue">
                    <CardHeader className="bg-soft-blue/5">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <div className="w-12 h-12 bg-soft-blue rounded-full flex items-center justify-center text-white font-bold">
                          2
                        </div>
                        Checklist Nível 2 - Intermediário
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <h4 className="font-bold text-navy mb-3">📖 Leitura:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Lê todas as famílias silábicas simples (B-Z)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Lê palavras de 3 sílabas (PANELA, JANELA)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Lê frases curtas: "O GATO BEBE"</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Reconhece 50+ palavras rapidamente</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Separa palavras em sílabas oralmente</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-bold text-navy mb-3">✍️ Escrita:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Escreve palavras de 2 sílabas sem modelo</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Copia frases simples corretamente</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Traço das letras está mais firme</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Respeita espaçamento entre palavras</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-gradient-to-r from-soft-blue/20 to-coral/20 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong className="text-soft-blue">✅ Critério para avançar:</strong> Deve dominar 7 dos 9 itens
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Nível 3 Checklist */}
                  <Card className="border-l-8 border-coral">
                    <CardHeader className="bg-coral/5">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center text-white font-bold">
                          3
                        </div>
                        Checklist Nível 3 - Avançado
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <h4 className="font-bold text-navy mb-3">📖 Leitura:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Lê encontros consonantais (BR, CR, DR, etc)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Lê dígrafos (NH, LH, CH)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Lê palavras de 4+ sílabas (BORBOLETA)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Lê textos curtos (3-4 frases) fluentemente</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Compreende o que leu (responde perguntas)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Reconhece pontuação básica (. ! ?)</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-bold text-navy mb-3">✍️ Escrita:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Escreve palavras complexas com apoio</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Escreve frases simples sozinho</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Letra legível e organizada</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">☐</span>
                              <span className="text-gray-700">Tenta escrever palavras novas foneticamente</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-gradient-to-r from-coral/20 to-yellow-soft/20 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong className="text-coral">🎉 Parabéns!</strong> Se domina 8+ itens, seu filho está alfabetizado!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Registro Semanal */}
                <Card className="mt-8 border-t-4 border-navy">
                  <CardHeader className="bg-navy/5">
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Calendar className="w-7 h-7 text-navy" />
                      Registro Semanal de Progresso
                    </CardTitle>
                    <CardDescription className="text-base">
                      Modelo para acompanhar semana a semana (imprima ou copie)
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="bg-beige p-6 rounded-xl space-y-4">
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                          <strong className="text-navy block mb-2">📅 Semana #_____ (Data: ____)</strong>
                          <div className="space-y-2 ml-4">
                            <div className="flex items-start gap-2">
                              <span className="text-gray-600">Nível trabalhado:</span>
                              <span className="text-gray-400">_____________</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-600">Material usado:</span>
                              <span className="text-gray-400">_____________</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-600">Dias praticados:</span>
                              <span className="text-gray-400">___ / 7</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <strong className="text-navy block mb-2">📊 Avaliação da Semana:</strong>
                          <div className="space-y-2 ml-4">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-600">Motivação:</span>
                              <div className="flex gap-1">
                                <Smile className="w-4 h-4 text-gray-300" />
                                <Smile className="w-4 h-4 text-gray-300" />
                                <Smile className="w-4 h-4 text-gray-300" />
                                <Smile className="w-4 h-4 text-gray-300" />
                                <Smile className="w-4 h-4 text-gray-300" />
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-600">Dificuldade:</span>
                              <div className="flex gap-1">
                                <Star className="w-4 h-4 text-gray-300" />
                                <Star className="w-4 h-4 text-gray-300" />
                                <Star className="w-4 h-4 text-gray-300" />
                                <Star className="w-4 h-4 text-gray-300" />
                                <Star className="w-4 h-4 text-gray-300" />
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-600">Progresso:</span>
                              <div className="flex gap-1">
                                <TrendingUp className="w-4 h-4 text-gray-300" />
                                <TrendingUp className="w-4 h-4 text-gray-300" />
                                <TrendingUp className="w-4 h-4 text-gray-300" />
                                <TrendingUp className="w-4 h-4 text-gray-300" />
                                <TrendingUp className="w-4 h-4 text-gray-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t-2 border-gray-300 pt-4">
                        <strong className="text-navy block mb-2">📝 Palavras que aprendeu esta semana:</strong>
                        <p className="text-gray-400 text-sm ml-4">
                          _________________________________________________<br/>
                          _________________________________________________
                        </p>
                      </div>

                      <div className="border-t-2 border-gray-300 pt-4">
                        <strong className="text-navy block mb-2">💡 Observações / Dificuldades:</strong>
                        <p className="text-gray-400 text-sm ml-4">
                          _________________________________________________<br/>
                          _________________________________________________<br/>
                          _________________________________________________
                        </p>
                      </div>

                      <div className="border-t-2 border-gray-300 pt-4">
                        <strong className="text-navy block mb-2">🎯 Foco para próxima semana:</strong>
                        <p className="text-gray-400 text-sm ml-4">
                          _________________________________________________
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Indicadores de Progresso */}
                <Card className="border-t-4 border-mint">
                  <CardHeader className="bg-mint/5">
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <BarChart className="w-7 h-7 text-mint" />
                      Indicadores de Bom Progresso
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-bold text-mint mb-3">✅ Sinais Positivos:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-mint mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Pede para fazer as atividades</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-mint mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Tenta ler placas e embalagens na rua</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-mint mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Mostra orgulho quando acerta</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-mint mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Reconhece palavras que já trabalhou</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-mint mt-1 flex-shrink-0" />
                            <span className="text-gray-700">A cada semana fica mais rápido</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-mint mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Comenta com família que "sabe ler"</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-bold text-coral mb-3">⚠️ Sinais de Atenção:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-coral mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Sempre resiste muito a fazer</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-coral mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Não retém nada da semana anterior</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-coral mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Chora ou se frustra demais</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-coral mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Após 2 meses, zero progresso visível</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 italic mt-3 ml-6">
                          * Se 2+ sinais persistirem por 1 mês, reveja a seção "Solução de Problemas" ou consulte suporte
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Celebração Final */}
                <Card className="bg-gradient-to-r from-yellow-soft/20 to-coral/20 border-2 border-yellow-soft">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Award className="w-8 h-8 text-coral" />
                      Marco de Alfabetização Completa
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Seu filho estará <strong>oficialmente alfabetizado</strong> quando conseguir:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-lg">
                        <strong className="text-coral block mb-2">📖 Na Leitura:</strong>
                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                          <li>• Ler livrinhos infantis simples sozinho</li>
                          <li>• Compreender o que leu</li>
                          <li>• Ler com fluência (sem soletrar)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <strong className="text-coral block mb-2">✍️ Na Escrita:</strong>
                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                          <li>• Escrever frases simples sozinho</li>
                          <li>• Letra legível</li>
                          <li>• Tentar palavras novas foneticamente</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-coral text-white p-6 rounded-xl text-center">
                      <h3 className="text-2xl font-bold mb-2">🎉 Parabéns!</h3>
                      <p>Quando atingir esses marcos, celebre MUITO! Você alfabetizou seu filho em casa!</p>
                      <p className="text-sm mt-3 text-white/90">
                        Imprima um certificado, faça uma festa especial, tire fotos. Este é um momento único!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-12 flex justify-center gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setActiveSection("problemas")}
                  >
                    Voltar
                  </Button>
                  <Button
                    size="lg"
                    className="bg-navy hover:bg-navy/90 text-white"
                    onClick={() => navigate("/membros")}
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Voltar para Área de Membros
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-coral to-pink-soft text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-fredoka">
            Você Está Pronto!
          </h2>
          <p className="text-xl mb-8">
            Com este guia e os materiais, você tem tudo para alfabetizar seu filho
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8"
              onClick={() => navigate("/membros")}
            >
              <Home className="w-5 h-5 mr-2" />
              Voltar para Área de Membros
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white text-coral hover:bg-white/90"
              onClick={() => navigate("/japones")}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Ver Método Japonês
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuiaPais;
