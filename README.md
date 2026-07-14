# MERN Stock Trading Application

A Full Stack MERN Stock Trading Web Application built using **MongoDB, Express.js, React.js, Node.js, and Vite**.

The application allows users to create an account, manage a portfolio, buy and sell stocks, maintain wallet transactions, and includes an Admin Dashboard for managing users, stocks, and orders.

---

# Features

## User Features

- User Registration & Login (JWT Authentication)
- Secure Profile Management
- Buy and Sell Stocks
- Portfolio Management
- Wallet Management
- Transaction History
- Stock Search
- Live Simulated Stock Price Updates
- Interactive Stock Charts
- Trending Stocks Section
- Responsive User Interface

---

## Admin Features

- Admin Login
- Manage Users
- Manage Stocks
- Manage Orders
- Dashboard Analytics
- Add / Edit / Delete Stocks

---

# Tech Stack

## Frontend

- React.js
- Vite
- Axios
- React Router
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

---

# Project Structure

```
StockTradingApp
│
├── client
│   ├── public
│   ├── src
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── postman
│
└── README.md
```

---

# Prerequisites

Before running the project, install the following software:

- Node.js (v18 or later recommended)
- npm
- MongoDB Community Server **or** MongoDB Atlas
- Git
- Visual Studio Code (Recommended)
- Postman (Optional - for API testing)

### Recommended VS Code Extensions

- ESLint
- Prettier - Code Formatter
- DotENV
- Thunder Client (Optional)

---

# Installation Guide

## Step 1 - Clone the Repository

```bash
git clone https://github.com/shannu-122299/StockTradingApp.git
```

---

## Step 2 - Open the Project

```bash
cd StockTradingApp
```

---

## Step 3 - Install Backend Dependencies

```bash
cd server
npm install
```

---

## Step 4 - Install Frontend Dependencies

Open another terminal and run:

```bash
cd client
npm install
```

---

## Step 5 - Configure Environment Variables

Inside the **server** folder, create a file named:

```
.env
```

Copy the following:

```
MONGO_URI=Your_MongoDB_Connection_String
JWT_SECRET=Your_JWT_Secret
PORT=5000
```

A sample file (**.env.example**) is already included in this repository.

---

## Step 6 - Start Backend Server

Open a terminal inside the **server** folder and run:

```bash
cd server
npm run dev
```

If nodemon is unavailable, you can alternatively run:

```bash
cd server
npm start
```

Backend runs at:

```
http://localhost:5000
```

---

## Step 7 - Start Frontend

Open another terminal and run:

```bash
cd client
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Step 8 - Open the Application

Open your browser and visit:

```
http://localhost:5173
```

If both backend and frontend servers are running correctly, the application will load successfully.

---

# Demo Credentials

Create a new account using the **Register** page.

Or use your own MongoDB database records if available.

---

# API Testing

A Postman Collection is included inside the **postman** folder.

Import the collection into Postman to test the backend APIs.

Available APIs include:

- User Authentication
- Profile Management
- Skills
- Portfolio
- Orders
- Stocks
- Wallet Transactions

---

# Important Note for Reviewers

This project is a **local MERN Stack application** and is **not deployed online**.

To run the project successfully:

1. Install Node.js and MongoDB (or use MongoDB Atlas).
2. Clone this repository.
3. Install all dependencies using `npm install`.
4. Create a `.env` file inside the `server` folder using the provided `.env.example` file.
5. Start the backend server:

```bash
cd server
npm run dev
```

6. Open another terminal and start the frontend:

```bash
cd client
npm run dev
```

7. Open the following URL in your browser:

```
http://localhost:5173
```

Both the backend server and frontend development server must be running simultaneously for the application to work correctly.

---

# Future Improvements

- Real-time Stock Market API Integration
- Live WebSocket Updates
- Advanced Candlestick Charts
- Payment Gateway Integration
- Cloud Deployment (Render / Vercel)
- Docker Support

---

# Author

**Shanmukha Krishna**

GitHub: https://github.com/shannu-122299
