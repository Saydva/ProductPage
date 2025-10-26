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

- **HTML5** - Semantic markup with modern web standards
- **SASS/SCSS** - CSS preprocessor for maintainable stylesheets
- **JavaScript (ES6+)** - Modern JavaScript with modules and event handling
- **Vite** - Fast build tool and development server
- **CSS Grid & Flexbox** - Modern layout systems for responsive design
- **GitHub Actions** - Automated CI/CD pipeline for deployment
- **GitHub Pages** - Static site hosting

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
├── src/
│   ├── styles/             # SCSS stylesheets
│   │   ├── base/           # Foundation styles
│   │   │   ├── reset.scss
│   │   │   ├── typography.scss
│   │   │   └── variables.scss
│   │   ├── layout/         # Layout components
│   │   │   ├── grid.scss
│   │   │   ├── container.scss
│   │   │   └── sections.scss
│   │   ├── components/     # UI components
│   │   │   ├── buttons.scss
│   │   │   ├── cards.scss
│   │   │   ├── hero.scss
│   │   │   ├── main-menu.scss
│   │   │   ├── firms-table.scss
│   │   │   ├── contact.scss
│   │   │   └── steps.scss
│   │   ├── utils/          # Utility styles
│   │   │   ├── responsive.scss
│   │   │   └── extra-scroll-padding.scss
│   │   └── main.scss       # Main stylesheet entry point
│   └── js/                 # JavaScript modules
│       ├── javascriptUtils.js
│       ├── main-menu.js
│       ├── cards-highlight.js
│       ├── ribbon-logo-animate.js
│       ├── steps-animation.js
│       └── hero-animation.js
├── dist/                   # Build output (generated)
├── index.html              # Main HTML file
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## 🎨 SCSS Architecture

### Base Layer

- **`reset.scss`** - CSS reset and normalize styles
- **`typography.scss`** - Font definitions and text styling
- **`variables.scss`** - Color palette, spacing, breakpoints, and other design tokens

### Layout Layer

- **`grid.scss`** - CSS Grid system for complex layouts
- **`container.scss`** - Container and wrapper styles
- **`sections.scss`** - Section spacing and structure

### Components Layer

- **`buttons.scss`** - Button variants and states
- **`cards.scss`** - Card components with hover effects
- **`hero.scss`** - Hero section styling with animations
- **`main-menu.scss`** - Navigation and mobile menu
- **`firms-table.scss`** - Responsive table styles
- **`contact.scss`** - Contact section and forms
- **`steps.scss`** - Step-by-step process styling

### Utilities Layer

- **`responsive.scss`** - Responsive utility classes
- **`extra-scroll-padding.scss`** - Scroll behavior enhancements

### SCSS Features Used

- **Variables** - Consistent color scheme and spacing
- **Nesting** - Organized and readable selectors
- **Mixins** - Reusable style patterns
- **Functions** - Dynamic color calculations
- **Partials** - Modular stylesheet organization
- **Import/Use** - Modern SCSS module system

## 🚀 Features

### Design & UX

- **Responsive Design** - Mobile-first approach with fluid layouts
- **Modern UI/UX** - Clean, professional interface
- **Smooth Animations** - CSS transitions and JavaScript animations
- **Interactive Elements** - Hover effects and micro-interactions

### Technical Features

- **Component-Based Architecture** - Modular SCSS and JS structure
- **Mobile Navigation** - Hamburger menu for screens ≤ 900px
- **Animated Logo** - Dynamic Ribbon logo animation
- **Card Highlights** - Interactive card hover effects
- **Scroll Animations** - Elements animate on scroll
- **Cross-Browser Compatibility** - Tested across modern browsers

### Performance

- **Optimized Build** - Vite bundling with code splitting
- **Compressed Assets** - Minified CSS and JavaScript
- **Modern Web Standards** - ES6+ modules and semantic HTML
- **Fast Loading** - Optimized images and efficient code

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

- **Hero Section** - Main value proposition with call-to-action
- **Features** - Why choose Ribbon benefits
- **Use Cases** - Industry-specific examples
- **Payment Methods** - Supported payment options
- **Getting Started** - Step-by-step process
- **Contact** - Contact information and form

---

**This project showcases modern web development practices with a focus on maintainable code, responsive design, and optimal user experience.**
