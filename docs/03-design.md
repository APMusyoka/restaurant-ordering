# Design System - Restaurant Ordering Website

## 🎨 Design Philosophy

### Core Principles
1. **Appetite Appeal**: Design should make food look irresistible
2. **Effortless Navigation**: Users should find what they want in 3 clicks or less
3. **Trust & Credibility**: Professional design that builds confidence
4. **Mobile-First**: Most orders happen on phones
5. **Speed**: Fast loading times are critical for hungry customers

### Design Goals
- Create an emotional connection through imagery
- Reduce friction in the ordering process
- Build trust through polish and professionalism
- Ensure accessibility for all users
- Stand out from generic restaurant templates

---

## 🎨 Color Palette

### Primary Colors

#### Option 1: Warm & Appetizing
```css
--primary-50: #FFF7ED;    /* Lightest orange */
--primary-100: #FFEDD5;
--primary-200: #FED7AA;
--primary-300: #FDBA74;
--primary-400: #FB923C;
--primary-500: #F97316;   /* Main brand color */
--primary-600: #EA580C;
--primary-700: #C2410C;
--primary-800: #9A3412;
--primary-900: #7C2D12;   /* Darkest orange */
```

#### Option 2: Elegant & Sophisticated
```css
--primary-50: #FDF4FF;
--primary-100: #FAE8FF;
--primary-200: #F5D0FE;
--primary-300: #F0ABFC;
--primary-400: #E879F9;
--primary-500: #D946EF;   /* Main brand color */
--primary-600: #C026D3;
--primary-700: #A21CAF;
--primary-800: #86198F;
--primary-900: #701A75;
```

#### Option 3: Fresh & Natural
```css
--primary-50: #F0FDF4;
--primary-100: #DCFCE7;
--primary-200: #BBF7D0;
--primary-300: #86EFAC;
--primary-400: #4ADE80;
--primary-500: #22C55E;   /* Main brand color */
--primary-600: #16A34A;
--primary-700: #15803D;
--primary-800: #166534;
--primary-900: #14532D;
```

### Neutral Colors
```css
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;
```

### Semantic Colors
```css
--success: #10B981;      /* Order confirmed */
--warning: #F59E0B;      /* Limited availability */
--error: #EF4444;        /* Out of stock */
--info: #3B82F6;         /* Information */
```

### Background Colors
```css
--bg-primary: #FFFFFF;
--bg-secondary: #F9FAFB;
--bg-dark: #1F2937;
--bg-overlay: rgba(0, 0, 0, 0.5);
```

---

## 📝 Typography

### Font Families

#### Primary Font (Headings)
```css
font-family: 'Playfair Display', serif;
/* Elegant, classic, perfect for restaurant names */
```

**Alternatives:**
- `'Cormorant Garamond', serif` - Sophisticated
- `'Libre Baskerville', serif` - Traditional
- `'Lora', serif` - Warm and friendly

#### Secondary Font (Body)
```css
font-family: 'Inter', sans-serif;
/* Clean, readable, modern */
```

**Alternatives:**
- `'Outfit', sans-serif` - Geometric and friendly
- `'Manrope', sans-serif` - Approachable
- `'DM Sans', sans-serif` - Professional

#### Accent Font (Optional)
```css
font-family: 'Pacifico', cursive;
/* For special touches, chef's specials */
```

### Font Scale
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-7xl: 4.5rem;      /* 72px */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Line Heights
```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

---

## 📐 Spacing System

### Spacing Scale
```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Container Width
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

---

## 🎭 Components

### Button Styles

#### Primary Button
```css
background: var(--primary-500);
color: white;
padding: 0.75rem 1.5rem;
border-radius: 0.5rem;
font-weight: 600;
transition: all 0.3s ease;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

&:hover {
  background: var(--primary-600);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
```

#### Secondary Button
```css
background: white;
color: var(--primary-500);
border: 2px solid var(--primary-500);
padding: 0.75rem 1.5rem;
border-radius: 0.5rem;
font-weight: 600;
transition: all 0.3s ease;

&:hover {
  background: var(--primary-50);
}
```

#### Icon Button
```css
background: var(--gray-100);
padding: 0.75rem;
border-radius: 9999px;
transition: all 0.3s ease;

&:hover {
  background: var(--primary-100);
  color: var(--primary-500);
}
```

### Card Styles

#### Menu Item Card
```css
background: white;
border-radius: 1rem;
overflow: hidden;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease;

&:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
```

#### Feature Card
```css
background: white;
border-radius: 1rem;
padding: 2rem;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
border: 1px solid var(--gray-200);
transition: all 0.3s ease;

&:hover {
  border-color: var(--primary-500);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
```

### Form Inputs

#### Text Input
```css
border: 2px solid var(--gray-300);
border-radius: 0.5rem;
padding: 0.75rem 1rem;
font-size: 1rem;
transition: all 0.3s ease;

&:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
}
```

#### Select Dropdown
```css
appearance: none;
border: 2px solid var(--gray-300);
border-radius: 0.5rem;
padding: 0.75rem 2.5rem 0.75rem 1rem;
background-image: url('chevron-down.svg');
background-position: right 0.75rem center;
background-repeat: no-repeat;
```

---

## 🖼️ Layout Patterns

### Hero Section
```
- Full viewport height (min-h-screen)
- Background image with overlay
- Centered content
- Large heading (text-5xl or text-6xl)
- Subheading
- Call-to-action buttons
- Scroll indicator
```

### Menu Grid
```
- Grid layout: 1 column (mobile), 2 columns (tablet), 3-4 columns (desktop)
- Card-based design
- Image aspect ratio: 4:3 or 1:1
- Consistent spacing (gap-6 or gap-8)
- Category filters above grid
```

### Cart Sidebar
```
- Fixed position on right side (desktop)
- Slide-in on mobile
- White background with shadow
- Sticky header with close button
- Scrollable item list
- Fixed footer with total and checkout
```

### Footer
```
- Multi-column layout (responsive)
- Dark background
- Contact information
- Social media links
- Navigation links
- Newsletter signup
- Copyright information
```

---

## ✨ Animations & Transitions

### Page Transitions
```css
.page-enter {
  opacity: 0;
  transform: translateY(20px);
}

.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease-out;
}
```

### Hover Effects
```css
/* Card lift */
transform: translateY(-4px);
transition: transform 0.3s ease;

/* Button grow */
transform: scale(1.05);
transition: transform 0.2s ease;

/* Image zoom */
transform: scale(1.1);
transition: transform 0.5s ease;
```

### Loading States
```css
/* Skeleton loader */
background: linear-gradient(
  90deg,
  var(--gray-200) 25%,
  var(--gray-300) 50%,
  var(--gray-200) 75%
);
background-size: 200% 100%;
animation: loading 1.5s infinite;

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Micro-interactions
```css
/* Button ripple effect */
/* Add to cart success bounce */
/* Notification slide-in */
/* Toast pop-up */
/* Number counter animation */
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile first approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Responsive Typography
```css
/* Hero heading */
font-size: 2.25rem; /* mobile */
font-size: 3rem; /* tablet */
font-size: 4.5rem; /* desktop */

/* Body text */
font-size: 0.875rem; /* mobile */
font-size: 1rem; /* tablet+ */
```

---

## 🎯 UI/UX Best Practices

### Navigation
- ✅ Sticky header on scroll
- ✅ Mobile hamburger menu
- ✅ Active page indicator
- ✅ Breadcrumbs on deep pages
- ✅ Back to top button

### Forms
- ✅ Clear labels above inputs
- ✅ Inline validation
- ✅ Error messages below fields
- ✅ Success states
- ✅ Loading states during submission
- ✅ Required field indicators (*)

### Images
- ✅ Lazy loading
- ✅ Proper aspect ratios
- ✅ Alt text for accessibility
- ✅ Placeholder blur effect
- ✅ WebP format with fallbacks
- ✅ Responsive srcset

### Accessibility
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast ratios (WCAG AA)
- ✅ Screen reader support
- ✅ Skip to main content link

### Performance
- ✅ Code splitting
- ✅ Image optimization
- ✅ Font subsetting
- ✅ Minimize HTTP requests
- ✅ Lazy load below fold content
- ✅ Preload critical assets

---

## 🎨 Page-Specific Designs

### Homepage
```
1. Hero section with food imagery
2. Quick links (Order, Reserve, Menu)
3. Featured dishes carousel
4. About section (2-column)
5. Customer testimonials
6. Location & hours
7. Instagram feed
8. Newsletter signup
9. Footer
```

### Menu Page
```
1. Page header with search
2. Category filters (sticky)
3. Items grid
4. Floating cart button (mobile)
5. Cart sidebar (desktop)
```

### Order Checkout
```
1. Progress indicator (4 steps)
2. Order summary sidebar
3. Form sections with clear headings
4. Prominent CTA buttons
5. Trust badges (secure checkout)
```

### Reservation Page
```
1. Calendar on left
2. Time slots on right
3. Party size selector
4. Customer form
5. Special requests textarea
6. Summary before confirmation
```

---

## 🎨 Dark Mode (Optional)

### Dark Color Scheme
```css
@media (prefers-color-scheme: dark) {
  --bg-primary: #111827;
  --bg-secondary: #1F2937;
  --text-primary: #F9FAFB;
  --text-secondary: #D1D5DB;
  --border-color: #374151;
}
```

---

## 🖌️ Design Inspiration Sources

1. **Dribbble**: Search "restaurant website"
2. **Behance**: Food & beverage projects
3. **Awwwards**: Restaurant category
4. **Real Restaurants**: 
   - Sweetgreen
   - Chipotle
   - Shake Shack
   - Local upscale restaurants
5. **Component Libraries**:
   - Tailwind UI
   - Shadcn UI
   - Headless UI

---

## 📋 Design Checklist

### Before Launch
- [ ] All images optimized
- [ ] Responsive on all breakpoints
- [ ] Forms validated and working
- [ ] Loading states implemented
- [ ] Error states handled
- [ ] 404 page designed
- [ ] Favicon and meta images
- [ ] Print stylesheet (optional)
- [ ] Cross-browser tested
- [ ] Accessibility audit passed
- [ ] Performance score 90+ (Lighthouse)
- [ ] SEO meta tags complete

---

## 🎨 Design Deliverables

1. **Wireframes** (Low-fidelity)
2. **Mockups** (High-fidelity in Figma)
3. **Component Library** (Storybook optional)
4. **Style Guide** (This document)
5. **Asset Library** (Icons, images)
6. **Prototype** (Interactive clickthrough)

---

## 💡 Pro Tips

1. **Use Real Content Early**: Don't rely on Lorem Ipsum for too long
2. **Design in Browser**: CSS is your final design tool
3. **Mobile First**: Start small, expand up
4. **Consistent Spacing**: Use the spacing scale religiously
5. **Limit Font Weights**: 3 weights max per family
6. **Test with Real Users**: Get feedback early
7. **Performance Budget**: Set image size limits
8. **Accessibility First**: Don't bolt it on later
9. **Version Control**: Git commit design changes
10. **Document Decisions**: Keep this doc updated

---

## 🚀 Next Steps

1. Choose a color palette based on client branding
2. Import Google Fonts
3. Set up Tailwind config with custom tokens
4. Create reusable component classes
5. Build a component playground page
6. Design homepage first
7. Get client approval on design direction
8. Build out remaining pages
9. Polish and refine
10. Launch! 🎉
