# 📈 MERN Stock Trading Application

A Full Stack MERN Stock Trading Web Application built using **MongoDB, Express.js, React.js, and Node.js**.

The application allows users to create an account, manage a portfolio, trade stocks, maintain wallet transactions, and includes a complete Admin Dashboard for managing users, stocks, and orders.

---

# Features

### User Features
- User Registration & Login (JWT Authentication)
- Secure Profile Management
- Buy and Sell Stocks
- Portfolio Management
- Transaction History
- Wallet Management
- Stock Search
- Live Simulated Stock Price Updates
- Interactive Stock Charts
- Trending Stocks Section
- Responsive User Interface

### Admin Features
- Admin Login
- Manage Users
- Manage Stocks
- Manage Orders
- Dashboard Analytics
- Add / Edit / Delete Stocks

---

# Tech Stack

### Frontend
- React.js
- Vite
- Axios
- React Router
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

---

# Folder Structure

```
StockTradingApp
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── postman
│
└── README.md
```

---

# Installation Guide

## Step 1

Clone the repository

```bash
git clone https://github.com/shannu-122299/StockTradingApp.git
```

---

## Step 2

Open the project

```bash
cd StockTradingApp
```

---

## Step 3

Install Backend Dependencies

```bash
cd server
npm install
```

---

## Step 4

Install Frontend Dependencies

Open another terminal

```bash
cd client
npm install
```

---

## Step 5

Configure Environment Variables

Inside the **server** folder create a file named:

```
.env
```

Copy the following:

```
MONGO_URI=Your_MongoDB_Connection_String
JWT_SECRET=Your_JWT_Secret
PORT=5000
```

> A sample file (`.env.example`) is already included in this repository.

---

## Step 6

Start Backend Server

From the server folder

```bash
npm start
```

or

```bash
node server.js
```

Backend runs at

```
http://localhost:5000
```

---

## Step 7

Start Frontend

Open another terminal

```bash
cd client
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

## Step 8

Open the application

Visit

```
http://localhost:5173
```

in your browser.

---

# Demo Credentials

Create a new account using the Register page.

Or use your own MongoDB database records if available.

---

# API Testing

The repository contains a Postman Collection inside the **postman** folder.

Import the collection into Postman to test all backend APIs.

---

# Important Note for Reviewers

This project is a local MERN application.

To access the website, **both the backend server and frontend development server must be running**.

Please ensure that:

1. MongoDB is running or a valid MongoDB Atlas connection string is provided.
2. Backend server is started (`npm start` inside the server folder).
3. Frontend server is started (`npm run dev` inside the client folder).
4. Open `http://localhost:5173` in your browser.

---

# Future Improvements

- Real-time stock market API integration
- Live WebSocket updates
- Candlestick chart improvements
- Payment Gateway Integration
- Cloud Deployment (Render / Vercel)
- Docker Support

---

# Author

**Shanmukha Krishna**

GitHub:
https://github.com/shannu-122299
