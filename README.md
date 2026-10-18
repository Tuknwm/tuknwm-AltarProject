# ALTAR — Demo Frontend

ALTAR (Attendance, Teaching Log, and Room Assignment) is a QR-based system for managing teaching assistant attendance, teaching logs, and substitute class submissions at Universitas Tarumanagara.

> **This is a demo/prototype build.** No real backend is connected. All data is hardcoded and no information is stored or sent anywhere.

## Features

- **QR-based Check-in / Check-out** — Teaching assistants scan a QR code to record attendance
- **Teaching Schedule** — View weekly teaching sessions per semester
- **Substitute Class Submission** — Submit and track substitute session requests
- **Online Attendance** — Mark attendance for online sessions
- **Coordinator Dashboard** — Manage users, schedules, semesters, and attendance records
- **Dual Role** — A single demo account has access to both Teaching Assistant and Coordinator views

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Click **Sign In** → **Click Here** to enter the demo — no credentials needed.

## Demo Account

| Field | Value |
|---|---|
| Role | Teaching Assistant + Coordinator |
| Login | One click — no email or password required |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── asdos/              # Teaching assistant pages
│   ├── koordinator/        # Coordinator pages
│   ├── auth/               # Login & reset password UI
│   └── dashboard/          # Role selection dashboard
├── components/             # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/
│   ├── api/client.ts       # Dummy API client (all hardcoded, no real HTTP)
│   ├── actions/            # Server actions (all return dummy data)
│   └── constants/          # Shared constants
├── store/                  # Zustand state stores
└── types/                  # TypeScript types
```

## Tech Stack

- **Next.js 15** — App Router, Server Actions
- **React 19** — UI
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Styling
- **Zustand** — State management

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint
```
