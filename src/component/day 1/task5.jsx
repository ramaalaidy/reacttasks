import React from "react";

const InlineStylesExample = () => {
  const containerStyle = {
    backgroundColor: "#f0f8ff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  };

  const headingStyle = {
    color: "#333",
    fontSize: "24px",
    marginBottom: "10px",
  };

 
  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
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

export default InlineStylesExample;
