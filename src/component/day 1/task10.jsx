import React from "react";

function Task10({ items }) {
  const itemStyle = {
    backgroundColor: "orange",
    color: "white",
    padding: "10px",
    margin: "5px 0",
    textAlign: "center",
  };

  return (
    <div>
      {items.map((item) => (
        <div style={itemStyle}>
          {item}
        </div>
      ))}
    </div>
  );
}

function App() {
  const students = ["Student 1", "Student 2", "Student 3", "Student 4"];

  return (
    <div>
      <Task10 items={students} />
    </div>
  );
}

export default App;