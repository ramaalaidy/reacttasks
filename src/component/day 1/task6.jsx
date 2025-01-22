import React from "react";

const StyledComponent = () => {

    const containerStyle = {
    backgroundColor: "#f9fbe7",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  };

  const headingStyle = {
    color: "#827717",
    fontSize: "28px",
    marginBottom: "15px",
    fontWeight: "bold"
  };

  const buttonStyle = {
    backgroundColor: "#cddc39",
    color: "#ffffff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome</h1>
      
      <button style={buttonStyle} onClick={() => alert("Button Clicked!")}>
        Click Me
      </button>
    </div>
  );
};

export default StyledComponent;
