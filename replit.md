# STEM Kids Workshop - Replit Setup

## Overview
This is a Next.js 15 application for a STEM Kids Workshop landing page. The project provides information about hands-on STEM learning activities for children aged 5-10 in Dubai.

## Current State
- ✅ Next.js application successfully running on port 5000
- ✅ All dependencies installed and LSP errors resolved
- ✅ Configured for Replit environment with proper host settings
- ✅ Responsive design with Tailwind CSS and Radix UI components
- ⚠️ Email functionality requires Resend API key setup

## Project Architecture
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom theme
- **Components**: Radix UI components with custom styling
- **Forms**: React Hook Form with Zod validation
- **Email**: Resend API integration for lead capture
- **Deployment**: Configured for Replit autoscale deployment

## Key Features
1. **Landing Page**: Hero section, activities overview, approach, testimonials, FAQ
2. **Contact Form**: Lead capture with validation and email notification
3. **WhatsApp Integration**: Direct booking via WhatsApp
4. **Responsive Design**: Mobile-first responsive layout
5. **SEO Optimized**: Meta tags, structured data, and accessibility features

## Recent Changes (September 20, 2025)
- Imported GitHub repository and set up for Replit environment
- Fixed Next.js configuration for cross-origin requests
- Added cache control headers for development
- Configured workflow to run on port 5000 with proper hostname
- Installed all dependencies and resolved TypeScript errors

## Configuration
- **Development**: `npm run dev` on port 5000 with 0.0.0.0 hostname
- **Build**: `npm run build` for production build
- **Port Configuration**: Frontend on port 5000 (required for Replit)
- **Host Configuration**: Allows all origins for Replit proxy compatibility

## Environment Variables Needed
- `RESEND_API_KEY`: API key for Resend email service
- `LEADS_TO_EMAIL`: Destination email for lead notifications (defaults to shoaib.narmadatech@gmail.com)

## User Preferences
- Frontend-only application focused on user experience
- Clean, professional design with educational focus
- Mobile-responsive with accessibility considerations
- Fast loading and SEO optimized