# E-Commerce Platform (React + Node + MongoDB)

**Short pitch:** A full-stack e-commerce demo with user authentication, product catalog, cart, and admin panel.

## Tech stack
- Frontend: React, Redux (or Context), React Router, Tailwind/CSS
- Backend: Node.js, Express
- Database: MongoDB Atlas
- Auth: JWT / Passport
- CI / Deploy: GitHub Actions → Vercel / Heroku / GitHub Pages (frontend)

## Features
- User auth (sign up, login, JWT)
- Product catalog & search
- Cart & checkout (mock)
- Admin interface for product management
- Unit tests for key components
- Performance and bundle size notes

## Getting started (developer)
```bash
# clone
git clone https://github.com/yashasvi9199/ecommerce-react.git
cd ecommerce-react

# install
cd frontend && npm install
cd ../backend && npm install

# run locally
# (run backend on :5000 and frontend on :3000)
