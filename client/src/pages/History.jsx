import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "../components/axiosInstance";

function History() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          background: "#eef3fa",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1565c0",
            marginBottom: "30px",
          }}
        >
          Order History
        </h1>

        {orders.length === 0 ? (
  <div
    style={{
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      textAlign: "center",
    }}
  >
    <h2>No Orders Yet 📄</h2>
    <p>Buy or sell a stock to see your order history.</p>
  </div>
) : (
  <table
    style={{
      width: "100%",
      background: "#fff",
      borderCollapse: "collapse",
      borderRadius: "10px",
      overflow: "hidden",
    }}
  >
    <thead>
      <tr
        style={{
          background: "#1565c0",
          color: "#fff",
        }}
      >
        <th style={{ padding: "12px" }}>Company</th>
        <th>Symbol</th>
        <th>Type</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
        <th>Date</th>
      </tr>
    </thead>

    <tbody>
      {orders.map((order) => (
        <tr
  key={order._id}
  style={{
    textAlign: "center",
    borderBottom: "1px solid #ddd",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#e3f2fd";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "#fff";
  }}
>
          <td style={{ padding: "12px" }}>{order.company}</td>
          <td>{order.symbol}</td>

          <td
            style={{
              color: order.orderType === "BUY" ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {order.orderType}
          </td>

          <td>{order.quantity}</td>
          <td>₹{order.price}</td>
          <td>₹{order.quantity * order.price}</td>
          <td>{new Date(order.createdAt).toLocaleDateString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}
      </div>
    </>
  );
}

export default History;