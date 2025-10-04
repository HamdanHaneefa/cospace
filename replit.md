# Cospace Coworks - Coworking Space Website

## Overview

Cospace Coworks is a marketing website for a coworking space business located in Kottakkal, Edarikode, Malappuram, Kerala. The application is a single-page application (SPA) built to showcase the coworking space's services, pricing, facilities, and enable customer contact. The website features multiple pages including homepage, services, pricing, gallery, about, and contact sections, all designed to attract and convert potential customers looking for flexible workspace solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18** with TypeScript for type safety and modern component development
- **Vite** as the build tool and development server, chosen for fast hot module replacement and optimized production builds
- **React Router DOM** for client-side routing, enabling a multi-page SPA experience without full page reloads

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives, providing accessible, customizable components
- **Tailwind CSS** for utility-first styling with a custom design system defined in CSS variables (HSL color format)
- **Framer Motion** for smooth page transitions and scroll-triggered animations
- **Inter font family** as the primary typeface throughout the application

**Design System**
- Custom color palette centered around navy blue primary colors (`--primary: 217 91% 32%`)
- Dark blue CTA colors for call-to-action elements
- Consistent spacing, typography, and component styling through Tailwind configuration
- Responsive design with mobile-first approach using Tailwind breakpoints

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- React hooks for local component state
- Toast notifications for user feedback using both shadcn Toast and Sonner libraries

### Page Structure & Routing

The application uses a consistent layout pattern with persistent Navigation and Footer components:

**Core Pages:**
- **Homepage** (`/`): Hero section, services overview, benefits, pricing preview, testimonials, and CTAs
- **Services** (`/services`): Detailed workspace offerings (Single/Double/Triple/Quadruple seats, Virtual Office, Conference Rooms) and amenities
- **Pricing** (`/pricing`): Comprehensive pricing plans with daily, weekly, and monthly rates
- **Gallery** (`/gallery`): Image showcase of facilities with modal lightbox functionality
- **About** (`/about`): Company story, values, team, and statistics
- **Contact** (`/contact`): Contact form with location details and business hours
- **404 Page** (`*`): Catch-all route for handling non-existent pages

### Component Architecture

**Layout Components:**
- `Navigation`: Sticky header with logo, navigation links, mobile menu with hamburger toggle, and active route highlighting
- `Footer`: Company information, quick links, contact details, and social media icons
- `ScrollToTop`: Utility component that scrolls to top on route changes

**UI Components:**
- Comprehensive shadcn/ui component library including Card, Button, Dialog, Input, Textarea, Badge, and many others
- **LazyImage**: Custom component for optimized image loading with skeleton loaders, native lazy loading, and error handling
- All components follow consistent styling patterns and are fully accessible via Radix UI primitives

### Performance & SEO Optimizations

**SEO Meta Tags:**
- Comprehensive meta tags in `index.html` including Open Graph and Twitter Card support
- Local Business Schema markup for search engine understanding
- Canonical URL and robots meta configuration
- Location-specific keywords targeting "Kottakkal," "Edarikode," and "Malappuram"

**Performance:**
- **Image Lazy Loading:** Custom `LazyImage` component with skeleton loaders and native browser lazy loading for improved initial page load
- Images load only when they enter the viewport, reducing initial bandwidth usage
- Skeleton placeholders provide visual feedback during image loading
- Error handling with fallback UI for failed image loads
- Lazy loading and code splitting via Vite
- Client-side routing eliminates full page reloads

### Development Experience

**Code Quality Tools:**
- **ESLint** with TypeScript support for code linting
- **TypeScript** with relaxed configuration (`strict: false`) to balance type safety with development speed
- Path aliases (`@/*`) for cleaner imports

**Development Server:**
- Vite dev server configured for `0.0.0.0:5000` with HMR over port 443
- Component tagging in development mode via `lovable-tagger` plugin

## External Dependencies

### UI & Styling Libraries
- **@radix-ui/react-*** (26+ components): Accessible, unstyled UI primitives for building the component system
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: For creating variant-based component APIs
- **framer-motion**: Animation library for page transitions and scroll effects
- **lucide-react**: Icon library providing consistent iconography

### Form & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod** (implied by resolver usage): Schema validation

### Data Management
- **@tanstack/react-query**: Server state management and caching

### Component Libraries
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider functionality
- **react-day-picker**: Date picker component
- **date-fns**: Date manipulation utilities
- **vaul**: Drawer component
- **sonner**: Toast notification system
- **next-themes**: Theme management (dark/light mode support)

### Development Tools
- **@vitejs/plugin-react-swc**: Fast React refresh using SWC
- **lovable-tagger**: Development component tagging
- **typescript-eslint**: TypeScript linting

### Build Configuration
- Custom Vite configuration with path resolution
- PostCSS with Tailwind and Autoprefixer
- TypeScript compilation with multiple tsconfig files for app and build tooling