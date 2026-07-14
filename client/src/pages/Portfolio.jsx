import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../components/axiosInstance";
import Navbar from "../components/Navbar";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/portfolio")
      .then((res) => {
        setPortfolio(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sellStock = async (stock) => {

  const confirmSell = window.confirm(
    `Do you want to sell ${stock.company} (${stock.symbol})?`
  );

  if (!confirmSell) {
    return;
  }

  console.log(stock);

  try {
    await axios.post("/orders/sell", {
      symbol: stock.symbol,
      quantity: 1,
      price: stock.buyPrice,
    });

    alert("Stock Sold Successfully");

    const res = await axios.get("/portfolio");
    setPortfolio(res.data);

  } catch (err) {
    alert(err.response?.data?.message || "Sell Failed");
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
            marginBottom: "30px",
          }}
        >
          My Portfolio
        </h1>

        {portfolio.length === 0 ? (
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(0,0,0,.08)",
            }}
          >
            <h2>No Stocks Purchased Yet 📈</h2>
            <p>Buy your first stock from the Home page.</p>
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
                <th>Quantity</th>
                <th>Buy Price</th>
                <th>Total Value</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {portfolio.map((stock) => (
                <tr
  key={stock._id}
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
                  <td style={{ padding: "12px" }}>{stock.company}</td>
                  <td>{stock.symbol}</td>
                  <td>{stock.quantity}</td>
                  <td>₹{stock.buyPrice}</td>
                  <td>
                    ₹{stock.quantity * stock.buyPrice}
                  </td>

                 <td>
  <button
onClick={() => navigate(`/stock/${stock.symbol}`)}
style={{
background:"#1565c0",
color:"#fff",
padding:"8px 14px",
border:"none",
borderRadius:"6px",
cursor:"pointer",
transition:"0.3s",
}}
onMouseEnter={(e)=>{
e.currentTarget.style.background="#0d47a1";
e.currentTarget.style.transform="scale(1.05)";
}}
onMouseLeave={(e)=>{
e.currentTarget.style.background="#1565c0";
e.currentTarget.style.transform="scale(1)";
}}
>
View Chart
</button>

  <button
onClick={() => sellStock(stock)}
style={{
background:"#d32f2f",
color:"#fff",
padding:"8px 14px",
border:"none",
borderRadius:"6px",
cursor:"pointer",
transition:"0.3s",
}}
onMouseEnter={(e)=>{
e.currentTarget.style.background="#b71c1c";
e.currentTarget.style.transform="scale(1.05)";
}}
onMouseLeave={(e)=>{
e.currentTarget.style.background="#d32f2f";
e.currentTarget.style.transform="scale(1)";
}}
>
Sell
</button>
</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Portfolio;