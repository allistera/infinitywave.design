# Infinity Wave Design

A modern, elegant portfolio website for Infinity Wave Design, a Scottish architecture, structural engineering, and project management firm.

## Features

- Full-height hero slideshow showcasing featured projects
- Responsive project gallery with filtering by type
- Individual project detail pages
- About page detailing company history and services
- Contact form for inquiries
- Glass morphism header with transparent backdrop effect
- Mobile-responsive design

## Tech Stack

- React 19
- Vite
- React Router DOM
- CSS3 with custom properties

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Add your Sentry DSN (get it from [sentry.io](https://sentry.io)):

```
VITE_SENTRY_DSN=your_sentry_dsn_here
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

To run on a specific port (e.g., 5174):

```bash
npm run dev -- --port 5174
```

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured for deployment on Vercel.

### Deploy with Vercel

**Option 1: Via Vercel Dashboard**
1. Visit [vercel.com](https://vercel.com)
2. Import your Git repository
3. Add environment variables in Project Settings:
   - `VITE_SENTRY_DSN`
   - `SENTRY_PROJECT`
   - `SENTRY_AUTH_TOKEN`
   - `SENTRY_ORG`
4. Vercel will auto-detect the Vite configuration
5. Click Deploy

**Option 2: Via Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel
```

## Project Structure

```
src/
├── components/     # Reusable components (Header, Footer, FilterBar, etc.)
├── pages/         # Page components (ProjectsPage, AboutPage, ContactPage)
├── data/          # Project data
├── App.jsx        # Main app component with routing
└── main.jsx       # Application entry point
```

## Features Detail

### Hero Slideshow
- Automatically cycles through 3 featured projects
- 5-second intervals with smooth fade transitions
- Manual navigation via indicator dots
- Full viewport height with overlay gradient

### Project Filtering
- Filter projects by type (Residential, Commercial, Interior Design)
- Dynamic filtering without page reload

### Glass Morphism Header
- Transparent backdrop with blur effect
- Fixed positioning for consistent navigation
- Responsive design for mobile devices

## License

This project is private and proprietary.
