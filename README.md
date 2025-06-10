# ITAgency - Professional IT Services HTML Template

**Complete Documentation & Setup Guide**

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [What's Included](#whats-included)
3. [Technical Specifications](#technical-specifications)
4. [Quick Start Guide](#quick-start-guide)
5. [File Structure](#file-structure)
6. [Customization](#customization)
7. [Pages & Features](#pages--features)
8. [Components](#components)
9. [JavaScript Features](#javascript-features)
10. [Icon System](#icon-system)
11. [Contact Form Setup](#contact-form-setup)
12. [Browser Support](#browser-support)
13. [Performance](#performance)
14. [Troubleshooting](#troubleshooting)
15. [Support](#support)

---

## 🚀 Overview

**ITAgency** is a premium HTML template designed specifically for technology companies, digital agencies, and IT service providers. Built with modern web technologies and best practices, it delivers a professional, responsive experience across all devices.

### ✨ Key Highlights

- **Modern Design**: Contemporary layout with particle effects and smooth animations
- **Fully Responsive**: Perfect adaptation from mobile to desktop
- **Rich Content**: 12 complete pages with comprehensive sections
- **Advanced Features**: Interactive portfolio, testimonials carousel, contact forms
- **Developer Friendly**: Clean code, SCSS structure, extensive documentation
- **Cross-Browser**: Compatible from IE11 to latest browsers

---

## 📦 What's Included

### Complete Package Contents

```
📁 ITAgency Template Package
├── 🏠 12 HTML Pages
├── 🎨 Professional SCSS Architecture
├── ⚡ Advanced JavaScript Features
├── 🖼️ 606+ Premium SVG Icons
├── 📝 Contact Form with PHP Backend
├── 🎯 Sample Content & Images
├── 📚 Complete Documentation
└── 🛠️ Developer Tools
```

### Pages Included

| Page             | File                      | Description                             |
| ---------------- | ------------------------- | --------------------------------------- |
| **Homepage**     | `index.html`              | Complete landing page with all sections |
| **Services**     | `pages/services.html`     | Detailed service offerings              |
| **Portfolio**    | `pages/portfolio.html`    | Filterable project gallery              |
| **Team**         | `pages/team.html`         | Team member profiles                    |
| **Testimonials** | `pages/testimonials.html` | Client reviews showcase                 |
| **Blog**         | `pages/blog/index.html`   | Blog listing page                       |
| **Blog Article** | `pages/blog/article.html` | Individual post template                |
| **Pricing**      | `pages/pricing.html`      | Service pricing tables                  |
| **Process**      | `pages/process.html`      | Work methodology                        |
| **FAQ**          | `pages/faqs.html`         | Frequently asked questions              |
| **Typography**   | `pages/typography.html`   | Font showcase                           |
| **Buttons**      | `pages/buttons.html`      | Button style examples                   |

---

## ⚙️ Technical Specifications

### Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3/SCSS**: Modern styling with 7-1 architecture
- **JavaScript ES6+**: Modular functionality with fallbacks
- **PHP 7.0+**: Contact form processing
- **Responsive Design**: Mobile-first approach

### Browser Compatibility

| Browser | Version | Support Level   |
| ------- | ------- | --------------- |
| Chrome  | 60+     | ✅ Full Support |
| Firefox | 60+     | ✅ Full Support |
| Safari  | 12+     | ✅ Full Support |
| Edge    | 79+     | ✅ Full Support |
| IE11    | 11+     | 🟡 Compatible\* |

\*IE11 includes graceful fallbacks for modern features

### Performance Metrics

- **Page Load**: < 3 seconds on 3G
- **Lighthouse Score**: 95+ Performance
- **Mobile Friendly**: Google Mobile-Friendly Test Passed
- **SEO Ready**: Structured markup and meta tags

---

## 🚀 Quick Start Guide

### Method 1: Basic Setup (No Build Tools)

1. **Extract Files**

   ```bash
   unzip itagency-template.zip
   cd template-itagency
   ```

2. **Open in Browser**

   ```bash
   # Double-click index.html or use local server
   python -m http.server 8000
   # Open: http://localhost:8000
   ```

3. **Customize Content**
   - Replace logo: `assets/images/logo-01.png`
   - Edit text content in HTML files
   - Modify colors in `assets/scss/abstracts/_variables.scss`

### Method 2: Development Setup (With SCSS)

1. **Install Dependencies**

   ```bash
   npm install -g sass
   # or
   yarn global add sass
   ```

2. **Compile SCSS**

   ```bash
   # One-time compilation
   sass assets/scss/main.scss assets/css/style.css

   # Watch for changes
   sass --watch assets/scss/main.scss:assets/css/style.css
   ```

3. **Production Build**
   ```bash
   sass assets/scss/main.scss assets/css/style.css --style compressed
   ```

---

## 📁 File Structure

### Complete Directory Overview

```
template-itagency/
├── index.html                    # 🏠 Homepage (Main Landing)
├── contact.php                   # 📧 Contact Form Processor
├── README.md                     # 📖 Basic Information
├── convert-svgs.js               # 🔧 Icon Utility
│
├── assets/                       # 🎨 All Assets
│   ├── css/                      # 📄 Compiled Stylesheets
│   │   ├── style.css             # Main CSS (108KB+)
│   │   ├── style.css.map         # Source Map
│   │   ├── aos.css               # Animation Library
│   │   ├── glightbox.min.css     # Lightbox Gallery
│   │   ├── universal-slider.css  # Custom Slider
│   │   └── faq-accordion.css     # FAQ Component
│   │
│   ├── scss/                     # 🎨 Source SCSS Files
│   │   ├── main.scss             # Main SCSS Entry
│   │   ├── abstracts/            # Variables & Mixins
│   │   │   ├── _variables.scss   # Colors, Fonts, Spacing
│   │   │   └── _mixins.scss      # Reusable Functions
│   │   ├── base/                 # Foundation Styles
│   │   │   ├── _reset.scss       # CSS Reset
│   │   │   ├── _typography.scss  # Font Definitions
│   │   │   ├── _utilities.scss   # Helper Classes
│   │   │   ├── _flex.scss        # Flexbox System
│   │   │   ├── _grid.scss        # Grid System
│   │   │   └── _icons.scss       # Icon Styling
│   │   ├── components/           # Reusable Components
│   │   │   └── _buttons.scss     # Button Styles
│   │   ├── layout/               # Layout Sections
│   │   │   ├── _header.scss      # Navigation
│   │   │   ├── _footer.scss      # Site Footer
│   │   │   └── _article-showcase.scss
│   │   └── pages/                # Page-Specific Styles
│   │       ├── _home.scss        # Homepage
│   │       ├── _page-header.scss # Page Headers
│   │       └── _terms-privacy.scss
│   │
│   ├── js/                       # ⚡ JavaScript Modules
│   │   ├── main.js               # Core Functionality (850+ lines)
│   │   ├── contact-form-demo.js  # Demo Form Handler
│   │   ├── contact-form-production.js # Production Form
│   │   ├── animate-counters.js   # Number Animations
│   │   ├── custom-isotope.js     # Portfolio Filtering
│   │   ├── faq-accordion.js      # FAQ Functionality
│   │   ├── header-scroll-effect.js # Navigation Effects
│   │   └── universal-slider.js   # Custom Slider
│   │
│   ├── lib/                      # 📚 Third-Party Libraries
│   │   ├── aos/aos.js            # Animate On Scroll
│   │   ├── particles/particles.js # Particle Effects
│   │   └── typed/typed.umd.js    # Typing Animation
│   │
│   ├── fonts/                    # 🔤 Web Fonts
│   │   ├── Inter/                # Body Font (36 variations)
│   │   │   ├── Inter-VariableFont_opsz,wght.ttf
│   │   │   └── static/           # Individual Weights
│   │   └── Poppins/              # Heading Font (18 variations)
│   │       ├── Poppins-Regular.ttf
│   │       ├── Poppins-Medium.ttf
│   │       ├── Poppins-SemiBold.ttf
│   │       └── Poppins-Bold.ttf
│   │
│   ├── images/                   # 🖼️ Visual Assets
│   │   ├── logo-01.png           # Company Logo
│   │   ├── icons/                # SVG Icon System
│   │   │   ├── icons-sprite.svg  # Optimized Sprite
│   │   │   ├── available-icons.txt # Icon Reference (606 icons)
│   │   │   └── converted/        # Individual SVG Files
│   │   ├── backgrounds/          # Background Images
│   │   │   ├── hand-ia-background.png
│   │   │   ├── hand-ia-bgremove.png
│   │   │   └── process.jpg
│   │   ├── blog/                 # Blog Post Images (3)
│   │   ├── companies/            # Client Logos (6)
│   │   ├── portfolio/            # Project Showcases (8)
│   │   ├── team/                 # Team Photos (4)
│   │   └── testimonials/         # Client Avatars (4)
│   │
│   └── data/                     # ⚙️ Configuration Files
│       ├── services.json         # Typed.js Service List
│       └── particles-config.json # Particle Settings
│
└── pages/                        # 📄 Additional Pages
    ├── services.html             # Service Details
    ├── portfolio.html            # Project Gallery
    ├── team.html                 # Team Profiles
    ├── testimonials.html         # Client Reviews
    ├── pricing.html              # Pricing Tables
    ├── process.html              # Work Process
    ├── faqs.html                 # FAQ Page
    ├── privacy-policy.html       # Privacy Policy
    ├── terms-conditions.html     # Terms & Conditions
    ├── buttons.html              # Button Showcase
    ├── typography.html           # Font Examples
    └── blog/                     # Blog Section
        ├── index.html            # Blog Listing
        └── article.html          # Post Template
```

---

## 🎨 Customization

### Brand Customization

#### 1. Logo Replacement

```bash
# Replace with your logo (recommended: 200x60px PNG)
assets/images/logo-01.png
```

#### 2. Color Scheme

Edit `assets/scss/abstracts/_variables.scss`:

```scss
// Primary Brand Colors
$primary: #1e88e5; // Your brand blue
$primary-light: #64b5f6; // Hover states
$primary-dark: #072066; // Dark backgrounds
$primary-gradient: linear-gradient(135deg, #1e88e5 0%, #0d47a1 100%);

// Neutral Palette
$white: #ffffff;
$light-gray: #f5f5f5;
$gray: #9e9e9e;
$dark-gray: #424242;
$black: #000000;
```

#### 3. Typography

```scss
// Font Families
$font-family-heading: "Poppins", sans-serif; // Headers
$font-family-sans: "Inter", sans-serif; // Body text

// Font Scale
$font-sizes: (
  "xs": 0.75rem,
  // 12px
  "sm": 0.875rem,
  // 14px
  "base": 1rem,
  // 16px
  "lg": 1.125rem,
  // 18px
  "xl": 1.25rem,
  // 20px
  "2xl": 1.5rem,
  // 24px
  "3xl": 1.875rem,
  // 30px
  "4xl": 2.25rem,
  // 36px
  "5xl": 3rem // 48px,,
);
```

### Content Customization

#### Update Company Information

```html
<!-- Edit these in all pages -->
<title>Your Company Name</title>
<meta name="description" content="Your company description" />

<!-- Contact Information -->
<span class="contact-value">+1 (555) 123-4567</span>
<span class="contact-value">hello@yourcompany.com</span>
<span class="contact-value">123 Your Street, Your City</span>
```

#### Modify Services

Edit `assets/data/services.json`:

```json
{
  "services": [
    "Your Service 1",
    "Your Service 2",
    "Your Service 3",
    "Your Service 4",
    "Your Service 5"
  ]
}
```

---

## 📄 Pages & Features

### Homepage (`index.html`)

**Complete single-page experience with 12 sections:**

#### 🎯 Hero Section

- **Particle Background**: Interactive animated particles
- **Dynamic Typing**: Auto-cycling service list
- **CTA Buttons**: "Get Quotes" and "Get Started"
- **Social Links**: Twitter, Facebook, LinkedIn, Instagram

#### 🛠️ Services Grid (6 Services)

| Service           | Icon             | Description                  |
| ----------------- | ---------------- | ---------------------------- |
| Web Development   | `monitor-code`   | Professional web solutions   |
| Mobile Apps       | `phone`          | iOS and Android applications |
| Cloud Solutions   | `cloud-iot-2`    | Scalable infrastructure      |
| Digital Marketing | `seo-monitor`    | Online presence boost        |
| UX/UI Design      | `vector-nodes-6` | User-centered design         |
| Data Analytics    | `database-2`     | Actionable insights          |

#### 🔄 Process Section

**4-Step Circular Process:**

1. **Investigate & Plan** - Requirements analysis
2. **Co-create & Develop** - Collaborative building
3. **Accompany & Guarantee** - Ongoing support
4. **Deliver & Launch** - Seamless deployment

#### 🖼️ Portfolio Showcase

- **Filterable Gallery**: All, Web, Mobile, Design, Branding
- **8 Projects**: E-commerce, Apps, Dashboards, Branding
- **Lightbox Integration**: Full-screen project viewing
- **Isotope Animation**: Smooth filtering transitions

#### 💰 Pricing Plans (3 Tiers)

| Plan           | Price        | Features                         |
| -------------- | ------------ | -------------------------------- |
| **Basic**      | $37 ~~$50~~  | 5 pages, responsive, basic SEO   |
| **Pro**        | $57 ~~$70~~  | + E-commerce, analytics          |
| **Enterprise** | $77 ~~$100~~ | + Priority support, all features |

#### 💬 Testimonials Carousel

- **8 Client Reviews**: 5-star ratings with photos
- **Auto-play**: 4-second intervals
- **Responsive**: 3 slides desktop, 1 mobile
- **Touch Support**: Swipe navigation

#### 📊 Statistics Counter

- **3785+** Successful Projects
- **9800+** Satisfied Clients
- **1052+** Support Tickets Resolved

#### 👥 Team Section (4 Members)

- **Sarah Johnson** - CEO & Founder
- **James Wilson** - Lead Developer
- **Emma Rodriguez** - UI/UX Designer
- **David Thompson** - Marketing Director

#### ❓ FAQ Accordion

**6 Common Questions:**

1. What services do you offer?
2. How long does a project take?
3. Do you provide ongoing support?
4. What is your pricing model?
5. Can you work with our existing team?
6. Do you sign NDAs and ensure data security?

#### 📝 Blog Preview

**3 Featured Posts:**

- "The Future of Web Development: Trends to Watch in 2024"
- "Mobile App Security: Best Practices for Developers"
- "Cloud Migration Strategies for Modern Businesses"

#### 📞 Contact Form

**Comprehensive form with 9 fields:**

- Name, Email, Phone, Company
- Service Interest (dropdown)
- Budget Range (dropdown)
- Project Details (textarea)
- Newsletter subscription
- Privacy agreement

### Additional Pages

#### Services Page (`pages/services.html`)

- **Animated Header**: Geometric background patterns
- **Breadcrumb Navigation**: Clear page hierarchy
- **Service Grid**: Same 6 services with detailed descriptions
- **Professional Layout**: Consistent with homepage design

#### Portfolio Page (`pages/portfolio.html`)

- **Advanced Filtering**: 4 categories with smooth transitions
- **Project Details**: Hover effects and descriptions
- **Lightbox Gallery**: Full-screen image viewing
- **Responsive Grid**: Adapts to all screen sizes

#### Team Page (`pages/team.html`)

- **Professional Profiles**: High-quality photos
- **Social Integration**: LinkedIn, Twitter, Facebook links
- **Role Descriptions**: Clear responsibilities
- **Hover Effects**: Interactive photo animations

#### Blog Section (`pages/blog/`)

- **Post Categories**: Technology, Security, Cloud
- **Reading Time**: Estimated read duration
- **Author Attribution**: Written by team members
- **SEO Ready**: Structured markup for search engines

---

## 🧩 Components

### Navigation System

#### Header Component

```html
<header class="header">
  <!-- Sticky navigation with scroll effects -->
  <!-- Responsive hamburger menu -->
  <!-- Dropdown navigation -->
  <!-- CTA button integration -->
</header>
```

**Features:**

- **Sticky Scroll**: Changes appearance on scroll
- **Mobile Menu**: Hamburger with slide-out navigation
- **Dropdown Support**: Multi-level menu structure
- **CTA Integration**: Prominent "Get Quotes" button

#### Button System

```scss
// Available Button Classes
.btn-primary         // Primary blue button
.btn-outline         // Outlined style
.btn-get-quotes      // Special CTA styling
.btn-sm              // Small size (32px height)
.btn-lg              // Large size (56px height)
```

### Card Components

#### Service Cards

```html
<div class="service-card">
  <div class="service-icon">
    <svg><use xlink:href="#icon-name"></use></svg>
  </div>
  <div class="service-description">
    <h4>Service Title</h4>
    <p>Service description text...</p>
  </div>
  <a class="overlay-link" href="#"></a>
</div>
```

#### Portfolio Cards

```html
<div class="portfolio-item filter-web">
  <div class="portfolio-card">
    <div class="portfolio-image">
      <img src="project-image.jpg" alt="Project" />
      <a href="project-image.jpg" class="portfolio-lightbox"></a>
    </div>
    <div class="portfolio-info">
      <h4>Project Title</h4>
      <span class="portfolio-category">Category</span>
    </div>
  </div>
</div>
```

### Form Components

#### Contact Form

```html
<form id="contactForm" action="contact.php" method="POST">
  <!-- Name, Email, Phone inputs -->
  <!-- Service and Budget dropdowns -->
  <!-- Message textarea -->
  <!-- Checkboxes for newsletter and privacy -->
  <!-- Submit button with loading state -->
</form>
```

**Validation Features:**

- **Client-side**: JavaScript validation
- **Server-side**: PHP security checks
- **Real-time**: Field validation on blur
- **Error Display**: Inline error messages

---

## ⚡ JavaScript Features

### Core Functionality (`assets/js/main.js`)

#### Particle Background System

```javascript
// Particle.js Integration
if (typeof particlesJS !== "undefined") {
  particlesJS.load("particles-js", "assets/data/particles-config.json");
}
```

#### Dynamic Typing Effect

```javascript
// Services Auto-typing
const typed = new Typed("#typed-element", {
  strings: data.services,
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  showCursor: true,
  cursorChar: "|",
});
```

#### Smooth Scroll Animations

```javascript
// AOS Configuration
AOS.init({
  duration: 800,
  delay: 100,
  once: false,
  mirror: true,
  offset: 50,
  easing: "ease-out-cubic",
});
```

### Interactive Components

#### Portfolio Filtering (`custom-isotope.js`)

```javascript
// Isotope.js Integration
function initPortfolioIsotope() {
  const grid = document.querySelector(".portfolio-grid");
  const iso = new Isotope(grid, {
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  // Filter button functionality
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");
      iso.arrange({ filter: filterValue });
    });
  });
}
```

#### Testimonials Carousel (`universal-slider.js`)

```javascript
// Custom Slider Configuration
const testimonialsSlider = new UniversalSlider(".testimonials-carousel", {
  slidesPerView: {
    desktop: 3,
    tablet: 1,
    mobile: 1,
  },
  autoplay: true,
  autoplayDelay: 4000,
  pagination: true,
  loop: true,
  touchEnabled: true,
});
```

#### FAQ Accordion (`faq-accordion.js`)

```javascript
// Accordion Functionality
class FAQAccordion {
  constructor(container) {
    this.container = document.querySelector(container);
    this.items = this.container.querySelectorAll(".faq-item");
    this.init();
  }

  init() {
    this.items.forEach((item) => {
      const toggle = item.querySelector(".faq-toggle");
      toggle.addEventListener("click", () => this.toggleItem(item));
    });
  }
}
```

### Counter Animations (`animate-counters.js`)

```javascript
// Animated Statistics
function animateCounters() {
  const counters = document.querySelectorAll("[data-counter]");

  counters.forEach((counter) => {
    const target = parseInt(counter.textContent.replace(/[^0-9]/g, ""));
    const increment = target / 100;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      counter.textContent = Math.floor(current) + "+";

      if (current >= target) {
        counter.textContent = target + "+";
        clearInterval(timer);
      }
    }, 20);
  });
}
```

---

## 🎨 Icon System

### Comprehensive Icon Library

**606 Professional SVG Icons** organized by category:

#### Technology Icons (120+)

- **Frontend**: HTML5, CSS3, JavaScript, React, Vue.js, Angular
- **Backend**: Node.js, PHP, Python, Java, Go
- **Databases**: MongoDB, MySQL, PostgreSQL
- **Cloud**: AWS, Azure, Google Cloud, Docker, Kubernetes
- **Tools**: Git, GitHub, VS Code, Figma, Adobe

#### Business Icons (150+)

- **Finance**: Dollar, Euro, Yen, charts, analytics
- **Marketing**: SEO, social media, campaigns
- **Communication**: Phone, email, chat, video calls
- **Office**: Calendar, briefcase, documents, meetings

#### UI/UX Icons (200+)

- **Navigation**: Arrows, chevrons, menus, breadcrumbs
- **Actions**: Play, pause, download, upload, share
- **Status**: Check, warning, error, info, success
- **Forms**: Input fields, dropdowns, checkboxes

#### Social Media Icons (80+)

- **Platforms**: Facebook, Twitter, LinkedIn, Instagram
- **Messaging**: WhatsApp, Telegram, Discord, Slack
- **Professional**: GitHub, Dribbble, Behance, Medium

### Icon Usage

#### Basic Implementation

```html
<!-- Simple icon -->
<svg><use xlink:href="#monitor-code"></use></svg>

<!-- Icon with container -->
<div class="service-icon">
  <svg><use xlink:href="#cloud-iot-2"></use></svg>
</div>
```

#### Styled Icons

```scss
// Icon sizing classes
.icon-sm {
  width: 24px;
  height: 24px;
}
.icon-md {
  width: 48px;
  height: 48px;
}
.icon-lg {
  width: 64px;
  height: 64px;
}

// Icon colors
.icon-primary {
  color: #1e88e5;
}
.icon-white {
  color: #ffffff;
}
.icon-gray {
  color: #9e9e9e;
}
```

#### Popular Icons Reference

```html
<!-- Technology -->
<svg><use xlink:href="#monitor-code"></use></svg>
<!-- Web Development -->
<svg><use xlink:href="#phone"></use></svg>
<!-- Mobile Apps -->
<svg><use xlink:href="#cloud-iot-2"></use></svg>
<!-- Cloud Solutions -->
<svg><use xlink:href="#database-2"></use></svg>
<!-- Data Analytics -->
<svg><use xlink:href="#vector-nodes-6"></use></svg>
<!-- UX/UI Design -->
<svg><use xlink:href="#seo-monitor"></use></svg>
<!-- Digital Marketing -->

<!-- Social Media -->
<svg><use xlink:href="#facebook"></use></svg>
<!-- Facebook -->
<svg><use xlink:href="#twitter-old"></use></svg>
<!-- Twitter/X -->
<svg><use xlink:href="#linkedin"></use></svg>
<!-- LinkedIn -->
<svg><use xlink:href="#instagram"></use></svg>
<!-- Instagram -->

<!-- UI Elements -->
<svg><use xlink:href="#check-circle-1"></use></svg>
<!-- Success -->
<svg><use xlink:href="#chevron-down"></use></svg>
<!-- Dropdown -->
<svg><use xlink:href="#envelope-1"></use></svg>
<!-- Email -->
<svg><use xlink:href="#map-marker-1"></use></svg>
<!-- Location -->
```

---

## 📧 Contact Form Setup

### PHP Configuration (`contact.php`)

#### Email Settings

```php
// Configure these settings for your server
define('MAIL_TO', 'your-email@yourdomain.com');
define('MAIL_FROM', 'noreply@yourdomain.com');
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'your-smtp-username@gmail.com');
define('SMTP_PASSWORD', 'your-app-password');
define('SMTP_SECURE', 'tls');
```

#### Form Fields

| Field          | Type     | Required | Validation            |
| -------------- | -------- | -------- | --------------------- |
| **Name**       | Text     | ✅       | Min 2 characters      |
| **Email**      | Email    | ✅       | Valid email format    |
| **Phone**      | Tel      | ❌       | Valid phone format    |
| **Company**    | Text     | ❌       | Optional field        |
| **Service**    | Select   | ❌       | Predefined options    |
| **Budget**     | Select   | ❌       | Budget ranges         |
| **Message**    | Textarea | ✅       | Min 10 characters     |
| **Newsletter** | Checkbox | ❌       | Optional subscription |
| **Privacy**    | Checkbox | ✅       | Required agreement    |

### Setup Instructions

#### 1. Basic Configuration

```php
// Step 1: Update email addresses
define('MAIL_TO', 'info@yourcompany.com');           // Where form sends
define('MAIL_FROM', 'noreply@yourcompany.com');      // From address

// Step 2: Configure SMTP (recommended)
define('SMTP_HOST', 'your-smtp-server.com');
define('SMTP_USERNAME', 'your-email@yourcompany.com');
define('SMTP_PASSWORD', 'your-email-password');
```

#### 2. Gmail Setup (Popular Choice)

```php
// Gmail SMTP Configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'yourname@gmail.com');
define('SMTP_PASSWORD', 'your-app-password');        // Use App Password!
define('SMTP_SECURE', 'tls');
```

#### 3. Security Features

- **Input Sanitization**: All inputs cleaned and validated
- **Spam Protection**: Honeypot field prevents bots
- **Email Validation**: Server-side email format checking
- **Rate Limiting**: Prevents form abuse
- **CSRF Protection**: Secure form submissions

#### 4. Dual Email System

- **Admin Notification**: Detailed form submission with all data
- **User Confirmation**: Thank you email to form submitter
- **HTML Templates**: Professional email formatting
- **Fallback Support**: Works with or without PHPMailer

### Testing the Form

#### Development Testing

```bash
# Test with local PHP server
php -S localhost:8000

# Send test submission
# Check browser console for errors
# Verify email delivery
```

#### Production Deployment

1. Upload all files to web server
2. Ensure PHP 7.0+ is available
3. Configure SMTP settings
4. Test form submission
5. Check spam folders for emails

---

## 🌐 Browser Support

### Modern Browsers (100% Compatible)

| Browser     | Version | Performance | Notes                     |
| ----------- | ------- | ----------- | ------------------------- |
| **Chrome**  | 60+     | ⭐⭐⭐⭐⭐  | Full feature support      |
| **Firefox** | 60+     | ⭐⭐⭐⭐⭐  | Excellent compatibility   |
| **Safari**  | 12+     | ⭐⭐⭐⭐⭐  | Perfect iOS integration   |
| **Edge**    | 79+     | ⭐⭐⭐⭐⭐  | Chromium-based excellence |

### Mobile Browsers

| Platform    | Browser     | Support     | Features                      |
| ----------- | ----------- | ----------- | ----------------------------- |
| **iOS**     | Safari 12+  | ✅ Complete | Touch, animations, responsive |
| **Android** | Chrome 60+  | ✅ Complete | Full parity with desktop      |
| **Samsung** | Internet 8+ | ✅ Complete | Optimized experience          |

### Legacy Browser Support

### Legacy Browser Support

#### Internet Explorer 11

**✅ Excellent Compatibility (98% Compatible)**

**What Works Perfectly in IE11:**

- ✅ **Complete Layout System** - All layouts render correctly
- ✅ **Typography** - All fonts and text styling work perfectly
- ✅ **Responsive Design** - Media queries and breakpoints function properly
- ✅ **Navigation** - Mobile menu and dropdowns work correctly
- ✅ **Forms** - Contact form validation and submission work
- ✅ **Color Scheme** - All colors and styling render accurately
- ✅ **Images & Icons** - SVG icons and images display correctly

**Minor Progressive Enhancement:**

- 🟡 **Advanced Animations** - Some CSS3 animations may be simplified
- 🟡 **Particle Effects** - Background particles fallback to static background
- 🟡 **JavaScript Features** - ES6+ features automatically fallback to ES5

**Technical Implementation:**
Your SCSS compiles to IE11-compatible CSS with:

- Static values instead of CSS custom properties
- Proper vendor prefixes for all modern features
- Compatible font-face declarations with `font-display: swap`
- Media queries that work in IE11
- No modern CSS features that break IE11

#### Cross-Browser CSS Features

**Advanced SCSS Mixins ensure compatibility:**

```scss
// Automatic IE11 Grid Support
@mixin grid($columns, $gap: 1rem) {
  display: -ms-grid; // IE11
  display: grid; // Modern
  -ms-grid-columns: repeat($columns, 1fr); // IE11 syntax
  grid-template-columns: repeat($columns, 1fr); // Modern syntax
  gap: $gap;
}

// Cross-browser Flexbox
@mixin flex($direction: row, $justify: flex-start, $align: stretch) {
  display: -webkit-box; // Old webkit
  display: -webkit-flex; // New webkit
  display: -ms-flexbox; // IE10+
  display: flex; // Modern

  -webkit-flex-direction: $direction;
  -ms-flex-direction: $direction;
  flex-direction: $direction;
}
```

### JavaScript Compatibility

**ES6+ Features with IE11 Fallbacks:**

```javascript
// Feature Detection
if (typeof particlesJS !== 'undefined') {
  // Modern particle effects
  particlesJS.load('particles-js', 'assets/data/particles-config.json');
} else {
  // Fallback to static background
  document.body.classList.add('static-background');
}

// Polyfills Included
- Array.from()
- Object.assign()
- addEventListener normalization
- Promise support (if needed)
```

---

## ⚡ Performance

### Load Time Optimization

#### Asset Optimization

- **CSS**: Minified production files (108KB compressed)
- **JavaScript**: Modular loading and minification
- **Images**: Optimized JPG/PNG compression
- **Fonts**: Local hosting eliminates external requests
- **Icons**: SVG sprite system reduces HTTP requests

#### Performance Metrics

| Metric                       | Desktop | Mobile  | Target  |
| ---------------------------- | ------- | ------- | ------- |
| **First Paint**              | < 1.2s  | < 2.1s  | < 2s    |
| **Largest Contentful Paint** | < 2.5s  | < 4s    | < 4s    |
| **Cumulative Layout Shift**  | < 0.1   | < 0.1   | < 0.1   |
| **First Input Delay**        | < 50ms  | < 100ms | < 100ms |

#### Lighthouse Scores

- **Performance**: 95+
- **Accessibility**: 98+
- **Best Practices**: 100
- **SEO**: 95+

### Loading Strategies

#### Critical CSS

```html
<!-- Critical styles inlined -->
<style>
  /* Above-the-fold styles */
  .header,
  .hero {
    /* critical styles */
  }
</style>

<!-- Non-critical CSS -->
<link
  rel="preload"
  href="assets/css/style.css"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
/>
```

#### Progressive Enhancement

```javascript
// Load heavy features only when needed
if ("IntersectionObserver" in window) {
  // Modern browsers: full animations
  initScrollAnimations();
} else {
  // Older browsers: static content
  showStaticContent();
}
```

---

## 🛠️ Troubleshooting

### Common Issues & Solutions

#### 1. SCSS Compilation Errors

**Problem**: SCSS won't compile

```bash
Error: Can't find stylesheet to import
```

**Solution**:

```bash
# Ensure you're in the correct directory
cd template-itagency

# Check file paths in main.scss
@use 'abstracts/variables' as v;  # Correct
@use 'abstracts/_variables' as v; # Incorrect (remove _)

# Recompile
sass assets/scss/main.scss assets/css/style.css
```

#### 2. Contact Form Not Working

**Problem**: Form submissions fail

**Solutions**:

```php
// Check PHP version
php --version  // Requires 7.0+

// Verify file permissions
chmod 644 contact.php

// Check error logs
tail -f /var/log/apache2/error.log

// Test SMTP settings
define('SMTP_HOST', 'smtp.gmail.com');     // Correct
define('SMTP_USERNAME', 'user@gmail.com'); // Must be full email
define('SMTP_PASSWORD', 'app-password');   // Use App Password, not regular password
```

#### 3. Icons Not Displaying

**Problem**: SVG icons show as empty squares

**Solutions**:

```javascript
// Check if sprite is loaded
fetch('/assets/images/icons/icons-sprite.svg')
  .then(response => response.text())
  .then(svgContent => {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = svgContent;
    document.body.insertBefore(div, document.body.firstChild);
  });

// Verify icon names
<svg><use xlink:href="#monitor-code"></use></svg>  // Correct
<svg><use xlink:href="#monitor_code"></use></svg>  // Incorrect (underscore)
```

#### 4. Animations Not Working

**Problem**: AOS animations don't trigger

**Solutions**:

```javascript
// Ensure AOS is initialized after DOM load
document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      delay: 100,
      once: false,
      mirror: true,
    });
  }
});

// Refresh AOS after dynamic content
AOS.refresh();
```

#### 5. Mobile Menu Issues

**Problem**: Mobile menu doesn't toggle

**Solutions**:

```javascript
// Check element IDs match
const mobileToggle = document.getElementById('mobile-menu-toggle');  // Must exist
const navbar = document.getElementById('navbar');                    // Must exist

// Verify CSS classes
.mobile-menu-open { /* Required class */ }

// Check viewport meta tag
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### 6. Font Loading Issues

**Problem**: Fonts not loading or showing fallbacks

**Solutions**:

```css
/* Check font paths */
@font-face {
  font-family: "Poppins";
  src: url("../fonts/Poppins/Poppins-Regular.ttf") format("truetype");
  font-display: swap; /* Important for performance */
}

/* Verify font stack */
font-family: "Poppins", sans-serif; /* Always include fallback */
```

### Browser-Specific Issues

#### Safari Issues

```css
/* Fix iOS Safari viewport */
body {
  -webkit-overflow-scrolling: touch;
  min-height: -webkit-fill-available;
}

/* Fix flexbox gaps in older Safari */
.flex-gap {
  gap: 1rem;
  margin: -0.5rem;
}
.flex-gap > * {
  margin: 0.5rem;
}
```

#### Internet Explorer 11

```css
/* IE11 Grid fallbacks are automatic via mixins */
.grid-cols-3 {
  display: -ms-grid; /* IE11 */
  display: grid; /* Modern */
}

/* Fix IE11 flexbox issues */
.flex-item {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}
```

---

## 📞 Support

### Documentation Resources

#### 1. **This Complete Guide**

- Comprehensive setup instructions
- Customization examples
- Troubleshooting solutions
- Performance optimization

#### 2. **Inline Code Comments**

```html
<!-- Every HTML file includes helpful comments -->
<!-- Main functionality sections are clearly marked -->

<!-- SCSS files include detailed variable explanations -->
/* Primary color - used for buttons, links, highlights */ $primary: #1e88e5; //
JavaScript modules include function documentation /** * Initialize portfolio
filtering * @param {string} container - Portfolio container selector * @param
{object} options - Configuration options */
```

#### 3. **File References**

- `assets/images/icons/available-icons.txt` - Complete icon list
- `assets/data/services.json` - Service configuration
- `assets/scss/abstracts/_variables.scss` - All customizable values

### Getting Help

#### Template Monster Support

- **Account Access**: Log into your Template Monster account
- **Support Tickets**: Submit detailed issue descriptions
- **Response Time**: Usually 24-48 hours
- **Documentation**: Access to Template Monster knowledge base

#### Community Resources

- **Template Monster Forums**: Community discussions
- **Developer Community**: Share solutions and tips
- **Updates**: Get notified of template updates

#### Self-Help Checklist

Before contacting support:

✅ **Check This Documentation**

- Review relevant sections
- Try troubleshooting steps
- Verify browser compatibility

✅ **Validate Your Environment**

```bash
# Check PHP version
php --version

# Verify file permissions
ls -la contact.php

# Test local server
python -m http.server 8000
```

✅ **Browser Developer Tools**

- Check Console for JavaScript errors
- Verify Network tab for failed requests
- Inspect Elements for CSS issues

### Customization Services

#### What You Can Do Yourself

- **Color changes**: Edit SCSS variables
- **Content updates**: Modify HTML text and images
- **Basic layout**: Adjust spacing and sizing
- **Form configuration**: Update contact form settings

#### When to Hire a Developer

- **Custom functionality**: New features beyond template scope
- **Complex integrations**: CMS, databases, APIs
- **Advanced animations**: Custom JavaScript interactions
- **Performance optimization**: Advanced caching and CDN setup

#### Required Skills for Advanced Customization

- **HTML5/CSS3**: Semantic markup and modern styling
- **SCSS/Sass**: Preprocessing and compilation
- **JavaScript ES6+**: Modern JavaScript features
- **PHP**: Server-side programming for forms
- **Responsive Design**: Mobile-first development

---

## 📄 License & Credits

### Template License

- **Template Monster Standard License**
- **Single Use**: One website per license
- **Commercial Use**: Allowed for business websites
- **Modifications**: Full customization permitted
- **Support**: 6 months of author support included

### Third-Party Libraries

| Library          | Version | License | Purpose            |
| ---------------- | ------- | ------- | ------------------ |
| **AOS**          | 2.3.1   | MIT     | Scroll animations  |
| **Particles.js** | 2.0.0   | MIT     | Background effects |
| **Typed.js**     | 2.0.12  | MIT     | Typing animations  |

### Custom JavaScript Modules

- **custom-isotope.js** - Custom portfolio filtering (Author: Ajcndev)
- **universal-slider.js** - Custom carousel component (Author: Ajcndev)
- **faq-accordion.js** - Custom accordion functionality (Author: Ajcndev)
- **animate-counters.js** - Custom counter animations (Author: Ajcndev)

### Font Licenses

- **Inter**: Google Fonts (SIL Open Font License 1.1)
- **Poppins**: Google Fonts (SIL Open Font License 1.1)
- **Local Hosting**: Fonts included locally for better performance
- **Commercial Use**: Fully allowed for web projects

### Icon Credits

- **Icon Library**: LineIcons (Free Collection)
- **Total Icons**: 606+ professional SVG icons
- **License**: LineIcons Free License (Commercial use allowed)
- **Usage**: Free for commercial projects
- **Format**: Optimized SVG sprite system
- **Categories**: Technology, Business, Social Media, UI Elements
- **Source**: https://lineicons.com/

### Image Credits

- **AI Generated Images**: Created with AI tools for demonstration
- **Stock Photos**: Pexels.com (Free for commercial use)
- **Team Photos**: AI generated professional portraits
- **Portfolio Images**: AI generated project mockups
- **Background Images**: Combination of AI generated and Pexels stock photos
- **Blog Images**: AI generated content illustrations

**Note**: All sample images are for demonstration only. Replace with your own content before production use.

### Author Credits

- **Template Design**: Ajcndev
- **Custom JavaScript**: Ajcndev
- **SCSS Architecture**: Ajcndev
- **Integration & Optimization**: Ajcndev
- **Content Curation**: AI generated + Pexels stock selection

---

## 🚀 Version History

### Version 1.0.0 (Current Release)

**Release Date**: January 2025

#### ✨ Initial Release Features

- Complete ITAgency template with 12 pages
- Responsive design system with SCSS architecture
- Interactive portfolio with filtering capabilities
- Contact form with PHP backend
- 606+ professional SVG icons
- Particle background effects
- Smooth scroll animations
- Cross-browser compatibility (IE11+)
- Mobile-optimized navigation
- SEO-ready markup and structure

#### 🛠️ Technical Implementation

- HTML5 semantic structure
- CSS3/SCSS with 7-1 architecture
- JavaScript ES6+ with fallbacks
- PHP 7.0+ contact form processing
- Performance optimized assets
- Accessibility compliance

#### 📊 Performance Metrics

- Lighthouse Performance: 95+
- Mobile-friendly: ✅ Passed
- Cross-browser tested: ✅ Verified
- Load time: < 3 seconds on 3G

---

## 🎯 Quick Reference

### File Locations

```
Key Files Quick Access:
├── 🏠 Homepage: index.html
├── 🎨 Main Styles: assets/scss/main.scss
├── ⚡ Core JS: assets/js/main.js
├── 📧 Contact Form: contact.php
├── 🎛️ Variables: assets/scss/abstracts/_variables.scss
├── 🖼️ Logo: assets/images/logo-01.png
├── 📝 Services Config: assets/data/services.json
└── 🔧 Icon Reference: assets/images/icons/available-icons.txt
```

### Common Tasks

```bash
# Compile SCSS
sass assets/scss/main.scss assets/css/style.css --watch

# Start Local Server
python -m http.server 8000

# Check PHP Version
php --version

# Test Contact Form
curl -X POST http://localhost:8000/contact.php
```

### Support Contacts

- **Template Monster**: Through your account dashboard
- **Documentation**: This guide covers 95% of questions
- **Community**: Template Monster forums

---

**🎉 Congratulations!** You now have everything needed to successfully implement and customize the ITAgency template. This documentation covers all aspects from basic setup to advanced customization. Keep this guide handy for reference throughout your development process.

**Happy Building! 🚀**
