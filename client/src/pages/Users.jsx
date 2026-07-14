import { useEffect, useState } from "react";
import axios from "../components/axiosInstance";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const deleteUser = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(`/users/${id}`);

    setUsers(users.filter((user) => user._id !== id));

    alert("User deleted successfully");
  } catch (err) {
    alert(err.response?.data?.message || "Delete failed");
  }
};

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => {
        setUsers(res.data);
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
            textAlign: "center",
            color: "#1565c0",
            marginBottom: "30px",
          }}
        >
          Manage Users
        </h1>

        <div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "25px",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "12px 15px",
      width: "420px",
    }}
  >
    <input
      type="text"
      placeholder="Search User..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        border: "none",
        outline: "none",
        flex: 1,
        fontSize: "15px",
        background: "transparent",
        color: "#000",
      }}
    />

    <FaSearch
      style={{
        color: "#1565c0",
        fontSize: "18px",
      }}
    />
  </div>
</div>

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
              <th style={{ padding: "12px" }}>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Balance</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users
  .filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  )
  .map((user) => (
              <tr
  key={user._id}
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
                <td style={{ padding: "12px" }}>{user.name}</td>
                <td>{user.email}</td>
                <td>
  <span
    style={{
      background:
        user.role === "admin"
          ? "#1565c0"
          : "#2e7d32",
      color: "#fff",
      padding: "5px 12px",
      borderRadius: "15px",
      fontWeight: "bold",
      fontSize: "13px",
    }}
  >
    {user.role.toUpperCase()}
  </span>
</td>
      <td>₹{user.balance}</td>

<td>
  {user.role === "admin" ? (
    <button
  disabled
  style={{
    background:"#9e9e9e",
    color:"#fff",
    border:"none",
    padding:"6px 12px",
    borderRadius:"5px",
    cursor:"not-allowed",
  }}
>
  Protected
</button>
  ) : (
    <button
  onClick={() => deleteUser(user._id)}
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
  )}
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;