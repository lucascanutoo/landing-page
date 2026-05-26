# Strata Advisory — Landing Page

[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)](https://html5.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Landing page production-ready para consultoria B2B especializada em transformação digital e analytics.

## 🎯 Destaques

- **Design System completo** — paleta de cores, tipografia e espaçamento padronizados via CSS variables
- **100% responsivo** — funciona em mobile (375px), tablet e desktop com media queries
- **Animações suaves** — IntersectionObserver com stagger delay ao scroll
- **Acessibilidade WCAG 2.1 AA** — contraste 4.5:1, focus states, semântica HTML
- **Zero dependências** — apenas HTML5, CSS3 e JavaScript vanilla
- **Arquitetura modular** — CSS separado por responsabilidade (base, layout, sections, responsive)

## 🛠 Tecnologias

| Tecnologia | Uso |
|-----------|-----|
| **HTML5** | Markup semântico |
| **CSS3** | Styles, variáveis CSS, media queries |
| **JavaScript ES6+** | IntersectionObserver, ES Modules |
| **Google Fonts (Inter)** | Tipografia |

**Sem bundler** — funciona nativamente no navegador com ES Modules.

## 📁 Estrutura

```
landingpage/
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css (entry point)
│   │   ├── base.css (reset, variáveis, tipografia)
│   │   ├── layout.css (nav, hero, logo-bar, footer)
│   │   ├── sections.css (serviços, métricas, processo, depoimentos, cta)
│   │   └── responsive.css (todos os @media queries)
│   └── js/
│       ├── main.js (inicialização)
│       └── animations.js (IntersectionObserver)
```

## 🚀 Como Rodar

### Opção 1: Abrir Direto (Mais Simples)
```bash
# Clique em index.html no explorador de arquivos
# Ou execute:
open index.html  # macOS
start index.html # Windows
```

### Opção 2: Servidor HTTP
```bash
cd /caminho/para/landingpage
python -m http.server 8000
# Acesse: http://localhost:8000
```

### Opção 3: Node.js
```bash
cd /caminho/para/landingpage
npx serve .
# Acesse: http://localhost:3000
```

## ✨ Recursos Implementados

- ✅ 9 seções completas (Nav, Hero, Logo Bar, Serviços, Métricas, Processo, Depoimentos, CTA, Footer)
- ✅ Nav sticky com glassmorphism blur
- ✅ Mockup de dashboard com chart interativo
- ✅ Grid responsivo (2 colunas → 1 em mobile)
- ✅ Fade-in animations ao scroll
- ✅ Smooth scroll para âncoras
- ✅ Modo dark (seção de métricas)
- ✅ Links funcionais (mailto, tel, âncoras)

## 📱 Responsividade

| Viewport | Status |
|----------|--------|
| 375px (mobile) | ✅ Otimizado |
| 768px (tablet) | ✅ Otimizado |
| 1440px+ (desktop) | ✅ Otimizado |