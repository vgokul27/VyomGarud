# VyomGarud - Military-Grade UAV Systems

A modern, responsive website for VyomGarud, showcasing next-generation military-grade unmanned aerial vehicle (UAV) systems with cutting-edge technology and precision engineering.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18 + Vite for blazing-fast performance
- **Smooth Animations**: Leveraging Framer Motion for fluid, engaging interactions
- **Responsive Design**: Fully optimized for all devices (mobile, tablet, desktop)
- **Military-Grade Aesthetics**: Dark theme with orange accent colors (#ff7b00)
- **Interactive UI**: Animated radar effects, HUD elements, and tactical design patterns
- **Optimized Performance**: Fast load times and smooth scrolling experience

## 📦 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: DM Sans, Helvetica Neue, Arial

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd VyomGarud
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 📁 Project Structure

```
VyomGarud/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with active section tracking
│   │   ├── Hero.jsx            # Landing section with animated effects
│   │   ├── About.jsx           # Animated cards showcasing company info
│   │   ├── Capabilities.jsx    # UAV capabilities showcase
│   │   ├── Highlights.jsx      # Key features and highlights
│   │   ├── Contact.jsx         # Contact form and information
│   │   └── Footer.jsx          # Footer with 5-column layout
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles and Tailwind imports
│   └── main.jsx                # Entry point
├── public/                     # Static assets
├── index.html                  # HTML template
└── package.json                # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

- **Primary Orange**: `#ff7b00` - Brand color, CTAs, highlights
- **Dark Orange**: `#e66f00` - Hover states
- **Light Orange**: `#ff9933` - Gradients
- **Background Black**: `#000000` - Main background
- **Dark Gray**: `#1a1a1a` - Secondary backgrounds
- **Text Gray**: `#e5e5e5` - Primary text
- **Muted Gray**: `#a3a3a3` - Secondary text

### Typography

- **Primary Font**: DM Sans
- **Fallback Fonts**: Helvetica Neue, Arial, sans-serif
- **Heading Sizes**:
  - Hero: 4xl - 7xl (responsive)
  - Section Headings: 4xl - 5xl
  - Card Titles: xl - 2xl

### Components

#### Navbar

- Fixed position with blur backdrop
- Active section highlighting in orange
- Mobile-responsive sidebar menu
- Smooth scroll navigation

#### Hero Section

- Full viewport height
- Left-aligned content layout
- Animated radar effects and HUD elements
- Gradient icon with pulse animation
- Feature pills with hover effects
- Two CTA buttons (primary and secondary)

#### About Section

- Three animated cards with staggered entrance
- Icon-based design with gradient backgrounds
- Hover effects: lift, border change, shadow
- Bottom decorative line animation

#### Footer

- 5-column layout: Product, Industries, Resources, Company, Quick Links
- Social media integration
- Hover effects on all links
- Responsive grid system

## 🎭 Animation Details

### Framer Motion Variants

- **Fade In Up**: `opacity: 0, y: 30` → `opacity: 1, y: 0`
- **Fade In Left**: `opacity: 0, x: -50` → `opacity: 1, x: 0`
- **Scale In**: `scale: 0.95` → `scale: 1`
- **Stagger Children**: 0.2s delay between child animations

### Interactive Animations

- Card hover: Lift by 8px, border color change
- Button hover: Scale 1.05, color transition
- Icon hover: Rotate 5° and scale 1.1
- Scroll indicator: Continuous bounce animation

## 🔧 Customization

### Changing Brand Colors

Edit the color values in Tailwind classes:

```jsx
// Primary orange
className = "bg-[#ff7b00]";
className = "text-[#ff7b00]";
className = "border-[#ff7b00]";
```

### Modifying Animations

Adjust Framer Motion transition properties:

```jsx
transition={{
  duration: 0.8,    // Animation speed
  delay: 0.2,       // Start delay
  ease: "easeOut"   // Easing function
}}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Optimizations

- Lazy loading for images and components
- Optimized bundle size with Vite
- CSS purging in production
- Smooth scroll behavior
- Debounced scroll events for navbar active state

## 📄 License

All rights reserved © VyomGarud

## 🤝 Contributing

This is a proprietary project for VyomGarud. For inquiries, please contact the development team.

## 📧 Contact

For technical support or questions:

- Email: contact@vyomgarud.com
- Website: [VyomGarud](#)

---

**Built with precision. Powered by innovation.**
