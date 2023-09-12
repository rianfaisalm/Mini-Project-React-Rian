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
    paddingBottom: "20px",
    // width: "100%",
  };

  const leftLinkStyle = {
    marginRight: "auto",
  };

  const rightLinkStyle = {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center", 
  };

  const linkMargin = {
    margin: "0 10px",
    color: "#fff",
    textDecoration: "none",
  };

  const logoStyle = {
    fontStyle: "italic",
    fontWeight: "bold", 
    fontSize: "24px", 
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
            ...linkMargin, 
            padding: "10px 20px",
            margin: "10px",
            background: "#FFA500", 
            border: "none", 
            color: "#fff", 
            cursor: "pointer", 
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
