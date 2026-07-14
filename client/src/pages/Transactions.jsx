import { useState, useEffect } from "react";
import axios from "../components/axiosInstance";
import Navbar from "../components/Navbar";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("/wallet/transactions")
      .then((res) => {
        setTransactions(res.data);
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
            color: "#1565c0",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Wallet Transactions
        </h1>

        {transactions.length === 0 ? (
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h2>No Wallet Transactions Yet</h2>
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
                <th style={{ padding: "12px" }}>Type</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr
  key={transaction._id}
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
                  <td
                    style={{
                      color:
                        transaction.type === "ADD"
                          ? "green"
                          : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {transaction.type}
                  </td>

                  <td>₹{transaction.amount}</td>

                  <td>
                    {new Date(
                      transaction.createdAt
                    ).toLocaleString()}
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

export default Transactions;