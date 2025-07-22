# replit.md

## Overview

This is a full-stack web application for Alta Trade Ltd., an international trade and supply chain management company. The application is built as a modern React SPA with an Express.js backend, featuring a multilingual (English/Ukrainian) corporate website with contact forms and quote request functionality.

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React SPA with TypeScript, using Vite for build tooling
- **Backend**: Express.js REST API with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage currently)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Internationalization**: i18next for English/Ukrainian translations
- **Email**: Nodemailer for contact form notifications

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui (Radix UI primitives with Tailwind styling)
- **Forms**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with custom navy blue theme
- **Build Tool**: Vite with hot reload support

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Style**: RESTful endpoints under `/api` prefix
- **Storage**: Currently using in-memory storage with interface for easy database migration
- **Email Service**: Nodemailer with SMTP configuration
- **Development**: Hot reload with tsx

### Database Schema
Three main entities defined with Drizzle:
- **users**: Basic user authentication (id, username, password)
- **contactInquiries**: Contact form submissions (name, email, subject, message, timestamp)
- **quoteRequests**: Quote request forms (name, email, company, phone, service, message, timestamp)

### UI/UX Design
- **Theme**: Professional navy blue color scheme
- **Layout**: Responsive design with sticky header and footer
- **Components**: Comprehensive shadcn/ui component library
- **Navigation**: Multi-page SPA with clean routing
- **Forms**: Validated contact and quote request forms with toast notifications

## Data Flow

1. **Page Loading**: React app loads with Vite dev server or static files
2. **Form Submissions**: 
   - Client validates forms with Zod schemas
   - POST requests to `/api/contact` or `/api/quote` endpoints
   - Server validates, stores in memory, and sends email notifications
   - Success/error feedback via toast notifications

3. **Internationalization**: 
   - Language switcher updates i18next context
   - All text content updates reactively
   - URL structure remains the same across languages

## External Dependencies

### Production Dependencies
- **UI Framework**: React, Wouter, TanStack React Query
- **UI Components**: Radix UI primitives, Lucide icons
- **Forms**: React Hook Form, Zod validation
- **Styling**: Tailwind CSS, class-variance-authority
- **Backend**: Express.js, Drizzle ORM
- **Database**: @neondatabase/serverless (Neon PostgreSQL)
- **Email**: Nodemailer
- **Utilities**: date-fns, clsx

### Development Dependencies
- **Build**: Vite, esbuild, TypeScript
- **Replit Integration**: Custom Vite plugins for Replit environment

## Deployment Strategy

The application is configured for multiple deployment scenarios:

### Development
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx for TypeScript execution with auto-reload
- **Database**: In-memory storage for development

### Production
- **Build Process**: 
  - Frontend: Vite builds to `dist/public`
  - Backend: esbuild bundles server to `dist/index.js`
- **Serving**: Express serves both API and static files
- **Database**: Ready for PostgreSQL connection via DATABASE_URL
- **Email**: SMTP configuration via environment variables

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `SMTP_HOST`: Email server host
- `SMTP_PORT`: Email server port  
- `SMTP_USER`: Email authentication user
- `SMTP_PASS`: Email authentication password

The architecture supports easy migration from in-memory storage to PostgreSQL by simply providing a DATABASE_URL and running database migrations with `npm run db:push`.

## Recent Updates (January 2025)

### Business Information Updates
- Updated company copyright year to 2025 across all content
- Added annual turnover information: $200 million CAD in both English and Ukrainian translations
- Updated Trade Volume from $2M+ to $200M+ on Home and About pages
- Updated all legal document dates from December 2024 to January 2025
- Added company logo (blue globe with AltaTradeLtd. text) to header and footer
- Logo displays in blue in header, white (inverted) in dark footer
- **Updated company address from Kelowna to Vancouver**: Changed from "302 – 540 Lawrence Avenue, Kelowna, BC, Canada" to "Burrard Building, 1111 - 1030 West Georgia, Vancouver, BC, V6E-2Y3, Canada" across all pages (Contact, Terms of Service, Cookie Policy, README)
- **Created Vehicles catalog page**: Added comprehensive automotive section with Cars/Vans and Car Parts categories, full bilingual support
- **Made Automotive industry card interactive**: Added hover effects and navigation to /vehicles page on Industries page
- **Project cleanup**: Removed all temporary deployment guides and export files to keep project clean and focused on core functionality

### Previous Updates

### Homepage Improvements
- Updated company description with Ukrainian text provided by client
- Enhanced hero section with glass-effect styling for subtitle
- Added specialized product categories (Agricultural, Electronics, Vehicles)
- Emphasized B2B-only operations and banking system compliance

### Navigation Improvements  
- Fixed text wrapping in header navigation buttons
- Added whitespace-nowrap to prevent layout issues
- Improved responsive spacing and alignment
- Enhanced language switcher visual design