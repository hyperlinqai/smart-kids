# BrightMinds Academy Landing Page

## Overview

This is a modern full-stack web application for BrightMinds Academy, an educational institution for children ages 5-15. The application serves as a marketing landing page featuring personalized learning programs, STEM excellence, creative arts, and small class sizes. The system includes a contact form for lead generation and inquiry management, built with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and optimized builds
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system including brand colors (primary orange, secondary blue, accent green)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints following conventional HTTP methods
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema generation
- **Development Storage**: In-memory storage implementation for development/testing
- **Tables**: Users table for basic auth, contact_submissions table for lead capture

### Authentication and Authorization
- **Current State**: Basic user schema in place but no active authentication implemented
- **Prepared Infrastructure**: User table with username/password fields ready for future auth implementation

### External Dependencies

#### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

#### UI and Styling Dependencies
- **@radix-ui/***: Comprehensive collection of accessible UI primitives (accordion, dialog, form controls, etc.)
- **tailwindcss**: Utility-first CSS framework with custom design tokens
- **class-variance-authority**: Utility for creating component variants
- **clsx**: Conditional CSS class utility

#### Form and Validation Dependencies
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: Runtime type validation and schema generation

#### Development Dependencies
- **@replit/vite-plugin-***: Replit-specific development tools for enhanced developer experience
- **tsx**: TypeScript execution for development server

#### Asset Management
- Images stored in `attached_assets/` directory with responsive loading
- Font integration through Google Fonts (Inter for headings, system fonts as fallbacks)