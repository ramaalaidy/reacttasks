import React, { Component } from "react";

class ConditionalRenderingClass extends Component {
  render() {
    const { isSuccess } = this.props; 

    return (
      <div style={styles.container}>
          <h1 style={styles.errorMessage}>Success!</h1>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },

  errorMessage: {
    color: "#d32f2f",
  },
};

export default ConditionalRenderingClass;
