# DOT FE TEST

## Functional Requirements
- as a user I can login
- as a user I can answer one question at a time & auto-redirected next.
- as a user I can see a countdown timer while doing the quiz (ends the quiz when time is up).
- as a user I can view total number of questions, how many I answered, and my score at the end.
- as a user I can resume my quiz from where it closed

## Non-Functional Requirements
- the quiz states (answers, quiz progress, & time left) should be reliably saved to localStorage.
- the app must be deployed (with vercel)
- the app must work properly both on mobile/desktop
- the codebase should be modular with reusable logic and components.

## Tools

- **nextjs:** main framework for routing and building API endpoints in one project.
- **typescript:** adds static typing for safer, more maintainable code.
- **tailwindcss:** utility-first CSS framework for fast and consistent UI development.<!-- - **shadcn:** customizable UI components. -->
- **zustand:** lightweight, robust & simple global state management.
- **react-query:** efficient data fetching from APIs.
- **supabase:** open-source backend as a service for authentication and database.

## Todos

- [x] **authentication**
  - [x] slice login page
  - [x] login implementation (using supabase / server action)
- [x] **quiz**
  - [x] slice quiz page (result, starting, questions)
  - [x] fetch questions from OpenTDB API
  - [x] show total questions & current progress
  - [x] show timer
  - [x] display one question per page & Auto-next on answer selection
  - [x] auto-submit when timer ends
  - [x] show result summary (correct, incorrect, attempted)
  - [x] save quiz progress in localStorage (using zustand/persist)