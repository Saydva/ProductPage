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
- **SASS/SCSS** – Modular stylesheets (`@use` syntax, no deprecated `@import`)
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
│   │   ├── layout/
│   │   ├── components/
│   │   ├── utils/
│   │   └── main.scss
│   └── js/
│       └── steps-animation.js
├── dist/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🎨 SCSS Architecture

- Only `@use` imports (no deprecated `@import`)
- Variables, mixins, functions modularized
- Mobile override: steps always visible (`opacity: 1 !important`)
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
