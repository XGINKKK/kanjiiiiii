import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Meu filho ainda não reconhece letras. O método funciona?",
    answer:
      "Sim! Na verdade, é o momento ideal para começar. O método japonês não depende de conhecimento prévio de letras. Ele ensina o cérebro da criança a reconhecer padrões visuais primeiro, o que torna o aprendizado das letras muito mais natural depois. Muitas crianças que usam o kit começam justamente nesta fase e têm resultados incríveis.",
  },
  {
    question: "Preciso ter formação pedagógica?",
    answer:
      "Não! O método foi desenvolvido para qualquer pai ou mãe conseguir aplicar, mesmo sem experiência pedagógica. O Guia Completo que acompanha o kit traz passo a passo detalhado, com linguagem simples e exemplos práticos. Além disso, você tem acesso ao suporte pedagógico para tirar qualquer dúvida.",
  },
  {
    question: "Funciona com crianças com TDAH ou Autismo?",
    answer:
      "Sim! O método japonês é especialmente eficaz para crianças com necessidades especiais porque: 1) As sessões são curtas (10 minutos), perfeitas para manter o foco; 2) É totalmente visual, não depende de ouvir ou ficar parado; 3) Respeita o ritmo individual; 4) É lúdico e sem pressão. Muitas famílias relatam que é o primeiro método que realmente funciona com seus filhos.",
  },
  {
    question: "Qual é a idade ideal para começar?",
    answer:
      "O Kit Kanji Kids™ foi desenvolvido para crianças de 2 a 12 anos. Para crianças de 2-3 anos, recomendamos começar com apenas 5 minutos por dia de forma lúdica. De 4-7 anos é a idade ideal para alfabetização completa. De 8-12 anos, o método é excelente para reforço, correção de dificuldades ou crianças que ainda não foram alfabetizadas.",
  },
  {
    question: "Quanto custa e como é o pagamento?",
    answer:
      "O Kit Completo Kanji Kids custa apenas R$ 37,90 (investimento único, sem mensalidades). Você pode pagar no cartão de crédito, PIX (aprovação imediata) ou boleto bancário. Acesso imediato após a confirmação do pagamento. É seu para sempre!",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "A maioria das crianças começa a mostrar evolução visível nas primeiras 2-3 semanas. Você vai perceber seu filho reconhecendo palavras, mostrando mais interesse por livros e textos, e ganhando confiança. A alfabetização completa varia de criança para criança (geralmente entre 3-6 meses), mas o importante é que cada passo é uma vitória natural e sem trauma.",
  },
  {
    question: "Como funciona a garantia?",
    answer:
      "Você tem 7 dias para testar o kit completo com seu filho. Se por qualquer motivo você não estiver satisfeita com os resultados, basta enviar um e-mail e devolvemos 100% do valor investido. Sem perguntas complicadas, sem burocracia. É simples assim.",
  },
  {
    question: "É um PDF para imprimir ou vem impresso?",
    answer:
      "É um kit digital completo que você recebe por e-mail em até 5 minutos. Você pode imprimir em casa (mais econômico e prático) ou usar direto no tablet/celular. Muitas famílias fazem os dois: imprimem os cartões principais e usam o digital para os jogos extras. Você escolhe como prefere usar!",
  },
  {
    question: "Meu filho já está na escola. Vai conflitar com o método da escola?",
    answer:
      "Não! O método japonês é complementar e potencializa qualquer método de alfabetização que a escola use. Ele acelera o reconhecimento visual que ajuda em TODOS os métodos. Na verdade, muitos pais relatam que o filho passou a se destacar na escola depois de começar o kit em casa. São apenas 10 minutos por dia que fazem toda a diferença.",
  },
  {
    question: "Não vai ser só mais tempo de tela para meu filho?",
    answer:
      "Não! O método é para ser impresso e usado fisicamente. O toque, a escrita, a manipulação dos cartões são essenciais para o aprendizado. O formato digital é só para você ter acesso rápido e imprimir quando quiser. É exatamente o OPOSTO de mais tempo de tela - é atividade manual, lúdica e interativa entre você e seu filho.",
  },
];

export const FAQSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-soft-blue/10 border border-soft-blue rounded-2xl px-6 hover:bg-soft-blue/20 transition-colors"
              >
                <AccordionTrigger className="font-nunito text-lg font-semibold text-navy hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-base text-foreground/80 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button
              onClick={scrollToPricing}
              variant="hero"
              size="lg"
              className="font-nunito font-bold text-base md:text-lg px-8 md:px-12"
            >
              Estou pronto para começar!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
