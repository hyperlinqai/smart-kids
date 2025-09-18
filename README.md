# HomeNest

A modern full-stack web application built with React, TypeScript, and Express. This project features a responsive landing page with contact form functionality, built using modern web technologies and best practices.

## Features

- **Modern React Frontend**: Built with React 18, TypeScript, and Vite for fast development
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Express Backend**: RESTful API with TypeScript
- **Database Integration**: PostgreSQL with Drizzle ORM
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn/ui + Radix UI for components
- React Hook Form + Zod for forms
- TanStack Query for data fetching
- Wouter for routing
- Framer Motion for animations

### Backend
- Node.js with Express
- TypeScript with ES modules
- PostgreSQL database
- Drizzle ORM for database operations
- Express Session for session management

## Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

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

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
DATABASE_URL=your_postgresql_connection_string
PORT=5000
```

4. Set up the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## Project Structure

```
HomeNest/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── main.tsx        # Application entry point
│   └── index.html
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   └── vite.ts            # Vite integration
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
