# Rise Field Execution - Administrative Platform

## Overview

Rise Field Execution is a modern React 18 web application designed as a comprehensive administrative platform focusing on retail field operations and activity management. The application serves as a "command center" for retail operations management, specifically targeting the "Gestor de Field" (Field Manager) persona working with retail stores, campaigns, and field executions.

The project is built using a full-stack architecture with a React frontend using TypeScript, Express.js backend, and PostgreSQL database with Drizzle ORM for data management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express session with PostgreSQL store
- **Development**: Hot reload with tsx

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via DATABASE_URL)
- **Schema**: Centralized in `shared/schema.ts` for type sharing
- **Migrations**: Managed through Drizzle Kit

## Key Components

### Layout System
- **AdminLayout**: Main layout wrapper providing consistent structure
- **Sidebar**: Collapsible navigation with route-based active states
- **Header**: Top navigation with user info and notifications
- **Breadcrumb**: Navigation trail for page hierarchy

### Page Structure
- **Dashboard**: Overview page with retail metrics and field activity statistics
- **Atividades**: Retail activity management with table view and creation modal for store operations
- **Cadastros**: Master data management for stores, PDVs, promoters and materials
- **Reports**: Analytics and reporting for store performance and campaign ROI
- **Settings**: User profile and system configuration

### UI Components
- **StatsCard**: Displays key metrics with icon variants
- **StatusChip**: Color-coded status indicators
- **ProjectsTable**: Data table with sorting and actions
- **NewProjectModal**: Form modal for project creation

### Design System
- **Color Palette**: 
  - Primary: `hsl(219, 87%, 21%)` (dark blue)
  - Accent: `hsl(38, 95%, 56%)` (vibrant orange)
  - Success: `hsl(142, 76%, 36%)` (green)
  - Error: `hsl(350, 72%, 49%)` (red)
- **Typography**: Custom CSS variables with consistent sizing
- **Spacing**: CSS variables for layout dimensions (sidebar width, header height)

## Data Flow

### Client-Side Data Management
1. **Query Client**: TanStack React Query manages server state with infinite stale time
2. **API Layer**: Centralized HTTP client with error handling and type safety
3. **Mock Data**: Static data for development and prototyping (projects, stats, clients)
4. **Form State**: React Hook Form handles form validation and submission

### Server-Side Data Flow
1. **Request Processing**: Express middleware handles JSON parsing and logging
2. **Route Registration**: Modular route system with API prefix (`/api`)
3. **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
4. **Error Handling**: Centralized error middleware with status code mapping

### Database Operations
1. **Schema Definition**: Shared TypeScript types between client and server
2. **Query Building**: Drizzle ORM provides type-safe query construction
3. **Migration Management**: Version-controlled schema changes
4. **Connection Management**: Database connection pooling via environment configuration

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **@radix-ui/***: Accessible UI component primitives

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

### Third-Party Services
- **Replit Infrastructure**: Hosting and deployment platform
- **PostgreSQL**: Database service (configurable provider)
- **Session Store**: PostgreSQL-backed session management

## Deployment Strategy

### Development Environment
- **Development Server**: Vite dev server with hot module replacement
- **Backend Process**: tsx for TypeScript execution with file watching
- **Database**: Local PostgreSQL instance or cloud provider
- **Port Configuration**: Frontend (Vite) and backend (Express) on different ports

### Production Deployment
- **Build Process**: 
  1. Vite builds frontend assets to `dist/public`
  2. ESBuild bundles server code to `dist/index.js`
- **Static File Serving**: Express serves built frontend assets
- **Environment Variables**: Database URL and other config via environment
- **Process Management**: Single Node.js process serving both frontend and API

### Replit Configuration
- **Modules**: Node.js 20, web development, PostgreSQL 16
- **Run Command**: `npm run dev` for development
- **Build Command**: `npm run build` for production
- **Start Command**: `npm run start` for production server
- **Port Mapping**: Internal port 5000 mapped to external port 80

## Changelog

- June 17, 2025. Initial setup
- June 17, 2025. Content adapted for retail operations - Updated mock data, terminology, and page content to focus on retail field activities, store management, and campaign execution

## User Preferences

Preferred communication style: Simple, everyday language.