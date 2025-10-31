import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Brain,
  Lightbulb,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Download,
  Home,
  Sparkles,
  Users,
  Clock,
  BarChart
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const MetodoJapones = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("introducao");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige via-white to-soft-blue/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy via-navy/95 to-coral/20 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-coral rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-mint rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Button
              variant="ghost"
              className="text-white hover:text-coral"
              onClick={() => navigate("/membros")}
            >
              <Home className="w-4 h-4 mr-2" />
              Voltar para Área de Membros
            </Button>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-coral/20 border-2 border-coral/50 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-yellow-soft" />
              <span className="font-nunito font-bold text-yellow-soft">Técnica Milenar Comprovada</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-fredoka leading-tight">
              Método Visual Japonês
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-soft-blue leading-relaxed">
              A técnica que revolucionou a alfabetização no Japão,
              <br className="hidden md:block" />
              agora adaptada para o português brasileiro
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-mint" />
                <span>Comprovado Cientificamente</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-mint" />
                <span>3-5x Mais Rápido</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-mint" />
                <span>2-12 Anos</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-4xl font-bold text-yellow-soft mb-2">15.000+</div>
                <div className="text-sm">Famílias Usando</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-4xl font-bold text-yellow-soft mb-2">94%</div>
                <div className="text-sm">Taxa de Sucesso</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-4xl font-bold text-yellow-soft mb-2">8 Sem</div>
                <div className="text-sm">Média de Resultado</div>
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
              <TabsTrigger value="introducao" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Introdução
              </TabsTrigger>
              <TabsTrigger value="principios" className="gap-2">
                <Brain className="w-4 h-4" />
                Princípios
              </TabsTrigger>
              <TabsTrigger value="ciencia" className="gap-2">
                <Lightbulb className="w-4 h-4" />
                Ciência
              </TabsTrigger>
              <TabsTrigger value="aplicacao" className="gap-2">
                <Target className="w-4 h-4" />
                Como Aplicar
              </TabsTrigger>
              <TabsTrigger value="resultados" className="gap-2">
                <TrendingUp className="w-4 h-4" />
                Resultados
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeSection} className="w-full">
            {/* INTRODUÇÃO */}
            <TabsContent value="introducao" className="space-y-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-navy mb-6 font-fredoka">
                  O Que É o Método Visual Japonês?
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    O <strong>Método Visual Japonês de Alfabetização</strong> é uma técnica pedagógica
                    revolucionária desenvolvida no Japão há mais de 60 anos, que utiliza a capacidade
                    natural do cérebro humano de reconhecer padrões visuais para acelerar drasticamente
                    o processo de aprendizagem da leitura e escrita.
                  </p>

                  <div className="bg-gradient-to-r from-mint/20 to-soft-blue/20 p-8 rounded-2xl my-8 border-l-4 border-mint">
                    <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-coral" />
                      Por Que Este Método Funciona Tão Bem?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Diferente dos métodos tradicionais ocidentais que começam ensinando letras isoladas
                      (A, B, C...), o Método Visual Japonês trabalha com a <strong>decomposição visual de
                      palavras completas</strong>, permitindo que a criança entenda o processo de formação
                      das sílabas de forma intuitiva, natural e muito mais rápida.
                    </p>
                  </div>

                  <Card className="mb-8">
                    <CardHeader className="bg-gradient-to-r from-coral/10 to-yellow-soft/10">
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-6 h-6 text-coral" />
                        Nossa Adaptação para o Português Brasileiro
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Nossa equipe de pedagogos especializados adaptou cuidadosamente este método
                        para a língua portuguesa, respeitando:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                          <span><strong>Particularidades fonéticas</strong> do português brasileiro</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                          <span><strong>Estrutura silábica</strong> própria do nosso idioma</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                          <span><strong>Contexto cultural brasileiro</strong> nas palavras e exemplos</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                          <span><strong>Princípios fundamentais</strong> que tornam a técnica tão eficaz</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="bg-navy text-white p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">A Diferença Fundamental</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/10 p-6 rounded-xl">
                        <div className="text-coral font-bold mb-2 text-sm">❌ MÉTODO TRADICIONAL</div>
                        <p className="text-sm mb-3">Começa com letras isoladas:</p>
                        <div className="font-mono text-lg">A → B → C → D...</div>
                        <p className="text-sm mt-3 text-gray-300">
                          Criança aprende símbolos abstratos sem contexto
                        </p>
                      </div>
                      <div className="bg-mint/20 p-6 rounded-xl border-2 border-mint">
                        <div className="text-mint font-bold mb-2 text-sm">✅ MÉTODO VISUAL JAPONÊS</div>
                        <p className="text-sm mb-3">Começa com palavras completas:</p>
                        <div className="font-mono text-lg">BOLA → BO + LA</div>
                        <p className="text-sm mt-3 text-gray-300">
                          Criança entende o contexto e decomposição
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex justify-center">
                  <Button
                    size="lg"
                    className="bg-coral hover:bg-coral/90 text-lg px-8"
                    onClick={() => setActiveSection("principios")}
                  >
                    Entender os Princípios
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* PRINCÍPIOS */}
            <TabsContent value="principios" className="space-y-12">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-navy mb-6 font-fredoka text-center">
                  Os 7 Princípios Fundamentais
                </h2>
                <p className="text-center text-xl text-gray-600 mb-12">
                  Cada princípio foi cientificamente validado e comprovado em milhares de crianças
                </p>

                <div className="grid gap-8">
                  {/* Princípio 1 */}
                  <Card className="overflow-hidden border-l-8 border-coral">
                    <CardHeader className="bg-gradient-to-r from-coral/10 to-transparent">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl font-bold text-white">1</span>
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">Visualização Antes da Decomposição</CardTitle>
                          <CardDescription className="text-base">
                            A criança primeiro vê e reconhece a palavra completa
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        Antes de ensinar sílabas ou letras, mostramos a palavra inteira. O cérebro infantil
                        é extraordinário em reconhecer padrões visuais completos.
                      </p>
                      <div className="bg-beige p-6 rounded-xl">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-navy mb-4">BOLA</div>
                          <div className="flex items-center justify-center gap-4 text-2xl">
                            <span className="text-coral font-bold">BO</span>
                            <span className="text-gray-400">+</span>
                            <span className="text-mint font-bold">LA</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4 italic">
                        💡 Resultado: A criança entende que palavras são formadas por partes menores
                      </p>
                    </CardContent>
                  </Card>

                  {/* Princípio 2 */}
                  <Card className="overflow-hidden border-l-8 border-soft-blue">
                    <CardHeader className="bg-gradient-to-r from-soft-blue/10 to-transparent">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-soft-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl font-bold text-white">2</span>
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">Associação Visual-Fonética Multicanal</CardTitle>
                          <CardDescription className="text-base">
                            Cada sílaba é associada a cor, forma e som simultaneamente
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        Ativamos <strong>três canais de memória</strong> ao mesmo tempo: visual (cor/forma),
                        auditivo (som) e motor (escrita). Isso cria conexões neurais múltiplas e mais fortes.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-coral/10 p-4 rounded-xl text-center">
                          <div className="text-4xl font-bold text-coral mb-2">BA</div>
                          <div className="text-sm text-gray-600">Cor Coral</div>
                        </div>
                        <div className="bg-soft-blue/10 p-4 rounded-xl text-center">
                          <div className="text-4xl font-bold text-soft-blue mb-2">BE</div>
                          <div className="text-sm text-gray-600">Cor Azul</div>
                        </div>
                        <div className="bg-mint/10 p-4 rounded-xl text-center">
                          <div className="text-4xl font-bold text-mint mb-2">BI</div>
                          <div className="text-sm text-gray-600">Cor Verde</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4 italic">
                        💡 Resultado: Criança retém 3x mais informação com múltiplos estímulos
                      </p>
                    </CardContent>
                  </Card>

                  {/* Princípio 3 */}
                  <Card className="overflow-hidden border-l-8 border-mint">
                    <CardHeader className="bg-gradient-to-r from-mint/10 to-transparent">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl font-bold text-white">3</span>
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">Repetição Espaçada Inteligente</CardTitle>
                          <CardDescription className="text-base">
                            As mesmas sílabas aparecem em diferentes contextos
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        A sílaba "BA" aparece naturalmente em: BALA, BOLA, BOCA, BARCO... A criança
                        reforça o aprendizado sem perceber que está "estudando".
                      </p>
                      <div className="bg-beige p-6 rounded-xl space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-coral">BA</span>
                          <span className="text-gray-400">→</span>
                          <span className="text-gray-700">BALA, BOLA, BOCA, BANCO</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-coral">LA</span>
                          <span className="text-gray-400">→</span>
                          <span className="text-gray-700">BOLA, MALA, LATA, LADO</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4 italic">
                        💡 Resultado: Aprendizado consolidado sem esforço consciente
                      </p>
                    </CardContent>
                  </Card>

                  {/* Continuar com mais princípios... */}
                  {/* Por brevidade, mostrando estrutura dos próximos */}

                  {/* Princípio 4 - Progressão Natural */}
                  <Card className="overflow-hidden border-l-8 border-yellow-soft">
                    <CardHeader className="bg-gradient-to-r from-yellow-soft/10 to-transparent">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-yellow-soft rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl font-bold text-navy">4</span>
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">Progressão Natural e Gradual</CardTitle>
                          <CardDescription className="text-base">
                            Do simples ao complexo, respeitando o desenvolvimento infantil
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                            1
                          </div>
                          <div>
                            <div className="font-bold">Palavras de 2 sílabas</div>
                            <div className="text-sm text-gray-600">BOLA, GATO, CASA</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-soft-blue rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                            2
                          </div>
                          <div>
                            <div className="font-bold">Palavras de 3 sílabas</div>
                            <div className="text-sm text-gray-600">BONECA, PANELA, JANELA</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                            3
                          </div>
                          <div>
                            <div className="font-bold">Estruturas mais complexas</div>
                            <div className="text-sm text-gray-600">BORBOLETA, PASSARINHO</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Princípio 5 - Aprendizado Lúdico */}
                  <Card className="overflow-hidden border-l-8 border-pink-soft">
                    <CardHeader className="bg-gradient-to-r from-pink-soft/10 to-transparent">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-pink-soft rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl font-bold text-navy">5</span>
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">Aprendizado 100% Lúdico</CardTitle>
                          <CardDescription className="text-base">
                            Brincar é a forma mais eficaz de aprender
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        Todo o processo é apresentado como uma <strong>brincadeira divertida</strong>.
                        Não há pressão, não há cobrança. A criança aprende porque quer, não porque precisa.
                      </p>
                      <div className="bg-gradient-to-r from-pink-soft/20 to-yellow-soft/20 p-6 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-mint mt-1" />
                            <div className="text-sm">
                              <strong>Caça às Sílabas:</strong> Encontre todas as sílabas "BA" nas palavras
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-mint mt-1" />
                            <div className="text-sm">
                              <strong>Jogo de Cores:</strong> Combine sílabas pela cor
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-mint mt-1" />
                            <div className="text-sm">
                              <strong>Monte a Palavra:</strong> Junte as sílabas como peças de quebra-cabeça
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-mint mt-1" />
                            <div className="text-sm">
                              <strong>Leitura de Histórias:</strong> Palavras em contextos divertidos
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Princípios 6 e 7 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-t-4 border-navy">
                      <CardHeader>
                        <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-3">
                          <span className="text-2xl font-bold text-white">6</span>
                        </div>
                        <CardTitle>Contexto Significativo</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">
                          Todas as palavras têm significado real para a criança.
                          Não ensinamos sílabas abstratas, mas palavras do universo infantil.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-t-4 border-coral">
                      <CardHeader>
                        <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center mb-3">
                          <span className="text-2xl font-bold text-white">7</span>
                        </div>
                        <CardTitle>Celebração Constante</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">
                          Cada pequeno avanço é celebrado. Isso reforça positivamente e
                          mantém a criança motivada e confiante.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mt-12 flex justify-center gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setActiveSection("introducao")}
                  >
                    Voltar
                  </Button>
                  <Button
                    size="lg"
                    className="bg-coral hover:bg-coral/90"
                    onClick={() => setActiveSection("ciencia")}
                  >
                    Ver a Ciência
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* CIÊNCIA - Placeholder simplificado */}
            <TabsContent value="ciencia">
              <div className="max-w-4xl mx-auto text-center py-12">
                <Brain className="w-24 h-24 mx-auto mb-6 text-coral" />
                <h2 className="text-3xl font-bold mb-4">Seção em Desenvolvimento</h2>
                <p className="text-gray-600 mb-8">
                  Conteúdo sobre neurociência, pesquisas e estudos científicos será adicionado em breve.
                </p>
                <Button onClick={() => setActiveSection("aplicacao")}>
                  Ver Como Aplicar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* APLICAÇÃO - Placeholder simplificado */}
            <TabsContent value="aplicacao">
              <div className="max-w-4xl mx-auto text-center py-12">
                <Target className="w-24 h-24 mx-auto mb-6 text-mint" />
                <h2 className="text-3xl font-bold mb-4">Seção em Desenvolvimento</h2>
                <p className="text-gray-600 mb-8">
                  Guia passo a passo detalhado será adicionado em breve.
                </p>
                <Button onClick={() => setActiveSection("resultados")}>
                  Ver Resultados
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* RESULTADOS - Placeholder simplificado */}
            <TabsContent value="resultados">
              <div className="max-w-4xl mx-auto text-center py-12">
                <TrendingUp className="w-24 h-24 mx-auto mb-6 text-navy" />
                <h2 className="text-3xl font-bold mb-4">Seção em Desenvolvimento</h2>
                <p className="text-gray-600 mb-8">
                  Depoimentos, casos de sucesso e estatísticas serão adicionados em breve.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-coral to-coral/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-fredoka">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8">
            Acesse todas as atividades e recursos na sua área de membros
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8"
            onClick={() => navigate("/membros")}
          >
            <Home className="w-5 h-5 mr-2" />
            Voltar para Área de Membros
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MetodoJapones;
