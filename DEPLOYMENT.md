# HomeNest Deployment Guide

This guide covers various deployment options for the HomeNest application.

## Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Environment variables configured

## Environment Variables

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL=postgresql://username:password@host:port/database

# Server
PORT=5000
NODE_ENV=production

# Session (optional - for future auth features)
SESSION_SECRET=your-secure-session-secret
```

## Build for Production

1. Install dependencies:
```bash
npm install
```

2. Build the application:
```bash
npm run build
```

This creates:
- `dist/public/` - Frontend build files
- `dist/index.js` - Backend server bundle

## Deployment Options

### 1. Traditional VPS/Server

**Requirements:**
- Ubuntu/CentOS server
- Node.js 18+
- PostgreSQL
- PM2 (recommended)

**Steps:**

1. Upload your project files to the server
2. Install dependencies and build:
```bash
npm install
npm run build
```

3. Set up database:
```bash
npm run db:push
```

4. Install PM2 globally:
```bash
npm install -g pm2
```

5. Create PM2 ecosystem file (`ecosystem.config.js`):
```javascript
module.exports = {
  apps: [{
    name: 'homenest',
    script: 'dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    }
  }]
}
```

6. Start with PM2:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 2. Vercel

**Steps:**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Create `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "client/**/*",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/public"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/public/$1"
    }
  ]
}
```

3. Deploy:
```bash
vercel --prod
```

### 3. Railway

**Steps:**

1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Railway will automatically detect and deploy your Node.js app

### 4. Heroku

**Steps:**

1. Install Heroku CLI
2. Create `Procfile`:
```
web: npm run start
```

3. Deploy:
```bash
heroku create your-app-name
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

### 5. DigitalOcean App Platform

**Steps:**

1. Connect your GitHub repository
2. Configure build command: `npm run build`
3. Configure run command: `npm run start`
4. Add PostgreSQL database component
5. Set environment variables

### 6. Docker

**Create `Dockerfile`:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "start"]
```

**Create `docker-compose.yml`:**
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/homenest
      - NODE_ENV=production
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=homenest
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

**Deploy:**
```bash
docker-compose up -d
```

## Database Setup

For any deployment, ensure your PostgreSQL database is set up:

1. Create the database
2. Run migrations:
```bash
npm run db:push
```

## SSL/HTTPS

For production deployments, ensure you have SSL certificates configured. Most cloud platforms provide this automatically.

## Monitoring

Consider setting up monitoring with:
- PM2 monitoring (for VPS deployments)
- Application performance monitoring (APM) tools
- Log aggregation services

## Backup Strategy

Set up regular database backups:
- Automated PostgreSQL backups
- File system backups for uploaded assets (if any)

## Performance Optimization

1. Enable gzip compression
2. Set up CDN for static assets
3. Configure database connection pooling
4. Implement caching strategies

## Security Checklist

- [ ] Environment variables secured
- [ ] Database credentials secured
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Rate limiting implemented (if needed)
- [ ] Input validation in place

## Troubleshooting

**Common Issues:**

1. **Build fails**: Check Node.js version compatibility
2. **Database connection fails**: Verify DATABASE_URL format
3. **Port issues**: Ensure PORT environment variable is set
4. **Static files not served**: Check build output directory

**Logs:**
- Check application logs for errors
- Monitor database connection logs
- Review web server logs (nginx/apache if applicable)
