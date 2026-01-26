# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Schedule Event is a React-based 3-step wizard demo for scheduling appointments. Users select a date, time, and enter contact information. Built to explore React hooks and component-based architecture.

**Live Demo:** https://zolmok.github.io/schedule-event/

## Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm start

# Run tests (interactive watch mode)
npm test

# Run tests with coverage
npm run test:coverage

# Build for production
npm run build

# Lint code
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### State Management
- Redux Toolkit with React-Redux for global state
- Two actions: `UPDATE_DATE` and `UPDATE_TIME` in `src/actions/date-scheduled.js`
- Single reducer: `dateScheduledReducer` in `src/reducers/date-scheduled.js`

### Component Pattern
Components export both connected and presentational versions for testability:
- `ComponentName` - Redux-connected version
- `ComponentNameDom` - Presentational (props-only) version for testing

### Key Components
- `schedule-wizard/` - Main orchestrator managing the 3-step flow
- `every-day-calendar/` - Date picker using react-day-picker
- `time-picker/` - 24-hour time selection (30-min intervals)
- `contact-form/` - User contact information (Step 2)
- `date-scheduled/` - Left panel showing selected date/time
- `demo-complete/` - Confirmation screen (Step 3)

### Utilities
- `class-names.js` - Custom utility for dynamic CSS class management using Set

## Testing

- Jest + React Testing Library for DOM testing
- Redux-Mock-Store for Redux testing
- Test files are co-located with components (`*.test.js`)

## Code Style

- Prettier with single quotes, 2-space indentation, semicolons
- ESLint with react-app configuration
- EditorConfig for consistent editor settings
