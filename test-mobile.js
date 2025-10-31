import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 }, // iPhone X size
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
  });

  const page = await context.newPage();

  console.log('📱 Navegando para a landing page em modo mobile...');
  await page.goto('http://localhost:8082');
  await page.waitForLoadState('networkidle');

  console.log('\n🔍 Analisando problemas de layout mobile:\n');

  // Verificar elementos que podem estar cortados ou com overflow
  const issues = await page.evaluate(() => {
    const problems = [];
    const viewportWidth = window.innerWidth;

    // Verificar elementos que excedem a largura da viewport
    document.querySelectorAll('*').forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.width > viewportWidth && window.getComputedStyle(el).overflow !== 'hidden') {
        const tag = el.tagName.toLowerCase();
        const classes = el.className;
        const id = el.id;
        const identifier = id ? `#${id}` : classes ? `.${classes.split(' ')[0]}` : tag;

        if (rect.width > viewportWidth + 10) { // 10px tolerance
          problems.push({
            type: 'Overflow horizontal',
            element: identifier,
            width: Math.round(rect.width),
            viewportWidth: viewportWidth,
            excess: Math.round(rect.width - viewportWidth)
          });
        }
      }
    });

    // Verificar textos muito pequenos
    document.querySelectorAll('p, span, a, button, div').forEach(el => {
      const style = window.getComputedStyle(el);
      const fontSize = parseFloat(style.fontSize);
      if (fontSize < 14 && el.textContent.trim().length > 5) {
        const text = el.textContent.trim().substring(0, 50);
        problems.push({
          type: 'Texto muito pequeno',
          fontSize: Math.round(fontSize),
          text: text,
          element: el.tagName.toLowerCase()
        });
      }
    });

    // Verificar botões muito pequenos para touch
    document.querySelectorAll('button, a[href]').forEach(el => {
      const rect = el.getBoundingClientRect();
      const minTouchSize = 44; // Apple HIG recommendation
      if ((rect.height < minTouchSize || rect.width < minTouchSize) && rect.height > 0) {
        const text = el.textContent.trim().substring(0, 30);
        problems.push({
          type: 'Botão/Link muito pequeno para touch',
          height: Math.round(rect.height),
          width: Math.round(rect.width),
          minRequired: minTouchSize,
          text: text
        });
      }
    });

    // Verificar espaçamento horizontal inadequado
    document.querySelectorAll('section').forEach(section => {
      const style = window.getComputedStyle(section);
      const paddingLeft = parseFloat(style.paddingLeft);
      const paddingRight = parseFloat(style.paddingRight);

      if (paddingLeft < 16 || paddingRight < 16) {
        problems.push({
          type: 'Padding horizontal insuficiente',
          element: section.className || section.tagName,
          paddingLeft: Math.round(paddingLeft),
          paddingRight: Math.round(paddingRight)
        });
      }
    });

    return problems;
  });

  // Agrupar e exibir problemas
  const grouped = {};
  issues.forEach(issue => {
    if (!grouped[issue.type]) grouped[issue.type] = [];
    grouped[issue.type].push(issue);
  });

  Object.keys(grouped).forEach(type => {
    console.log(`\n❌ ${type}: ${grouped[type].length} ocorrências`);
    grouped[type].slice(0, 5).forEach(issue => { // Mostrar apenas 5 primeiros de cada tipo
      console.log('   ', JSON.stringify(issue, null, 2).replace(/\n/g, '\n    '));
    });
    if (grouped[type].length > 5) {
      console.log(`    ... e mais ${grouped[type].length - 5} problemas similares`);
    }
  });

  // Capturar screenshots das seções principais
  console.log('\n📸 Capturando screenshots das seções principais...\n');

  const sections = [
    { name: 'hero', selector: 'section:first-of-type' },
    { name: 'pricing', selector: 'section:has(h2:text("Quanto vale"))' },
    { name: 'testimonials', selector: 'section:has(h2:text("Veja o que"))' },
    { name: 'bonus', selector: 'section:has(h2:text("6 SUPER BÔNUS"))' }
  ];

  for (const section of sections) {
    try {
      const element = await page.locator(section.selector).first();
      await element.screenshot({ path: `mobile-${section.name}.png` });
      console.log(`✅ Screenshot salvo: mobile-${section.name}.png`);
    } catch (e) {
      console.log(`⚠️  Não foi possível capturar: ${section.name}`);
    }
  }

  // Screenshot da página completa
  await page.screenshot({ path: 'mobile-full-page.png', fullPage: true });
  console.log('✅ Screenshot completo salvo: mobile-full-page.png');

  await browser.close();
  console.log('\n✨ Análise concluída!\n');
})();
