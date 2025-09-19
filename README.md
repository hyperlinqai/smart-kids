# STEM Kids Workshop

A modern Next.js frontend application for a STEM kids workshop. This project features a responsive landing page with contact form functionality, built using modern web technologies and best practices.

## Features

- **Next.js Frontend**: Built with Next.js 15, React 18, and TypeScript
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Client-side Contact Form**: Email integration for form submissions
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized images and fonts with Next.js built-in optimizations

## Tech Stack

- Next.js 15 with App Router
- React 18 with TypeScript
- Tailwind CSS for styling
- Shadcn/ui + Radix UI for components
- React Hook Form + Zod for forms
- Framer Motion for animations
- Lucide React for icons

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd HomeNest
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Type check with TypeScript

## Project Structure

```
HomeNest/
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Layout components (header, footer)
│   │   ├── sections/       # Page sections (hero, features, etc.)
│   │   └── ui/             # Shadcn/ui components
│   ├── lib/                # Utility functions and schemas
│   ├── hooks/              # Custom React hooks
│   └── pages/              # Page components
├── public/                 # Static assets
└── package.json
```

## Contact Form

The contact form uses a client-side approach that opens the user's default email client with pre-filled information. This eliminates the need for a backend while still providing a functional contact mechanism.
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schemas
└── package.json
```

## API Endpoints

- `POST /api/contact` - Submit contact form

## Database Schema

The application uses PostgreSQL with the following tables:
- `users` - User accounts (prepared for future authentication)
- `contact_submissions` - Contact form submissions

## Deployment

1. Build the application:
```bash
npm run build
```

2. Set production environment variables
3. Start the production server:
```bash
npm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
