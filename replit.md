# Tech Blog - High-Tech Futuristic Blog Platform

## Overview

A modern, futuristic tech blog platform built with React, Express, and PostgreSQL. The application features a clean, cyberpunk-inspired design with a focus on content readability and premium user experience. The blog showcases articles on programming, AI, cybersecurity, and other technology topics with a sophisticated dark mode aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library based on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Design Philosophy**: "Futuristic Minimalism" inspired by Linear, Stripe, and Vercel
  - Custom color system with dark mode as primary theme
  - Typography hierarchy using Inter (UI), System UI (body), and JetBrains Mono (code)
  - Subtle cyberpunk accents with neon glows and grid patterns
  - Hover/active elevation states for interactive elements

**State Management**
- Server state handled via React Query with infinite stale time
- Local component state using React hooks
- Toast notifications for user feedback

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with ESM modules
- TypeScript for type safety across the stack
- Custom request logging middleware for API monitoring
- Raw body parsing for webhook support

**API Design**
- RESTful endpoints under `/api` prefix
- Routes:
  - `GET /api/posts` - Fetch all posts
  - `GET /api/posts/category/:category` - Filter by category
  - `GET /api/posts/:slug` - Get single post by slug
  - `POST /api/posts` - Create new post (with validation)

**Validation & Type Safety**
- Zod schemas for runtime validation
- Drizzle-Zod integration for database schema validation
- Shared types between client and server via `@shared` alias

### Data Storage

**Database**
- **PostgreSQL** via Neon Database serverless driver
- **Drizzle ORM** for type-safe database operations
- WebSocket connection pooling for serverless compatibility

**Schema Design**
```
posts table:
- id (UUID, primary key)
- title, slug (unique), excerpt, content
- category, imageUrl, readTime
- publishedAt (timestamp with default)
```

**Data Access Pattern**
- Repository pattern via `DatabaseStorage` class implementing `IStorage` interface
- All queries use Drizzle's query builder for type safety
- Posts ordered by `publishedAt` descending by default

### External Dependencies

**Core Infrastructure**
- **Neon Database** - Serverless PostgreSQL hosting with WebSocket support
- **Replit** - Development environment with custom Vite plugins for runtime error handling and dev tooling

**UI Component Libraries**
- **Radix UI** - Unstyled, accessible component primitives (20+ components)
- **Lucide React** - Icon library for consistent iconography
- **Embla Carousel** - Touch-friendly carousel component
- **cmdk** - Command menu interface component

**Development Tools**
- **Drizzle Kit** - Database migration and schema management
- **esbuild** - Fast bundler for server-side code in production
- **date-fns** - Date formatting and manipulation with i18n support (Traditional Chinese locale)

**Styling & Design**
- **Tailwind CSS** with custom configuration
- **PostCSS** with Autoprefixer
- **class-variance-authority** - Type-safe variant styling
- **tailwind-merge** & **clsx** - Conditional class merging utilities

**Form Management**
- **React Hook Form** - Performant form validation
- **@hookform/resolvers** - Zod resolver integration

**Type Safety**
- Shared schema definitions between client and server
- Path aliases for clean imports: `@/`, `@shared/`, `@assets/`
- Strict TypeScript configuration with ESNext modules