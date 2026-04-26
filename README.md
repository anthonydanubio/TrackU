# TrackU - Student Productivity Dashboard

A full-stack web application designed to help students stay organized, track assignments, manage internships, and collaborate with peers. Built with React, Express, and PostgreSQL.

## Overview

TrackU is a student productivity dashboard that combines assignment tracking, calendar integration, study planning, internship management, and community features into one unified platform.

**Deployed at:** https://replit.com/@bucket8head/Student-Compass

## Tech Stack

### Frontend
- **React 19** with Vite
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Framer Motion** for animations
- **TanStack Query** for data fetching and caching

### Backend
- **Node.js** with Express 5
- **Drizzle ORM** for database management
- **PostgreSQL** for data persistence
- **bcrypt** for password hashing
- **Cookie-based authentication**

### Language & Tooling
- **TypeScript** throughout the entire codebase
- **pnpm** for monorepo package management
- **OpenAPI/Zod** for API spec and validation

## Project Structure

```
artifacts/
├── tracku/                 # React web app (student-facing dashboard)
│   └── src/
│       ├── App.tsx         # Main app with routing & providers
│       ├── pages/          # Page components
│       └── components/     # Reusable UI components
├── api-server/             # Express backend API
│   └── src/
│       ├── app.ts          # Server setup
│       └── routes/         # API route handlers
└── mockup-sandbox/         # UI component prototyping environment

lib/
├── db/                     # Database schema (Drizzle ORM)
├── api-spec/              # OpenAPI specification
├── api-zod/               # Auto-generated Zod validators
└── api-client-react/      # Auto-generated React Query hooks
```

## Features

### Core Features
- 📋 **Assignments**: Track, prioritize, and manage assignments from multiple sources
- 📅 **Calendar Integration**: Import calendars from Canvas/Blackboard LMS
- 🎓 **Onboarding**: School selection with grouped suggestions and filtering
- 📚 **Study Tools**: Dedicated study planning and resource management
- 💼 **Internships**: Track internship opportunities and applications
- 📖 **Reading**: Manage reading assignments and materials
- 🎉 **Events**: Keep track of campus and course events
- 👥 **Community**: Connect with other students
- ⚙️ **Settings**: Customize preferences and integrations
- 📊 **Performance**: Track productivity metrics and streaks

### Recent Enhancements (April 2026)
- Blackboard LMS calendar feed import support
- Improved school selection with grouped suggestions
- Enhanced LMS integration labels
- Student count display on community page
- Clickable logos on sign-in and sign-up pages

## Database Schema

### Users Table
```typescript
- id (primary key)
- email (unique)
- passwordHash
- name
- schoolName
- schoolType
- semesterName
- canvasIcsUrl
- onboardingCompleted
- trackingPreferences
- subscriptionPlan
- streakResetMode
- timestamps
```

### Assignments Table
```typescript
- id (primary key)
- userId (foreign key)
- courseId (foreign key)
- title
- dueDate
- completed
- priority
- source (manual, canvas, blackboard, etc.)
- notes
- dismissed
- timestamps
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Run database migrations
pnpm db:migrate

# Start development servers
pnpm dev
```

## Development

### Frontend Development
```bash
cd artifacts/tracku
pnpm dev
```

### Backend Development
```bash
cd artifacts/api-server
pnpm dev
```

### Database
```bash
# Generate migrations
pnpm db:generate

# Run migrations
pnpm db:migrate

# View database UI
pnpm db:studio
```

## API Routes

Available API endpoints include:
- `/api/auth` - User authentication (register, login, logout, profile)
- `/api/assignments` - Assignment management
- `/api/courses` - Course data
- `/api/calendar` - Calendar integration (Canvas, Blackboard)
- `/api/events` - Event management
- `/api/internships` - Internship tracking
- `/api/study` - Study resources
- `/api/reading` - Reading materials
- `/api/community` - Community features
- `/api/performance` - Productivity metrics
- `/api/onboarding` - User onboarding flow

## Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## License

This project is open source and available under the MIT License.

## Support

For issues and feature requests, please visit our GitHub Issues page.

---

Built with ❤️ for students, by students.
