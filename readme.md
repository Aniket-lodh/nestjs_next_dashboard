# Dashboard Application

This project is a full-stack dashboard built with:

- **Backend**: [NestJS](https://nestjs.com/)
- **Frontend**: [Next.js 14+](https://nextjs.org/) with TypeScript and Material UI

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Aniket-lodh/nestjs_next_dashboard
cd nestjs-next-dashboard
```

### 2. Install dependencies

For the backend:

```bash
cd backend
npm install
```

For the frontend:

```bash
cd frontend
npm install
```

## Environment Variables

Both frontend and backend require environment variables. Copy `.env.example` to `.env` and update.

Frontend:

```bash
NEXT_PUBLIC_API_URL= http://localhost:3001/api #  for local dev
```

or

```bash
NEXT_PUBLIC_API_URL= https://nestjs-next-dashboard.onrender.com/api # if you want to use prod backend without running local backend server
```

Backend:

```bash
PORT= 3000
SWAGGER_PATH= api/docs
```

## 🚀 Running the Project

### Backend (NestJS)

```bash
cd backend
npm run start:dev
```

Backend will run on: http://localhost:3001

### Frontend (NextJS)

```bash
cd frontend
npm run dev
```

Backend will run on: http://localhost:3000

## Live Demo
- Backend: https://nestjs-next-dashboard-1.onrender.com/
- Frontend: https://nestjs-next-dashboard.vercel.app/
