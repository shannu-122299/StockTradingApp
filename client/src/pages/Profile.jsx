import { useState, useEffect } from "react";
import axios from "../components/axiosInstance";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    
    axios
      .get("/users/profile")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!user) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Loading...
        </h2>
      </>
    );
  }

  const updateBalance = async (type) => {
  try {
    const value = Number(amount);

    if (!value || value <= 0) {
      alert("Enter a valid amount");
      return;
    }

    const newBalance =
      type === "add"
        ? user.balance + value
        : user.balance - value;

    if (newBalance < 0) {
      alert("Insufficient Balance");
      return;
    }

    const res = await axios.put("/users/profile", {
      balance: newBalance,
    });

    setUser(res.data);
    setAmount("");

    alert(
      type === "add"
        ? "Amount Added Successfully"
        : "Amount Withdrawn Successfully"
    );
  } catch (err) {
    alert(err.response?.data?.message || "Update Failed");
  }
};

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#eef3fa",
          minHeight: "100vh",
          padding: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "450px",
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(0,0,0,.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#1565c0",
              marginBottom: "30px",
            }}
          >
            My Profile
          </h2>

          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Balance:</strong> ₹{user.balance}</p>
          <input
  className="amountInput"
  type="number"
  placeholder="Enter Amount..."
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    background: "#fff",
    color: "#000",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  }}
/>
          <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  }}
>
  <button
  onClick={() => updateBalance("add")}
  style={{
    flex: 1,
    background: "#2e7d32",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#1b5e20";
    e.currentTarget.style.transform = "scale(1.04)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "#2e7d32";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
    Add Funds
  </button>

  <button
  onClick={() => updateBalance("withdraw")}
  style={{
    flex: 1,
    background: "#d32f2f",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#b71c1c";
    e.currentTarget.style.transform = "scale(1.04)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "#d32f2f";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
    Withdraw
  </button>

        </div>

<button
  onClick={() => navigate("/transactions")}
  style={{
    width: "100%",
    marginTop: "20px",
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
  View Wallet Transactions
</button>

        </div>
      </div>
    </>
  );
}

export default Profile;