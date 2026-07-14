import { useState, useEffect } from "react";
import axios from "../components/axiosInstance";
import Navbar from "../components/Navbar";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/orders/all")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response?.data?.message || "Failed to load orders");
      });
  }, []);

  const deleteOrder = async (id) => {
  if (!window.confirm("Delete this order?")) return;

  try {
    await axios.delete(`/orders/${id}`);

    setOrders(orders.filter((o) => o._id !== id));

    alert("Order Deleted");
  } catch (err) {
    alert(err.response?.data?.message || "Delete Failed");
  }
};

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
            color: "#1565c0",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Manage Orders
        </h1>

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
              <th>Action</th>
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
  <button
  onClick={() => deleteOrder(order._id)}
  style={{
    background:"#f44336",
    color:"#fff",
    border:"none",
    padding:"6px 12px",
    borderRadius:"5px",
    cursor:"pointer",
    transition:"0.3s",
  }}
  onMouseEnter={(e)=>{
    e.currentTarget.style.background="#c62828";
    e.currentTarget.style.transform="scale(1.05)";
  }}
  onMouseLeave={(e)=>{
    e.currentTarget.style.background="#f44336";
    e.currentTarget.style.transform="scale(1)";
  }}
>
  Delete
</button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;