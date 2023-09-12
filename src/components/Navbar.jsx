import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "grey",
    padding: "10px",
    paddingBottom: "20px", // Mengurangi padding bawah untuk menghindari kelonggaran yang berlebihan
    // width: "100%",
  };

  const leftLinkStyle = {
    marginRight: "auto",
  };

  const rightLinkStyle = {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center", // Mengatur elemen vertikal di tengah sudut kanan
  };

  const linkMargin = {
    margin: "0 10px",
    color: "#fff",
    textDecoration: "none",
  };

  const logoStyle = {
    fontStyle: "italic",
    fontWeight: "bold", // Menjadikan teks lebih tebal
    fontSize: "24px", // Mengatur ukuran font
    margin: "0",
    marginLeft: "20px",
    color: "#ffff",
  };

  return (
    <nav className="max-w-screen-xl px-4 mx-auto" style={navbarStyle}>
      <Link to={"/"} style={leftLinkStyle}>
        <h2 style={logoStyle}>INI FOOD MARKET | home</h2>
      </Link>
      <div style={rightLinkStyle}>
        <Link to={"/register"} style={linkMargin}>
          <h2>Register</h2>
        </Link>
        <Link to={"/login"} style={linkMargin}>
          <h2>Login</h2>
        </Link>
        <button
          onClick={handleLogout}
          style={{
            ...linkMargin, // Menambahkan gaya linkMargin ke button
            padding: "10px 20px",
            margin: "10px",
            background: "#FFA500", // Mengatur latar belakang tombol menjadi oranye
            border: "none", // Menghilangkan border tombol
            color: "#fff", // Mengatur warna teks tombol menjadi putih
            cursor: "pointer", // Mengubah kursor saat mengarah ke tombol
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
