# Ribbon – Simple Online Payments for Your Business

Ribbon is a modern payment platform designed for businesses that want to accept payments quickly, securely, and without unnecessary complications. Whether you're selling online, managing subscriptions, or operating a marketplace – Ribbon provides everything you need for efficient transaction processing.

---

## 🌐 Live Demo

**Website is available at: https://Saydva.github.io/ProductPage/**

### 📱 QR code for quick access:

![QR Code](public/qr-code.png)

_Scan the QR code with your phone for instant access to the website_

---

## 🛠️ Technologies Used

- **HTML5** – Semantic markup with modern web standards
- **SASS/SCSS** – CSS preprocessor for maintainable stylesheets (`@use` syntax, no deprecated `@import`)
- **JavaScript (ES6+)** – Modern JavaScript with modules and event handling (jeden `DOMContentLoaded` event na súbor)
- **Vite** – Fast build tool and development server (`base` nastavený na `/ProductPage/`)
- **CSS Grid & Flexbox** – Modern layout systems for responsive design
- **GitHub Actions** – Automated CI/CD pipeline for deployment
- **GitHub Pages** – Static site hosting

## 📦 Installation and Setup

```bash
# Clone the repository
git clone https://github.com/Saydva/ProductPage.git

# Navigate to project directory
cd ProductPage

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
ProductPage/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── public/
│   ├── .nojekyll           # Disable Jekyll processing
│   └── assets/             # Static assets
│   └── qr-code.png         # QR code for quick access
├── src/
│   ├── styles/
│   │   ├── base/
│   │   │   ├── reset.scss
│   │   │   ├── typography.scss
│   │   │   └── variables.scss
│   │   ├── layout/
│   │   │   ├── grid.scss
│   │   │   ├── container.scss
│   │   │   └── sections.scss
│   │   ├── components/
│   │   │   ├── buttons.scss
│   │   │   ├── cards.scss
│   │   │   ├── hero.scss
│   │   │   ├── main-menu.scss
│   │   │   ├── firms-table.scss
│   │   │   ├── contact.scss
│   │   │   └── steps.scss
│   │   ├── utils/
│   │   │   ├── responsive.scss
│   │   │   └── extra-scroll-padding.scss
│   │   └── main.scss       # Main stylesheet entry point (používa len @use)
│   └── js/
│       ├── javascriptUtils.js
│       ├── main-menu.js
│       ├── cards-highlight.js
│       ├── ribbon-logo-animate.js
│       ├── steps-animation.js
│       └── hero-animation.js
├── dist/                   # Build output (generated)
├── index.html              # Main HTML file
├── vite.config.js          # Vite configuration (base nastavený na /ProductPage/)
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## 🎨 SCSS Architecture

- **Používaš len `@use` (žiadne deprecated `@import`)**
- **Premenné, mixiny, funkcie, partials** – všetko modularizované
- **Mobile override** – na malé zariadenia sú kroky v sekcii steps vždy viditeľné (`opacity: 1 !important`)
- **Animácie len cez triedu na rodičovi**

## 🚀 Features

- **Responsive Design** – Mobile-first approach
- **Modern UI/UX** – Clean, professional interface
- **Smooth Animations** – CSS transitions and JavaScript animations
- **Interactive Elements** – Hover effects and micro-interactions
- **Component-Based Architecture** – Modular SCSS and JS structure
- **Mobile Navigation** – Hamburger menu for screens ≤ 900px
- **Animated Logo** – Dynamic Ribbon logo animation
- **Card Highlights** – Interactive card hover effects
- **Scroll Animations** – Elements animate on scroll (desktop/tablet)
- **Cross-Browser Compatibility** – Tested across modern browsers

## 🚀 Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions:

1. **Trigger**: Push to `main` branch
2. **Build Process**:
   - Install dependencies
   - Run Vite build
   - Generate static files in `dist/`
3. **Deploy**: Upload to GitHub Pages
4. **Live URL**: https://Saydva.github.io/ProductPage/

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Responsive Breakpoints

```scss
$mobile: 480px;
$tablet: 768px;
$desktop: 1024px;
$large: 1200px;
```

## 🎯 Key Sections

- **Hero Section** – Main value proposition with call-to-action
- **Features** – Why choose Ribbon benefits
- **Use Cases** – Industry-specific examples
- **Payment Methods** – Supported payment options
- **Getting Started** – Step-by-step process (slider on mobile, animated on desktop)
- **Contact** – Contact information and form

---

**This project showcases modern web development practices with a focus on maintainable code, responsive design, and optimal user experience.**

### Mobile-friendly steps

On small screens, the "Getting Started" steps section is always visible and transforms into a swipeable slider for better usability. Animácie sa na mobile nevykonávajú, kroky sú vždy viditeľné.
