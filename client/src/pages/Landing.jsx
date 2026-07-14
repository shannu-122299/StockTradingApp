import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.png";

function Landing() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "60px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "48px", color: "#1f3c88" }}>
            SB Stock Trading
          </h1>

          <p style={{ color: "gray", width: "400px" }}>
            Experience seamless stock market trading with our user friendly
            platform offering real time market data and portfolio management.
          </p>

          <div style={{ marginTop: "30px" }}>
            <Link to="/login">
              <button
                style={{
                  padding: "10px 25px",
                  marginRight: "15px",
                  background: "#1565c0",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </Link>

            <Link to="/register">
              <button
                style={{
                  padding: "10px 25px",
                  cursor: "pointer",
                }}
              >
                Register
              </button>
            </Link>
          </div>
        </div>

        <img
          src={hero}
          alt="hero"
          style={{
            width: "450px",
          }}
        />
      </div>
    </>
  );
}

export default Landing;