import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./pages/Profile";
import Portfolio from "./pages/Portfolio";
import History from "./pages/History";
import StockChart from "./pages/StockChart";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Transactions from "./pages/Transactions";
import Admin from "./pages/Admin";
import AdminStockChart from "./pages/AdminStockChart";
import AllOrders from "./pages/AllOrders";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route
  path="/home"
  element={
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/portfolio"
  element={
    <ProtectedRoute>
      <Portfolio />
    </ProtectedRoute>
  }
/>

<Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>

<Route
  path="/stock/:symbol"
  element={
    <ProtectedRoute>
      <StockChart />
    </ProtectedRoute>
  }
/>
     <Route
  path="/admin"
  element={
    <AdminRoute>
      <Admin />
    </AdminRoute>
  }
/>

<Route
  path="/users"
  element={
    <AdminRoute>
      <Users />
    </AdminRoute>
  }
/>

<Route
  path="/orders"
  element={
    <AdminRoute>
      <Orders />
    </AdminRoute>
  }
/>

<Route
  path="/transactions"
  element={
    <ProtectedRoute>
      <Transactions />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/chart"
  element={
    <AdminRoute>
      <AdminStockChart />
    </AdminRoute>
  }
/>

<Route
  path="/allorders"
  element={
    <AdminRoute>
      <AllOrders />
    </AdminRoute>
  }
/>
    </Routes>
  );
}

export default App;