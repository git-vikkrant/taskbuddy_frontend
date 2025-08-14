# TaskBuddy - Personal Task Manager

TaskBuddy is a simple full-stack task management application with user authentication, built using **React (Vite)**, **Node.js (Express)**, and **PostgreSQL**.

## 🚀 Features

### Frontend (React + Context API + Plain CSS)

- User Login & Signup
- Dashboard showing user's tasks
- Add, edit, and delete tasks
- Mark tasks as complete or pending
- Filter by status/category
- Responsive design with plain CSS

### Backend (Node.js + Express)

- **Auth API**: Signup/Login with JWT token-based authentication
- **Task API**: CRUD operations for tasks
- Middleware to protect routes (JWT verification)
- PostgreSQL database integration

### Database (PostgreSQL)

- `users` table: stores user info with hashed passwords
- `tasks` table: stores user tasks with title, description, category, status

## 🛠 Tech Stack

- **Frontend**: React (Vite), Context API, React Router, Axios, Plain CSS
- **Backend**: Node.js, Express, JWT, Bcrypt, CORS
- **Database**: PostgreSQL (Neon/Supabase/Render)
- **Deployment**: Frontend on Vercel, Backend on Render, DB on Neon

## 📂 Project Structure

### Backend

```
taskbuddy_backend/
  ├── server.js
  ├── db.js
  ├── routes/
  │   ├── auth.js
  │   └── tasks.js
  ├── middleware/
  │   └── authMiddleware.js
  ├── package.json
  └── .env
```

### Frontend

```
taskbuddy_frontend/
  ├── src/
  │   ├── App.jsx
  │   ├── main.jsx
  │   ├── App.css
  │   ├── pages/
  │   │   ├── Login.jsx
  │   │   ├── Signup.jsx
  │   │   └── Dashboard.jsx
  │   ├── components/
  │   │   ├── TaskForm.jsx
  │   │   └── TaskList.jsx
  │   ├── context/
  │   │   └── AuthContext.jsx
  │   └── services/
  │       └── api.js
```

## 🔑 API Endpoints

### Auth Routes

- `POST /auth/signup` → Create new user
- `POST /auth/login` → Login and return JWT token

### Task Routes (Protected)

- `GET /tasks` → Get all tasks for logged-in user
- `POST /tasks` → Add new task
- `PUT /tasks/:id` → Update task
- `DELETE /tasks/:id` → Delete task

## 🚀 Deployment

1. Deploy **backend** to Render (set environment variables: `DATABASE_URL`, `JWT_SECRET`, `PORT`)
2. Deploy **frontend** to Vercel (set `API baseURL` in `src/services/api.js` to backend URL)
3. Use **Neon** or **Supabase** for PostgreSQL hosting

## 📖 How to Run Locally

### Backend

```bash
cd taskbuddy_backend
npm install
npm run dev
```

### Frontend

```bash
cd taskbuddy_frontend
npm install
npm run dev
```

## 🧑‍💻 Author

Built by Vikrant Kashyap for interview demonstration.
