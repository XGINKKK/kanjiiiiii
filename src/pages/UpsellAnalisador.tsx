import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Sparkles, Target, Clock, Brain, Heart, ArrowRight, Loader2, CreditCard } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function UpsellAnalisador() {
  const [stage, setStage] = useState<'offer' | 'form' | 'payment' | 'plan'>('offer');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    conditions: [] as string[],
    currentLevel: '',
    specificDifficulties: '',
    dailyTime: '',
    parentConcerns: '',
    learningStyle: ''
  });

  const handleAcceptOffer = () => {
    setStage('form');
    // Scroll to form
    setTimeout(() => {
      document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleConditionChange = (condition: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      conditions: checked
        ? [...prev.conditions, condition]
        : prev.conditions.filter(c => c !== condition)
    }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    // Gerar ID único para este pedido
    const newOrderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setOrderId(newOrderId);

    // Salvar dados do formulário no localStorage
    localStorage.setItem('analisador_form_data', JSON.stringify(formData));
    localStorage.setItem('analisador_order_id', newOrderId);

    // Ir para página de pagamento
    setStage('payment');

    // Scroll to payment
    setTimeout(() => {
      document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleGeneratePlan = async () => {
    setIsGenerating(true);

    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Erro ao gerar plano');
      }

      setGeneratedPlan(data.plan);
      setStage('plan');

      // Scroll to plan
      setTimeout(() => {
        document.getElementById('plan-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao gerar o plano. Por favor, tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Polling para verificar status do pagamento
  useEffect(() => {
    if (stage !== 'payment' || !orderId) return;

    const checkPayment = async () => {
      try {
        const response = await fetch(`/api/check-payment?order_id=${orderId}`);
        const data = await response.json();

        if (data.status === 'paid') {
          // Pagamento confirmado! Gerar plano
          await handleGeneratePlan();
        }
      } catch (error) {
        console.error('Error checking payment:', error);
      }
    };

    // Verificar a cada 3 segundos
    const interval = setInterval(checkPayment, 3000);

    // Limpar ao desmontar
    return () => clearInterval(interval);
  }, [stage, orderId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-blue/20 via-background to-beige/20">
      {/* Offer Section */}
      {stage === 'offer' && (
        <div className="container mx-auto px-4 py-12">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-fredoka font-bold text-sm">OFERTA EXCLUSIVA PÓS-COMPRA</span>
            </div>

            <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
              🎯 Parabéns por adquirir o Kit Kanji Kids!
            </h1>

            <p className="font-fredoka text-2xl md:text-3xl text-coral mb-6">
              Mas espere... você está prestes a cometer um erro comum!
            </p>

            <div className="bg-gradient-to-r from-coral/10 to-accent/10 border-2 border-coral/30 rounded-2xl p-6 md:p-8 mb-8">
              <p className="font-inter text-lg md:text-xl text-foreground/90 leading-relaxed">
                O Kit Kanji Kids é ideal para crianças de <strong>2 a 12 anos</strong>, incluindo crianças com <strong>TDAH e Autismo</strong>.
              </p>
              <p className="font-inter text-lg md:text-xl text-foreground/90 leading-relaxed mt-4">
                Mas a forma como um pai de uma criança de <strong className="text-coral">3 anos com TDAH</strong> deve usar é <strong className="text-navy">MUITO diferente</strong> de um pai de uma criança de <strong className="text-coral">8 anos com dificuldade de foco</strong>.
              </p>
            </div>

            <div className="bg-white border-2 border-navy rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="font-fredoka text-2xl md:text-3xl font-bold text-navy mb-4">
                ⚠️ Não use o método "genérico"!
              </h2>
              <p className="font-inter text-lg text-foreground/80 leading-relaxed">
                Cada criança é <strong>única</strong>. Usar as atividades de forma aleatória pode <strong>desperdiçar o potencial</strong> do método e até <strong>desmotivar</strong> seu filho.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-mint to-soft-blue text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <Brain className="w-16 h-16 mx-auto mb-4" />
                <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-3">
                  Apresentando: O Analisador Pedagógico IA
                </h2>
                <p className="font-fredoka text-xl md:text-2xl">
                  Um plano de 4 semanas feito <strong>sob medida</strong> para o seu filho!
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-6">
                <p className="font-inter text-lg leading-relaxed">
                  Responda a um questionário detalhado e deixe nossa <strong>Inteligência Artificial especializada</strong> criar um plano de ação de 4 semanas, passo a passo, dizendo <strong>exatamente</strong>:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Target, text: "Quais atividades usar em cada dia" },
                  { icon: ArrowRight, text: "Em que ordem progressiva trabalhar" },
                  { icon: Clock, text: "Por quanto tempo praticar cada atividade" },
                  { icon: Brain, text: "Estratégias adaptadas às necessidades do seu filho" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur rounded-xl p-4">
                    <item.icon className="w-6 h-6 flex-shrink-0 mt-1" />
                    <p className="font-inter text-base">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="font-fredoka text-3xl font-bold text-navy text-center mb-8">
              O que você vai receber:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "📅 Plano de 4 Semanas Personalizado",
                  description: "Cronograma diário detalhado baseado na idade, condições e necessidades específicas do seu filho"
                },
                {
                  title: "🎯 Atividades Específicas",
                  description: "Não fique perdido! Saiba exatamente qual sílaba, tema e nível de dificuldade usar em cada dia"
                },
                {
                  title: "🧠 Estratégias para TDAH e Autismo",
                  description: "Técnicas comprovadas adaptadas para crianças com necessidades especiais"
                },
                {
                  title: "⏱️ Gestão de Tempo Realista",
                  description: "Plano adaptado ao tempo que você tem disponível por dia (mesmo que sejam apenas 15 minutos!)"
                },
                {
                  title: "📊 Indicadores de Progresso",
                  description: "Saiba quando avançar e quando reforçar cada fase do aprendizado"
                },
                {
                  title: "💡 Dicas de Especialistas",
                  description: "Orientações práticas de pedagogos para manter a motivação e engajamento"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-mint/20">
                  <h4 className="font-fredoka font-bold text-navy text-lg mb-2">
                    {benefit.title}
                  </h4>
                  <p className="font-inter text-foreground/70 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-beige/50 to-soft-blue/50 rounded-2xl p-6 md:p-8 border-2 border-mint/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-fredoka font-bold text-navy text-xl mb-2">
                    Por que pais que usam planos personalizados têm 3x mais sucesso?
                  </h4>
                  <p className="font-inter text-foreground/80 leading-relaxed">
                    Porque seguem um caminho claro, adequado à realidade deles. Sem tentativa e erro. Sem frustração. Apenas <strong>resultados consistentes</strong> em 4 semanas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border-4 border-coral p-8 md:p-12">
              <div className="text-center mb-6">
                <p className="font-fredoka text-lg text-foreground/60 mb-2">
                  Valor de uma consulta pedagógica personalizada:
                </p>
                <p className="font-fredoka text-3xl text-foreground/40 line-through mb-3">
                  R$ 297,00
                </p>
                <p className="font-fredoka text-sm text-coral font-bold mb-4">
                  OFERTA EXCLUSIVA PÓS-COMPRA
                </p>
                <p className="font-fredoka text-6xl md:text-7xl font-bold text-navy mb-2">
                  R$ 97
                </p>
                <p className="font-inter text-lg text-foreground/60">
                  pagamento único
                </p>
              </div>

              <div className="bg-mint/10 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-navy">
                  <CheckCircle2 className="w-5 h-5 text-mint" />
                  <p className="font-inter text-sm">
                    <strong>Garantia:</strong> Se você não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias
                  </p>
                </div>
              </div>

              <Button
                onClick={handleAcceptOffer}
                variant="hero"
                size="lg"
                className="w-full font-fredoka font-bold text-xl py-8"
              >
                Quero Meu Plano Personalizado Agora! 🚀
              </Button>

              <p className="text-center text-sm text-foreground/50 mt-4">
                ⚡ Plano gerado em menos de 2 minutos
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Form Section */}
      {stage === 'form' && (
        <div id="form-section" className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-fredoka text-3xl md:text-4xl font-bold text-navy mb-3">
                📋 Questionário Personalizado
              </h2>
              <p className="font-inter text-lg text-foreground/70">
                Quanto mais detalhes você fornecer, mais personalizado será o plano!
              </p>
            </div>

            <form onSubmit={handleSubmitForm} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
              {/* Child Name */}
              <div>
                <Label htmlFor="childName" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Nome da criança (opcional)
                </Label>
                <Input
                  id="childName"
                  value={formData.childName}
                  onChange={(e) => setFormData(prev => ({ ...prev, childName: e.target.value }))}
                  placeholder="Ex: Miguel"
                  className="font-inter text-base"
                />
              </div>

              {/* Child Age */}
              <div>
                <Label htmlFor="childAge" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Idade da criança * <span className="text-coral">⭐</span>
                </Label>
                <Select
                  value={formData.childAge}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, childAge: value }))}
                  required
                >
                  <SelectTrigger className="font-inter text-base">
                    <SelectValue placeholder="Selecione a idade" />
                  </SelectTrigger>
                  <SelectContent>
                    {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(age => (
                      <SelectItem key={age} value={age.toString()}>
                        {age} anos
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Conditions */}
              <div>
                <Label className="font-fredoka font-bold text-navy text-lg mb-3 block">
                  Condições ou características (selecione todas que se aplicam)
                </Label>
                <div className="space-y-3">
                  {[
                    { id: 'tdah', label: 'TDAH (Déficit de Atenção e Hiperatividade)' },
                    { id: 'autismo', label: 'Autismo / TEA' },
                    { id: 'dificuldade-foco', label: 'Dificuldade de foco/concentração' },
                    { id: 'dificuldade-motora', label: 'Dificuldade motora fina' },
                    { id: 'dislexia', label: 'Dislexia ou suspeita de dislexia' },
                    { id: 'nenhuma', label: 'Nenhuma condição específica' }
                  ].map(condition => (
                    <div key={condition.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={condition.id}
                        checked={formData.conditions.includes(condition.label)}
                        onCheckedChange={(checked) => handleConditionChange(condition.label, checked as boolean)}
                      />
                      <label
                        htmlFor={condition.id}
                        className="font-inter text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {condition.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Level */}
              <div>
                <Label htmlFor="currentLevel" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Nível atual de alfabetização * <span className="text-coral">⭐</span>
                </Label>
                <Select
                  value={formData.currentLevel}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, currentLevel: value }))}
                  required
                >
                  <SelectTrigger className="font-inter text-base">
                    <SelectValue placeholder="Selecione o nível atual" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pre-alfabetizacao">Pré-alfabetização (não reconhece letras)</SelectItem>
                    <SelectItem value="reconhece-letras">Reconhece algumas letras</SelectItem>
                    <SelectItem value="reconhece-silabas">Reconhece sílabas simples</SelectItem>
                    <SelectItem value="le-palavras-simples">Lê palavras simples</SelectItem>
                    <SelectItem value="le-frases-simples">Lê frases simples</SelectItem>
                    <SelectItem value="alfabetizado">Já alfabetizado (refinando habilidades)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Daily Time */}
              <div>
                <Label htmlFor="dailyTime" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Tempo disponível por dia * <span className="text-coral">⭐</span>
                </Label>
                <Select
                  value={formData.dailyTime}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, dailyTime: value }))}
                  required
                >
                  <SelectTrigger className="font-inter text-base">
                    <SelectValue placeholder="Quanto tempo pode dedicar?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10-15">10-15 minutos</SelectItem>
                    <SelectItem value="15-20">15-20 minutos</SelectItem>
                    <SelectItem value="20-30">20-30 minutos</SelectItem>
                    <SelectItem value="30-45">30-45 minutos</SelectItem>
                    <SelectItem value="45-60">45-60 minutos</SelectItem>
                    <SelectItem value="60+">Mais de 60 minutos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Learning Style */}
              <div>
                <Label htmlFor="learningStyle" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Estilo de aprendizagem preferido
                </Label>
                <Select
                  value={formData.learningStyle}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, learningStyle: value }))}
                >
                  <SelectTrigger className="font-inter text-base">
                    <SelectValue placeholder="Como seu filho aprende melhor?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visual">Visual (aprende vendo)</SelectItem>
                    <SelectItem value="cinestesico">Cinestésico (aprende fazendo/tocando)</SelectItem>
                    <SelectItem value="auditivo">Auditivo (aprende ouvindo)</SelectItem>
                    <SelectItem value="misto">Misto / Não sei</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Specific Difficulties */}
              <div>
                <Label htmlFor="specificDifficulties" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Dificuldades específicas observadas
                </Label>
                <Textarea
                  id="specificDifficulties"
                  value={formData.specificDifficulties}
                  onChange={(e) => setFormData(prev => ({ ...prev, specificDifficulties: e.target.value }))}
                  placeholder="Ex: Tem dificuldade em segurar o lápis, se distrai facilmente, não gosta de atividades repetitivas, etc."
                  rows={4}
                  className="font-inter text-base"
                />
              </div>

              {/* Parent Concerns */}
              <div>
                <Label htmlFor="parentConcerns" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Suas principais preocupações como pai/mãe
                </Label>
                <Textarea
                  id="parentConcerns"
                  value={formData.parentConcerns}
                  onChange={(e) => setFormData(prev => ({ ...prev, parentConcerns: e.target.value }))}
                  placeholder="Ex: Medo de que ele fique desmotivado, preocupação com o atraso em relação aos colegas, ansiedade sobre o futuro escolar, etc."
                  rows={4}
                  className="font-inter text-base"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full font-fredoka font-bold text-xl py-8"
                >
                  Continuar para Pagamento 💳
                </Button>
                <p className="text-center text-sm text-foreground/50 mt-3">
                  ✓ Você será direcionado para realizar o pagamento de R$ 97,00
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Payment Section */}
      {stage === 'payment' && (
        <div id="payment-section" className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full mb-4">
                <CreditCard className="w-5 h-5" />
                <span className="font-fredoka font-bold text-sm">PÁGINA DE PAGAMENTO</span>
              </div>
              <h2 className="font-fredoka text-3xl md:text-4xl font-bold text-navy mb-3">
                💳 Finalize seu Pedido
              </h2>
              <p className="font-inter text-lg text-foreground/70">
                Complete o pagamento para receber seu plano personalizado
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
              {/* Order Summary */}
              <div className="bg-gradient-to-r from-mint/10 to-soft-blue/10 rounded-xl p-6 border-2 border-mint/30">
                <h3 className="font-fredoka font-bold text-navy text-xl mb-4">
                  📋 Resumo do Pedido
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-inter text-foreground/70">Produto:</span>
                    <span className="font-inter font-semibold text-navy">Analisador Pedagógico IA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-foreground/70">Criança:</span>
                    <span className="font-inter font-semibold text-navy">
                      {formData.childName || 'Não informado'}, {formData.childAge} anos
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-foreground/70">ID do Pedido:</span>
                    <span className="font-inter font-mono text-sm text-foreground/60">{orderId}</span>
                  </div>
                  <div className="border-t-2 border-mint/30 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-fredoka text-lg font-bold text-navy">Total:</span>
                      <span className="font-fredoka text-3xl font-bold text-coral">R$ 97,00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Instructions */}
              <div className="bg-gradient-to-br from-beige/30 to-soft-blue/20 rounded-xl p-6 border-2 border-coral/20">
                <h3 className="font-fredoka font-bold text-navy text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  INSTRUÇÕES IMPORTANTES
                </h3>
                <div className="space-y-3">
                  <p className="font-inter text-sm text-foreground/80 leading-relaxed">
                    <strong className="text-navy">Para testar:</strong> Use a URL do webhook abaixo para simular um pagamento:
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-foreground/20">
                    <p className="font-mono text-xs text-foreground/70 mb-2">POST /api/payment-webhook</p>
                    <code className="font-mono text-xs bg-gray-100 p-2 rounded block overflow-x-auto">
{`{
  "event": "pix_paid",
  "payment_id": "${orderId}",
  "customer_email": "cliente@email.com",
  "amount": 97,
  "metadata": {
    "order_id": "${orderId}"
  }
}`}
                    </code>
                  </div>
                  <p className="font-inter text-xs text-foreground/60 italic">
                    💡 Em produção, integre com sua plataforma de pagamento (Stripe, Mercado Pago, etc.) e configure o webhook para enviar notificações automaticamente.
                  </p>
                </div>
              </div>

              {/* Aguardando Pagamento */}
              <div className="text-center py-8">
                <Loader2 className="w-12 h-12 text-mint animate-spin mx-auto mb-4" />
                <h4 className="font-fredoka font-bold text-navy text-xl mb-2">
                  Aguardando Confirmação do Pagamento...
                </h4>
                <p className="font-inter text-foreground/70">
                  Assim que o pagamento for confirmado, seu plano será gerado automaticamente!
                </p>
                <p className="font-inter text-sm text-foreground/50 mt-4">
                  ⏱️ Verificando a cada 3 segundos...
                </p>
              </div>

              {/* Garantia */}
              <div className="bg-mint/10 rounded-xl p-4 border border-mint/30">
                <div className="flex items-center gap-2 text-navy">
                  <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0" />
                  <p className="font-inter text-sm">
                    <strong>Garantia de 7 dias:</strong> Se você não ficar satisfeito, devolvemos 100% do seu dinheiro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plan Display Section */}
      {stage === 'plan' && (
        <div id="plan-section" className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-mint/20 text-mint px-4 py-2 rounded-full mb-4">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-fredoka font-bold text-sm">PLANO GERADO COM SUCESSO!</span>
              </div>
              <h2 className="font-fredoka text-3xl md:text-4xl font-bold text-navy mb-3">
                🎉 Seu Plano Personalizado Está Pronto!
              </h2>
              <p className="font-inter text-lg text-foreground/70">
                Salve esta página ou imprima para ter sempre à mão
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="font-fredoka text-3xl md:text-4xl font-bold text-navy mt-8 mb-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="font-fredoka text-2xl md:text-3xl font-bold text-navy mt-8 mb-4 pb-2 border-b-2 border-mint">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="font-fredoka text-xl md:text-2xl font-bold text-coral mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="font-fredoka text-lg md:text-xl font-bold text-navy mt-4 mb-2">
                      {children}
                    </h4>
                  ),
                  p: ({ children }) => (
                    <p className="font-inter text-base text-foreground/80 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="font-inter text-base text-foreground/80 space-y-2 mb-4 ml-6">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start gap-2">
                      <span className="text-mint mt-1">•</span>
                      <span>{children}</span>
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-navy">{children}</strong>
                  ),
                  hr: () => (
                    <hr className="my-8 border-t-2 border-mint/30" />
                  )
                }}
              >
                {generatedPlan}
              </ReactMarkdown>
            </div>

            {/* Next Steps */}
            <div className="mt-8 bg-gradient-to-r from-mint/20 to-soft-blue/20 rounded-2xl p-6 md:p-8 border-2 border-mint/30">
              <h3 className="font-fredoka text-2xl font-bold text-navy mb-4 text-center">
                📌 Próximos Passos
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl mb-2">📥</div>
                  <p className="font-fredoka font-bold text-navy mb-1">1. Salve esta página</p>
                  <p className="font-inter text-sm text-foreground/70">
                    Marque nos favoritos ou tire print
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="font-fredoka font-bold text-navy mb-1">2. Comece amanhã</p>
                  <p className="font-inter text-sm text-foreground/70">
                    Siga o plano da Semana 1
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl mb-2">📊</div>
                  <p className="font-fredoka font-bold text-navy mb-1">3. Acompanhe o progresso</p>
                  <p className="font-inter text-sm text-foreground/70">
                    Observe os sinais indicados
                  </p>
                </div>
              </div>
            </div>

            {/* Print Button */}
            <div className="text-center mt-8">
              <Button
                onClick={() => window.print()}
                variant="outline"
                size="lg"
                className="font-fredoka font-bold"
              >
                🖨️ Imprimir Plano
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
