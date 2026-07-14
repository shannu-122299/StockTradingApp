import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Navbar() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {

  const confirmLogout = window.confirm(
    "Are you sure you want to logout?"
  );

  if (!confirmLogout) {
    return;
  }

  localStorage.removeItem("token");
  navigate("/");
};

let isAdmin = false;

if (token) {
  try {
    const decoded = jwtDecode(token);
    isAdmin = decoded.role === "admin";
  } catch (err) {
    console.log(err);
  }
}

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#1565c0",
        color: "#fff",
      }}
    >
      <h2 style={{ margin: 0 }}>SB Stocks</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link
          to="/home"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>

        <Link
          to="/portfolio"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Portfolio
        </Link>

        <Link
          to="/history"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          History
        </Link>

        <Link
          to="/profile"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Profile
        </Link>

        {isAdmin && (
  <Link
    to="/admin"
    style={{
      color: "#fff",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    Admin Dashboard
  </Link>
)}

        <button
  onClick={handleLogout}
  style={{
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.color = "#bbdefb";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = "#fff";
  }}
>
  Logout
</button>
      </div>
    </nav>
  );
}

export default Navbar;