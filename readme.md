# Ribbon – Simple Online Payments for Your Business

Ribbon is a modern payment platform for fast, secure, and simple online payments. Whether you're selling online, managing subscriptions, or running a marketplace, Ribbon provides everything you need for efficient transaction processing.

---

## 🌐 Live Demo

**Website:** [https://Saydva.github.io/ProductPage/](https://Saydva.github.io/ProductPage/)

### 📱 QR code for quick access

![QR Code](public/qr-code.png)

_Scan the QR code with your phone for instant access._

---

## 🛠️ Technologies Used

- **HTML5** – Semantic markup
- **SASS/SCSS** – Modular stylesheets (using `@import` for compatibility)
- **JavaScript (ES6+)** – Modern JS, one `DOMContentLoaded` event per file
- **Vite** – Fast build tool (`base` set to `/ProductPage/`)
- **CSS Grid & Flexbox** – Responsive layouts
- **GitHub Actions & Pages** – Automated deployment

---

## 📦 Installation

```bash
git clone https://github.com/Saydva/ProductPage.git
cd ProductPage
npm install
npm run dev      # Start development server
npm run build    # Build for production
npm run deploy   # Deploy to GitHub Pages
```

---

## 📁 Project Structure

```
ProductPage/
├── public/
│   └── qr-code.png
├── src/
│   ├── styles/
│   │   ├── base/
│   │   │   ├── variables.scss
│   │   │   ├── mixins.scss
│   │   │   ├── reset.scss
│   │   │   ├── typography.scss
│   │   │   └── opacity.scss
│   │   ├── layout/
│   │   │   ├── container.scss
│   │   │   ├── grid.scss
│   │   │   └── sections.scss
│   │   ├── components/
│   │   │   ├── hero.scss
│   │   │   ├── buttons.scss
│   │   │   ├── cards.scss
│   │   │   ├── steps.scss
│   │   │   ├── main-menu.scss
│   │   │   ├── firms-table.scss
│   │   │   └── contact.scss
│   │   ├── utils/
│   │   │   ├── responsive.scss
│   │   │   └── extra-scroll-padding.scss
│   │   └── main.scss
│   └── js/
│       ├── main-menu.js
│       ├── cards-highlight.js
│       ├── ribbon-logo-animate.js
│       ├── steps-animation.js
│       └── hero-animation.js
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── .gitignore
├── .todo
└── README.md
```

---

## 🎨 SCSS Architecture

- Only `@use` imports (no deprecated `@import`)
- Variables, mixins, functions modularized
- Mobile-friendly: steps always visible, no animation on mobile
- Animations only via parent class

---

## 🚀 Features

- Responsive design (mobile-first)
- Modern UI/UX
- Smooth CSS & JS animations
- Interactive elements
- Component-based architecture
- Animated logo
- Card highlights
- Scroll animations (desktop/tablet)
- Cross-browser compatibility

---

## 🚀 Deployment

Automatic deploy to GitHub Pages via GitHub Actions  
**Live URL:** [https://Saydva.github.io/ProductPage/](https://Saydva.github.io/ProductPage/)

---

## 📱 Mobile-friendly steps

On small screens, the "Getting Started" steps section is always visible and transforms into a swipeable slider for better usability.  
Animácie sa na mobile nevykonávajú, kroky sú vždy viditeľné.

---

**This project showcases modern web development practices with maintainable code, responsive design, and optimal user experience.**
