import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to={"/login"}>
        <h2>Login</h2>
      </Link>
      <Link to={"/register"}>
        <h2>Register</h2>
      </Link>
      <Link to={"/"}>
        <h2>Home</h2>
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
