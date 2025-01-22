import React from "react";

function Task11({ numbers }) {
  return (
    <ul>
      {numbers.map((num) => (
        <li>
          Doubled number {num} is {num * 2}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <Task11 numbers={numbers} />
    </div>
  );
}

export default App;