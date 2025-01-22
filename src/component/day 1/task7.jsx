import React from "react";

const ConditionalRenderingExample = () => {
  const isLoggedIn = true; 

  return (
    <div style={styles.container}>
      {isLoggedIn ? (
        <h1> Welcome Back!</h1>
      ) : (
        <div style={styles.loginPrompt}>
          <h1>Please Login</h1>
          <button onClick={() => alert("Logging in...")}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },

  loginPrompt: {
    backgroundColor: "#ffebee",
    padding: "20px",
    borderRadius: "8px",
    display: "inline-block",
  },


};

export default ConditionalRenderingExample;
