# Changelog

All notable changes to TrackU will be documented in this file.

## [1.0.0] - 2026-04-26

### Initial Release

#### Added
- **Core Dashboard Features**
  - Student productivity dashboard with assignment tracking
  - User authentication (register, login, logout)
  - Onboarding flow with school selection
  - Dashboard with overview of assignments and events
  - Settings page for user preferences

- **Assignment Management**
  - Create, read, update, and delete assignments
  - Assign priority levels to assignments
  - Mark assignments as completed
  - Track assignment source (manual, Canvas, Blackboard, etc.)
  - Notes and description support

- **Calendar Integration (Canvas)**
  - Import calendar feeds from Canvas LMS
  - Automatic course and assignment synchronization
  - Calendar ICS URL support

- **LMS Integration (Blackboard)**
  - Support for importing calendar feeds from Blackboard LMS
  - Updated LMS integration labels from "Canvas" to "Calendar"
  - Blackboard ICS URL configuration in user settings

- **School Selection & Onboarding**
  - Grouped school suggestions
  - Enhanced filtering for school selection
  - Improved search functionality

- **Community Features**
  - Community page for student collaboration
  - Clickable logo links from sign-in and sign-up pages to homepage

- **Additional Features**
  - Events management and tracking
  - Internship opportunity tracking
  - Reading materials management
  - Study resource organization
  - Performance and productivity metrics
  - User preference tracking
  - Multi-workspace support

#### Backend
- Express.js API server with TypeScript
- PostgreSQL database with Drizzle ORM
- Cookie-based authentication with bcrypt
- CORS enabled for frontend communication
- Structured logging with Pino

#### Frontend
- React 19 with Vite
- Tailwind CSS for styling
- Radix UI components for accessibility
- Framer Motion for smooth animations
- TanStack Query for data management
- Wouter for client-side routing

#### Infrastructure
- Monorepo structure with pnpm
- TypeScript throughout
- Shared libraries for database schema and API specs
- OpenAPI specification for API documentation

### Recent Improvements
- Student count display on community page with animation
- Clickable logos on authentication pages
- Improved LMS integration UX with consistent labeling
- Better school selection with grouped suggestions

---

For more information, visit: https://github.com/anthonydanubio/TrackU
