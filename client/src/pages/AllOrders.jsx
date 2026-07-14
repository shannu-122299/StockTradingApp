import { useState, useEffect } from "react";
import axios from "../components/axiosInstance";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";

function AllOrders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("/orders/all")
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
  All Orders ({orders.length})
</h1>

<div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "25px",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "12px 15px",
      width: "420px",
    }}
  >
    <input
      type="text"
      placeholder="Search by user, company or symbol..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        border: "none",
        outline: "none",
        flex: 1,
        fontSize: "15px",
        background: "transparent",
        color: "#000",
      }}
    />

    <FaSearch
      style={{
        color: "#1565c0",
        fontSize: "18px",
      }}
    />
  </div>
</div>

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
              <th style={{ padding: "12px" }}>User</th>
              <th>Email</th>
              <th>Company</th>
              <th>Symbol</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders
  .filter(
    (order) =>
      order.user?.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      order.company
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.symbol
        .toLowerCase()
        .includes(search.toLowerCase())
  )
  .map((order) => (
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
                <td style={{ padding: "12px" }}>
                  {order.user?.name}
                </td>

                <td>{order.user?.email}</td>

                <td>{order.company}</td>

                <td>{order.symbol}</td>

                <td
                  style={{
                    color:
                      order.orderType === "BUY"
                        ? "green"
                        : "red",
                    fontWeight: "bold",
                  }}
                >
                  {order.orderType}
                </td>

                <td>{order.quantity}</td>

                <td>₹{order.price}</td>

<td>
  {new Date(order.createdAt).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllOrders;