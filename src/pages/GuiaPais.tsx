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
  Download
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

            {/* CRONOGRAMA - Placeholder */}
            <TabsContent value="cronograma">
              <div className="max-w-4xl mx-auto text-center py-12">
                <Calendar className="w-24 h-24 mx-auto mb-6 text-coral" />
                <h2 className="text-3xl font-bold mb-4">Cronograma 8 Semanas</h2>
                <p className="text-gray-600 mb-8">
                  Conteúdo detalhado semana a semana será adicionado em breve.
                </p>
                <Button onClick={() => setActiveSection("dicas")}>
                  Ver Dicas Essenciais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* DICAS - Placeholder */}
            <TabsContent value="dicas">
              <div className="max-w-4xl mx-auto text-center py-12">
                <Lightbulb className="w-24 h-24 mx-auto mb-6 text-yellow-soft" />
                <h2 className="text-3xl font-bold mb-4">Dicas Essenciais</h2>
                <p className="text-gray-600 mb-8">
                  Dicas práticas e truques serão adicionados em breve.
                </p>
                <Button onClick={() => setActiveSection("problemas")}>
                  Ver Solução de Problemas
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* PROBLEMAS - Placeholder */}
            <TabsContent value="problemas">
              <div className="max-w-4xl mx-auto text-center py-12">
                <AlertCircle className="w-24 h-24 mx-auto mb-6 text-coral" />
                <h2 className="text-3xl font-bold mb-4">Solução de Problemas</h2>
                <p className="text-gray-600 mb-8">
                  FAQ e soluções para problemas comuns serão adicionados em breve.
                </p>
                <Button onClick={() => setActiveSection("progresso")}>
                  Ver Acompanhamento de Progresso
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* PROGRESSO - Placeholder */}
            <TabsContent value="progresso">
              <div className="max-w-4xl mx-auto text-center py-12">
                <TrendingUp className="w-24 h-24 mx-auto mb-6 text-mint" />
                <h2 className="text-3xl font-bold mb-4">Acompanhamento de Progresso</h2>
                <p className="text-gray-600 mb-8">
                  Ferramentas e checklists de progresso serão adicionados em breve.
                </p>
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
