export const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="font-fredoka text-2xl font-bold">Kanji Kids™</h3>
            <p className="font-inter text-sm text-primary-foreground/80">
              Transformando a alfabetização infantil com a sabedoria japonesa
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-nunito font-bold text-lg">Links Rápidos</h4>
            <ul className="space-y-2 font-inter text-sm text-primary-foreground/80">
              <li>
                <a href="#como-funciona" className="hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#garantia" className="hover:text-primary transition-colors">
                  Garantia
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h4 className="font-nunito font-bold text-lg">Suporte</h4>
            <ul className="space-y-2 font-inter text-sm text-primary-foreground/80">
              <li>📧 suportekanjakids@gmail.com</li>
              <li>📱 WhatsApp: (47) 99768-2599</li>
              <li>🕒 Seg-Sex: 9h-18h</li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="space-y-4">
            <h4 className="font-nunito font-bold text-lg">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 pt-8 space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-primary-foreground/60">
            <span>🔒 SSL/HTTPS</span>
            <span>💳 Compra Segura</span>
            <span>✅ Garantia 7 dias</span>
          </div>
          <p className="text-center font-inter text-sm text-primary-foreground/70">
            © 2025 Kit Kanji Kids™ - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
