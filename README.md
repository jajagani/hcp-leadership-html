# HarperCollins Leadership Website

A modern, responsive website recreation of the HarperCollins Leadership homepage, combining semantic HTML, SCSS components, and WordPress integration patterns for optimal performance and maintainability.

## 🎯 Project Objective

This project aims to modernize and recreate the HarperCollins Leadership website by:

- **Converting** from the legacy WordPress-based site to a hybrid approach
- **Combining** static HTML/CSS with WordPress integration capabilities
- **Improving** performance, accessibility, and user experience
- **Maintaining** the original design while implementing modern development practices
- **Creating** a scalable foundation for future development

### Original vs New Approach

- **Original**: Pure WordPress with theme dependencies
- **New**: Static HTML/CSS with WordPress API integration for dynamic content
- **Benefits**: Faster loading, better SEO, easier maintenance, and enhanced security

## 🏗️ Project Structure

```
hcp-leadership-html/
├── index.html                 # Main HTML file with semantic structure
├── library/
│   ├── css/
│   │   ├── main.css          # Compiled CSS output
│   │   └── main.css.map      # Source map for debugging
│   ├── js/
│   │   └── main.js           # JavaScript for interactivity
│   └── scss/
│       ├── main.scss         # Main SCSS file that imports all components
│       ├── gutenberg.scss    # WordPress Gutenberg editor styles
│       ├── modules/
│       │   └── _variables.scss  # Global variables (colors, typography, spacing)
│       ├── lib/
│       │   └── bootstrap/    # Bootstrap framework files (for reference)
│       └── partials/
│           ├── _base.scss    # Global styles and resets
│           ├── _buttons.scss # Reusable button components (BEM)
│           ├── _inputs.scss  # Form input styles
│           ├── _typography.scss # Typography styles
│           ├── _styling.scss # Additional styling utilities
│           ├── _tools.scss   # Utility functions and mixins
│           └── components/
│               ├── _header.scss    # Header component
│               ├── _footer.scss    # Footer component
│               ├── _hero.scss      # Hero section
│               ├── _book-cards.scss # Book cards and content sections
│               ├── _featured-collection.scss # Featured content
│               ├── _topics.scss    # Topic navigation
│               ├── _services.scss  # Service offerings
│               ├── _manager-success.scss # Manager success section
│               ├── _leadership-excerpt.scss # Leadership content
│               ├── _new-releases.scss # New releases section
│               ├── _mobile-nav.scss # Mobile navigation styles
│               ├── _single-post.scss # Individual post styles
│               ├── _blog.scss      # Blog listing styles
│               ├── _not-found.scss # 404 page styles
│               └── gutenberg/
│                   └── _hero.scss  # Gutenberg hero block styles
```

## 🛠️ Technologies & Tools

### Core Technologies

- **HTML5**: Semantic markup with accessibility features
- **SCSS/Sass**: Advanced CSS preprocessing with variables, mixins, and nesting
- **CSS3**: Modern styling with Flexbox, Grid, and custom properties
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Bootstrap 5**: CSS framework for responsive grid and components (reference)

### Development Tools

- **Sass Compiler**: For SCSS to CSS compilation
- **Live Server**: Real-time development server with hot reload
- **VS Code Extensions**: Enhanced development experience
- **Git**: Version control and collaboration

### External Dependencies

- **Google Fonts**: Typography (Georgia, Inter, EB Garamond)
- **Font Awesome**: Icon library for UI elements
- **Online Web Fonts**: Custom fonts (Zooja Pro, Plantin, Brandon Grotesque)

## 🚀 Development Setup

### Prerequisites

Before starting development, ensure you have the following installed:

1. **Node.js** (v14 or higher)

   ```bash
   # Check if Node.js is installed
   node --version
   npm --version
   ```

2. **Sass Compiler**

   ```bash
   # Install Sass globally
   npm install -g sass

   # Or install locally in the project
   npm init -y
   npm install sass --save-dev
   ```

3. **VS Code Extensions** (Recommended)
   - Live Server
   - Sass
   - HTML CSS Support
   - Auto Rename Tag
   - Bracket Pair Colorizer

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd hcp-leadership-html
   ```

2. **Install dependencies** (if using npm)

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   # Using Live Server extension in VS Code
   # Right-click on index.html → "Open with Live Server"

   # Or using command line
   npx live-server
   ```

4. **Compile SCSS** (in a separate terminal)

   ```bash
   # Watch mode for development
   sass --watch library/scss/main.scss:library/css/main.css

   # Single compilation
   sass library/scss/main.scss:library/css/main.css

   # Compressed output for production
   sass library/scss/main.scss:library/css/main.css --style=compressed
   ```

## 🔧 Development Workflow

### Recommended Development Process

1. **Start Live Server**

   - Install Live Server extension in VS Code
   - Right-click on `index.html` → "Open with Live Server"
   - This opens the site at `http://localhost:5500` with auto-reload

2. **Compile SCSS**

   ```bash
   sass --watch library/scss/main.scss:library/css/main.css
   ```

   - This command watches for changes in SCSS files
   - Automatically compiles to CSS when files are saved
   - Provides real-time feedback during development

3. **Make Changes**
   - Edit SCSS files in `library/scss/`
   - Changes automatically compile to `library/css/main.css`
   - Live Server automatically refreshes the browser

### File Organization Best Practices

- **Components**: Each component has its own SCSS file in `partials/components/`
- **Variables**: Global variables in `modules/_variables.scss`
- **Mixins**: Utility functions in `partials/_tools.scss`
- **Base Styles**: Global styles in `partials/_base.scss`

## 🎨 Design System

### Color Palette

```scss
// Primary Colors
$primary-color: #1a1a1a; // Dark gray for headers
$secondary-color: #6b7280; // Medium gray for secondary text
$accent-color: #d97706; // Orange for CTAs and highlights

// Neutral Colors
$white: #ffffff;
$light-gray: #f9fafb; // Background colors
$text-primary: #111827; // Main text color
$text-secondary: #6b7280; // Secondary text
```

### Typography System

```scss
// Font Families
$font-primary: "Plantin", "EB Garamond", serif; // Headings
$font-secondary: "Inter", sans-serif; // Body text
$font-cursive: "zooja-pro", cursive, sans-serif; // Decorative text

// Font Sizes
$font-size-xs: 0.75rem; // 12px
$font-size-sm: 0.875rem; // 14px
$font-size-base: 1rem; // 16px
$font-size-lg: 1.125rem; // 18px
$font-size-xl: 1.5rem; // 24px
$font-size-2xl: 2rem; // 32px
$font-size-3xl: 3rem; // 48px
```

### Spacing System

```scss
$spacing-xs: 0.25rem; // 4px
$spacing-sm: 0.5rem; // 8px
$spacing-md: 1rem; // 16px
$spacing-lg: 1.5rem; // 24px
$spacing-xl: 2rem; // 32px
$spacing-2xl: 3rem; // 48px
$spacing-3xl: 4rem; // 64px
```

## 🧩 BEM Methodology

This project follows **BEM (Block-Element-Modifier)** naming convention for maintainable CSS:

### Naming Convention

```scss
.block {
} // Block: Standalone component
.block__element {
} // Element: Part of a block
.block--modifier {
} // Modifier: Variant of a block
.block__element--modifier {
} // Element modifier
```

### Example Implementation

```scss
// Button Component
.btn {
  // Base button styles
  padding: $spacing-sm $spacing-md;
  border-radius: 4px;

  &--primary {
    // Primary variant
    background-color: $primary-color;
    color: $white;
  }

  &--large {
    // Large size variant
    padding: $spacing-md $spacing-lg;
    font-size: $font-size-lg;
  }

  &__icon {
    // Icon element
    margin-left: $spacing-sm;
  }
}
```

## 📱 Responsive Design

### Breakpoint System

```scss
// Mobile-first approach
$breakpoint-sm: 576px; // Small devices
$breakpoint-md: 768px; // Medium devices
$breakpoint-lg: 992px; // Large devices
$breakpoint-xl: 1200px; // Extra large devices
```

### Media Query Usage

```scss
.component {
  // Mobile styles (default)
  padding: $spacing-md;

  @media (min-width: $breakpoint-md) {
    // Tablet styles
    padding: $spacing-lg;
  }

  @media (min-width: $breakpoint-lg) {
    // Desktop styles
    padding: $spacing-xl;
  }
}
```

## 🔍 SEO & Accessibility

### Semantic HTML Structure

- Proper heading hierarchy (h1-h6)
- Semantic elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels and roles for screen readers
- Alt text for all images

### Performance Optimization

- Optimized images with appropriate formats
- Minified CSS and JavaScript for production
- Efficient CSS selectors and minimal specificity conflicts
- Lazy loading for images and content

## 🚀 Deployment

### Production Build

```bash
# Compile SCSS with compression
sass library/scss/main.scss:library/css/main.css --style=compressed

# Minify JavaScript (if using a build tool)
npm run build
```

### WordPress Integration

- Static HTML files can be integrated into WordPress themes
- SCSS compilation can be automated with build tools
- Content can be dynamically loaded via WordPress REST API

## 🤝 Contributing

### Code Standards

- Follow BEM naming convention for CSS classes
- Use semantic HTML elements
- Write self-documenting code with clear comments
- Maintain consistent indentation and formatting

### Git Workflow

1. Create a feature branch from `main`
2. Make changes following the established patterns
3. Test thoroughly across different devices and browsers
4. Submit a pull request with detailed description

## 📚 Resources & References

### Documentation

- [Sass Documentation](https://sass-lang.com/documentation)
- [BEM Methodology](http://getbem.com/)
- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

### Tools & Extensions

- [Live Server VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Sass VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css-support)

## 📄 License

This project is proprietary to HarperCollins Leadership. All rights reserved.

---

**For technical support or questions, please contact the development team.**
