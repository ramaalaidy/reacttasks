import React from "react";

const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card.",
    image: "download (1).jpeg",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card.",
    image: "download (1).jpeg",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card.",
    image: "download (1).jpeg",
  },
];

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",
            width: "200px",
          }}
        >
          <img
            src={card.image}
            alt={card.title}
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
          />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
