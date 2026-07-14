import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../components/axiosInstance";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";

const trendingStocks = [
  { name: "Apple", symbol: "AAPL", price: "$194.50", change: "-2.14%" },
  { name: "Tesla", symbol: "TSLA", price: "$256.20", change: "+1.82%" },
  { name: "Microsoft", symbol: "MSFT", price: "$450.40", change: "+0.76%" },
  { name: "Google", symbol: "GOOG", price: "$181.90", change: "-0.91%" },
];

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
const [stocks, setStocks] = useState([]);

useEffect(() => {
  axios
    .get("/stocks")
    .then((res) => {
      setStocks(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

const buyStock = async (stock) => {

  const confirmBuy = window.confirm(
    `Do you want to buy ${stock.company} (${stock.symbol})?`
  );

  if (!confirmBuy) {
    return;
  }

  try {
    await axios.post("/orders/buy", {
      symbol: stock.symbol,
      company: stock.company,
      quantity: 1,
      price: stock.price,
    });

    alert("Stock Purchased Successfully");

  } catch (err) {
    alert(err.response?.data?.message || "Purchase Failed");
  }
};

//useEffect(() => {
  //console.log(stocks);
//}, [stocks]);

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          gap: "25px",
          padding: "30px",
          background: "#eef3fa",
          minHeight: "100vh",
        }}
      >
        {/* Left Panel */}

        <div
          style={{
            width: "28%",
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(0,0,0,.08)",
          }}
        >
          <h2
style={{
    color:"#1565c0",
    fontWeight:"700",
    fontSize:"34px",
}}
>
Trending Stocks
</h2>
          {trendingStocks.map((stock) => (
  <div
    key={stock.symbol}
    onClick={() => navigate(`/stock/${stock.symbol}`)}
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginTop: "18px",
      borderBottom: "1px solid #ddd",
      paddingBottom: "10px",
      cursor: "pointer",
      transition: "0.3s",
      padding: "10px",
      borderRadius: "8px",
    }}

    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#e3f2fd";
      e.currentTarget.style.transform = "scale(1.02)";
    }}

    onMouseLeave={(e) => {
      e.currentTarget.style.background = "#fff";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
              <div>
                <strong>{stock.name}</strong>
                <br />
                {stock.symbol}
              </div>

              <div style={{ textAlign: "right" }}>
                <strong>{stock.price}</strong>
                <br />

                <span
                  style={{
                    color: stock.change.startsWith("+")
                      ? "green"
                      : "red",
                  }}
                >
                  {stock.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel */}

        <div style={{ flex: 1 }}>
          

          <div
style={{
display:"flex",
justifyContent:"flex-end",
marginBottom:"25px",
}}
>

<div
style={{
display:"flex",
alignItems:"center",
background:"#fff",
border:"1px solid #ccc",
borderRadius:"8px",
padding:"12px 15px",
width:"420px",
}}
>

<input
type="text"
placeholder="Enter Stock Symbol..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
    border:"none",
    outline:"none",
    flex:1,
    fontSize:"15px",
    background:"transparent",   // removes black background
    color:"#000",               // typed text will be black
}}
/>

<FaSearch
style={{
color:"#1565c0",
fontSize:"18px",
cursor:"pointer",
}}
/>

</div>

</div>

         <h1
style={{
    color:"#1e3a8a",
    fontSize:"42px",
    marginBottom:"35px",
}}
>
Watchlist
</h1>

<table
style={{
    width:"100%",
    background:"#fff",
    borderCollapse:"collapse",
    borderRadius:"10px",
    overflow:"hidden",
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
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
  {stocks
    .filter(
      (stock) =>
        stock.company
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        stock.symbol
          .toLowerCase()
          .includes(search.toLowerCase())
    )
    .map((stock) => (
  <tr
    key={stock._id || stock.symbol}
    style={{
      textAlign:"center",
      borderBottom:"1px solid #ddd",
      transition:"0.3s",
    }}
onMouseEnter={(e)=>{
    e.currentTarget.style.background="#e3f2fd";
}}
onMouseLeave={(e)=>{
    e.currentTarget.style.background="#fff";
}}
>
        <td style={{ padding: "12px" }}>{stock.exchange}</td>
        <td>{stock.company}</td>
        <td>{stock.symbol}</td>
        <td>{stock.type}</td>

        <td>
          <button
style={{
background:"#1565c0",
color:"#fff",
padding:"8px 14px",
border:"none",
borderRadius:"6px",
cursor:"pointer",
transition:"0.3s",
marginRight:"10px",
}}
onClick={() => navigate(`/stock/${stock.symbol}`)}
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
style={{
background:"#2e7d32",
color:"#fff",
padding:"8px 14px",
border:"none",
borderRadius:"6px",
cursor:"pointer",
transition:"0.3s",
}}
onClick={() => buyStock(stock)}
onMouseEnter={(e)=>{
e.currentTarget.style.background="#1b5e20";
e.currentTarget.style.transform="scale(1.05)";
}}
onMouseLeave={(e)=>{
e.currentTarget.style.background="#2e7d32";
e.currentTarget.style.transform="scale(1)";
}}
>
Buy
</button>
        </td>
      </tr>
    ))}
</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;