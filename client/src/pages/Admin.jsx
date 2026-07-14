import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Admin() {
  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "250px",
    textAlign: "center",
    textDecoration: "none",
    color: "#1565c0",
    fontWeight: "bold",
    fontSize: "20px",
    boxShadow: "0 0 12px rgba(0,0,0,.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
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
            textAlign: "center",
            color: "#1565c0",
            marginBottom: "40px",
          }}
        >
          Admin Dashboard
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <Link
  to="/users"
  style={cardStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow =
      "0 10px 20px rgba(0,0,0,.15)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 0 12px rgba(0,0,0,.08)";
  }}
>
            👥<br /><br />
            Manage Users
          </Link>

          <Link
  to="/orders"
  style={cardStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow =
      "0 10px 20px rgba(0,0,0,.15)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 0 12px rgba(0,0,0,.08)";
  }}
>
            📈<br /><br />
            Manage Orders
          </Link>

          <Link
  to="/transactions"
  style={cardStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow =
      "0 10px 20px rgba(0,0,0,.15)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 0 12px rgba(0,0,0,.08)";
  }}
>
            💳<br /><br />
            Transactions
          </Link>

          <Link
  to="/admin/chart"
  style={cardStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow =
      "0 10px 20px rgba(0,0,0,.15)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 0 12px rgba(0,0,0,.08)";
  }}
>
            📊<br /><br />
            Manage Stocks
          </Link>

          <Link
  to="/allorders"
  style={cardStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow =
      "0 10px 20px rgba(0,0,0,.15)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 0 12px rgba(0,0,0,.08)";
  }}
>
            📜<br /><br />
            All Orders
          </Link>
        </div>
      </div>
    </>
  );
}

export default Admin;