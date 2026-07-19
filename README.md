# 📈 MERN Stock Trading Application (SB Stocks)

A Full Stack **MERN Stock Trading Web Application** built using **MongoDB, Express.js, React.js, Node.js, and Vite**.

The application provides a simulated stock trading environment where users can create an account, explore stocks, buy and sell stocks using virtual funds, manage their portfolio and wallet, and track order history.

It also includes an **Admin Dashboard** for managing users, stocks, orders, and transactions.

---

## 🎥 Demo Video

https://drive.google.com/file/d/193HcsOneaIhohPEYX2NkoRUw9KtdvVKV/view?usp=sharing

---

## ✨ Features

### User Features

- User Registration & Login (JWT Authentication)
- Secure Profile Management
- Stock Search & Watchlist
- Trending Stocks
- Simulated Buy & Sell Stocks
- Portfolio Management
- Order History
- Wallet Management
- Wallet Transaction History
- Simulated Stock Price Updates
- Interactive Stock Charts
- Responsive User Interface

### Admin Features

- Admin Dashboard
- Manage Users
- Manage Stocks
- Manage Orders
- View Transactions
- Dashboard Analytics
- Add / Edit / Delete Stocks

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- React Router
- CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs

### Database
- MongoDB
- Mongoose

---

## 📁 Project Structure

```text
StockTradingApp/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── postman/
│
└── README.md
```

---

## 🚀 How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/shannu-122299/StockTradingApp.git
cd StockTradingApp
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Configure Environment Variables

Inside the `server` folder, create a `.env` file:

```env
MONGO_URI=Your_MongoDB_Connection_String
JWT_SECRET=Your_JWT_Secret
PORT=5000
```

A sample `.env.example` file is included in the repository.

### 4. Start the Backend

```bash
npm start
```

The backend runs at:

```text
http://localhost:5000
```

### 5. Install and Start the Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

Open `http://localhost:5173` in your browser.

> Both the backend and frontend servers must be running for the application to work correctly.

---

## 👤 Demo Credentials

Create a new account using the **Register** page.

You can also use an existing account from your configured MongoDB database.

---

## 🧪 API Testing

A Postman Collection is included inside the `postman` folder.

Import the collection into **Postman** to test the backend APIs for:

- Authentication
- Profile Management
- Stock Operations
- Buy & Sell Operations
- Portfolio Management
- Orders
- Wallet Transactions
- Admin Operations

---

## ⚠️ Important Note

This project is a **stock trading simulation application** developed for educational purposes.

It does not execute real-money stock market transactions and is not currently deployed online.

To run the project successfully:

1. Install Node.js and MongoDB or use MongoDB Atlas.
2. Clone this repository.
3. Install the backend and frontend dependencies using `npm install`.
4. Create a `.env` file inside the `server` folder using the provided `.env.example` file.
5. Start the backend server.
6. Start the frontend development server.
7. Open `http://localhost:5173` in your browser.

Both the **backend server** and **frontend development server** must be running simultaneously for the complete application to work correctly.

A recorded demonstration of the working application is available through the **Demo Video Link** provided at the top of this README.

---

## 🔮 Future Improvements

- Real-Time Stock Market API Integration
- WebSocket-Based Live Stock Price Updates
- Advanced Candlestick Charts
- Cloud Deployment
- Docker Support

---
