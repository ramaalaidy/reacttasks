import React from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const App = () => {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const oddNumbers = numbers.filter((num) => num % 2 !== 0);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h3>Even Numbers</h3>
        <ul>
          {evenNumbers.map((num) => (
            <li>Even: {num}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Odd Numbers</h3>
        <ul>
          {oddNumbers.map((num) => (
            <li>Odd: {num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
