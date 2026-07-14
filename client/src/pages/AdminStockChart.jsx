import { useState, useEffect } from "react";
import axios from "../components/axiosInstance";
import Navbar from "../components/Navbar";


function AdminStockChart() {
  const [stocks, setStocks] = useState([]);

  const [form, setForm] = useState({
    exchange: "",
    company: "",
    symbol: "",
    type: "",
    price: "",
  });

  async function fetchStocks() {
  try {
    const res = await axios.get("/stocks");
    setStocks(res.data);
  } catch (err) {
    console.log(err);
  }
}

useEffect(() => {
  (async () => {
    try {
      const res = await axios.get("/stocks");
      setStocks(res.data);
    } catch (err) {
      console.log(err);
    }
  })();
}, []);

  const addStock = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/stocks", form);

      alert("Stock Added Successfully");

      setForm({
        exchange: "",
        company: "",
        symbol: "",
        type: "",
        price: "",
      });

      fetchStocks();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const editStock = async (stock) => {
  const newPrice = prompt(
    "Enter New Price",
    stock.price
  );

  if (!newPrice) return;

  try {
    await axios.put(`/stocks/${stock._id}`, {
      ...stock,
      price: Number(newPrice),
    });

    alert("Stock Updated Successfully");

    fetchStocks();

  } catch (err) {
    alert(err.response?.data?.message || "Update Failed");
  }
};

const deleteStock = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this stock?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(`/stocks/${id}`);

    alert("Stock Deleted Successfully");

    fetchStocks();
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
          Manage Stocks
        </h1>

        {/* Add Stock Form */}

        <form
          onSubmit={addStock}
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "10px",
          }}
        >
          <input
  placeholder="Exchange..."
  value={form.exchange}
  onChange={(e) =>
    setForm({ ...form, exchange: e.target.value })
  }
  style={{
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    background: "#fff",
    color: "#000",
    fontSize: "15px",
  }}
/>

          <input
  placeholder="Company..."
  value={form.company}
  onChange={(e) =>
    setForm({ ...form, company: e.target.value })
  }
  style={{
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    background: "#fff",
    color: "#000",
    fontSize: "15px",
  }}
/>
          <input
  placeholder="Symbol..."
  value={form.symbol}
  onChange={(e) =>
    setForm({ ...form, symbol: e.target.value })
  }
  style={{
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    background: "#fff",
    color: "#000",
    fontSize: "15px",
  }}
/>

          <input
  placeholder="Type..."
  value={form.type}
  onChange={(e) =>
    setForm({ ...form, type: e.target.value })
  }
  style={{
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    background: "#fff",
    color: "#000",
    fontSize: "15px",
  }}
/>

          <input
  type="number"
  placeholder="Price..."
  value={form.price}
  onChange={(e) =>
    setForm({ ...form, price: e.target.value })
  }
  style={{
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    background: "#fff",
    color: "#000",
    fontSize: "15px",
  }}
/>

          <button
  type="submit"
  style={{
    gridColumn: "span 5",
    padding: "12px",
    background: "#1565c0",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#0d47a1";
    e.currentTarget.style.transform = "scale(1.02)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "#1565c0";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  Add Stock
</button>
        </form>

        {/* Stocks Table */}

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
              <th style={{ padding: "12px" }}>Exchange</th>
              <th>Company</th>
              <th>Symbol</th>
              <th>Type</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {stocks.map((stock) => (
              <tr
  key={stock._id}
  style={{
    textAlign: "center",
    borderBottom: "1px solid #ddd",
    transition: "background-color 0.3s ease",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = "#e3f2fd";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = "#ffffff";
  }}
>
                <td style={{ padding: "12px" }}>{stock.exchange}</td>
                <td>{stock.company}</td>
                <td>{stock.symbol}</td>
                <td>{stock.type}</td>
                <td>₹{stock.price}</td>

                <td>
                  <button
  onClick={() => editStock(stock)}
  style={{
    background: "#ff9800",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "8px",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#ef6c00";
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "#ff9800";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  Edit
</button>

                  <button
  onClick={() => deleteStock(stock._id)}
  style={{
    background: "#f44336",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#c62828";
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "#f44336";
    e.currentTarget.style.transform = "scale(1)";
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

export default AdminStockChart;