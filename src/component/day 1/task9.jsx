import React from "react";

function Task9({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const students = ["Student 1", "Student 2", "Student 3", "Student 4"];

  return (
    <div>
      <Task9 items={students} />
    </div>
  );
}

export default App;