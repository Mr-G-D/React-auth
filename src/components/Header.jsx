import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        textAlignLast: "justify",
      }}
    >
      <img
        src="/logo.jpg"
        alt="logo"
        style={{
          width: "10%",
          borderRadius: "50%",
          margin: "20px",
        }}
      />
    </div>
  );
};

export default Header;
