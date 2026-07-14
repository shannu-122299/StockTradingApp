import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "./axiosInstance";
import hero from "../assets/hero.png";
import Navbar from "./Navbar";

function Register() {

  const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("user");

const handleSubmit = async () => {
  try {

    

    const res = await axios.post("/users/register", {
      name,
      email,
      password,
      role,
    });

    localStorage.setItem("token", res.data.token);

    alert("Registration Successful");

    navigate("/home");
  } catch (err) {
    alert(err.response?.data?.message || "Registration Failed");
  }
};


  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "50px",
          minHeight: "85vh",
          background: "#f5f7fb",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            background: "#fff",
            padding: "35px",
            borderRadius: "10px",
            width: "360px",
            boxShadow: "0 0 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#1565c0",
              marginBottom: "25px",
            }}
          >
            Register
          </h2>

          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  style={inputStyle}
>
  <option value="user">User</option>
  <option value="admin">Admin</option>
</select>

          <button
            style={buttonStyle}
            onClick={handleSubmit}
          >
            Sign Up
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Already Registered?
            <Link
              to="/login"
              style={{
                color: "#1565c0",
                textDecoration: "none",
                marginLeft: "5px",
              }}
            >
              Login
            </Link>
          </p>
        </div>

        {/* Right Side */}
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              color: "#1565c0",
              fontSize: "48px",
            }}
          >
            SB Stock Trading
          </h1>

          <p
            style={{
              color: "#555",
              width: "450px",
              margin: "20px auto",
            }}
          >
            Experience seamless stock market trading with our user-friendly
            platform offering real-time market data, advanced analytics,
            and secure execution.
          </p>

          <img
            src={hero}
            alt="hero"
            style={{
              width: "420px",
            }}
          />
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "18px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#1565c0",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Register;