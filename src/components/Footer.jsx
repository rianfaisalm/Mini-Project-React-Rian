import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        width: "100%",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0 }}>
        ©{new Date().getFullYear()} INI FOOD MARKET -Created by Rian Faisal Mahendra
      </p>
    </footer>
  );
};

export default Footer;
