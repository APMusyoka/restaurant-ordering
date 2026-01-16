# Bella Cucina - Restaurant Online Ordering System

A modern, production-ready restaurant website with online ordering, reservations, and beautiful UI. Built with Next.js 14 and Tailwind CSS.

![Status](https://img.shields.io/badge/Status-MVP%20Complete-success)
![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.0-38bdf8)

## ✨ Features

### Core Functionality
- 🏠 **Stunning Homepage** - Hero section, features, reviews, and location info
- 🍕 **Complete Menu** - 24 dishes with search and category filtering
- 🛒 **Shopping Cart** - Global state management with add/remove/update
- 📦 **Order Management** - Delivery/pickup selection with price calculations
- 📅 **Reservations** - Table booking with date/time selection and form validation
- 📸 **Gallery** - Photo showcase with category filters and lightbox
- ℹ️ **About Page** - Restaurant story, values, and team
- 📞 **Contact Page** - Contact form with validation and info display

### Design & UX
- 📱 **Fully Responsive** - Mobile-first design for all devices
- 🎨 **Modern Design** - Clean, professional aesthetic with orange accent color
- ✨ **Smooth Animations** - Hover effects and transitions
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🔍 **SEO Optimized** - Proper meta tags and heading structure
- 🎯 **Floating Header** - Transparent overlay that becomes solid on scroll

### Technical Features
- ⚡ **TypeScript** - Full type safety throughout
- 🔄 **Global State** - React Context for cart management
- 📝 **Form Validation** - React Hook Form integration
- 🎨 **Design System** - Reusable UI components (Button, Input, Card)
- 🌐 **Next.js 14** - App Router with Server Components
- 🎭 **Custom Fonts** - Inter (sans-serif) and Playfair Display (serif)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.2 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4.0
- **State Management**: React Context API
- **Form Handling**: React Hook Form 7.71.1
- **Icons**: Lucide React 0.562.0
- **Utilities**: clsx for conditional classes

## 📋 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd restaurant-ordering
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
restaurant-ordering/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── gallery/      # Gallery page
│   │   ├── menu/         # Menu page with filtering
│   │   ├── order/        # Cart/Order page
│   │   ├── reservations/ # Reservations page
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles
│   ├── components/       # Reusable components
│   │   ├── layout/       # Header & Footer
│   │   ├── menu/         # Menu-related components
│   │   └── ui/           # UI components (Button, Input, Card)
│   ├── data/             # Mock data (menu, restaurant info)
│   ├── lib/              # Utilities and context
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
├── docs/                 # Project documentation
└── package.json
```

## 🎨 Customization

### Update Restaurant Information

Edit `src/data/restaurant.ts` to customize:
- Restaurant name, address, phone
- Operating hours
- Customer reviews

### Update Menu Items

Edit `src/data/menu.ts` to customize:
- Menu items, prices, descriptions
- Categories, dietary tags
- Spice levels, popularity

### Change Brand Colors

Update `tailwind.config.js` to change the orange accent color to your brand color.

### Replace Placeholder Images

Update image URLs in:
- Menu items (`src/data/menu.ts`)
- Gallery (`src/app/gallery/page.tsx`)
- Homepage hero (`src/app/page.tsx`)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Environment Variables

Create a `.env.local` file (see `env.example`):

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_RESTAURANT_NAME=Your Restaurant Name
```

## 📚 Documentation

Detailed documentation available in the `/docs` folder:

- **01-restaurant-ordering.md** - Project overview and features
- **02-key-features.md** - Detailed feature specifications
- **03-design.md** - Design system and component guide
- **04-project-complete.md** - MVP completion summary and next steps

## 🚀 Next Steps

### Phase 1: Polish & Refine
- [ ] Replace placeholder images with real photos
- [ ] Integrate Google Maps on contact page
- [ ] Add loading skeletons
- [ ] Implement toast notifications
- [ ] Persist cart to localStorage
- [ ] Add page transitions

### Phase 2: Enhanced Features
- [ ] Payment integration (Stripe)
- [ ] Email notifications (order confirmations)
- [ ] User authentication
- [ ] Order tracking system
- [ ] Reviews submission form
- [ ] Admin dashboard

## 💼 Business Value

- **Target Market**: Restaurants, cafes, coffee shops, cloud kitchens
- **Project Value**: $800 - $1,500 per client
- **Customization Time**: 2-4 hours per client
- **Demo Ready**: Yes - fully functional MVP

## 🎯 Use Cases

Perfect for:
- Italian restaurants
- Pizza places
- Coffee shops
- Bakeries
- Any food service business needing online presence

## 📝 License

This project is open source and available for commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ for the restaurant industry**

Ready to help local businesses thrive online 🍕✨
