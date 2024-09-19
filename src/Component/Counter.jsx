import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "400px" }}>
      <h1 style={{ color: "brown", textDecoration: "underline" }}>Counter</h1>
      <button
        style={{
          marginRight: "50px",
          backgroundColor: "orange",
          borderRadius: "5px",
          padding: "5px",
          fontSize: "20px",
          fontFamily: "monospace",
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{
          marginRight: "50px",
          backgroundColor: "yellow",
          borderRadius: "5px",
          padding: "5px",
          fontSize: "20px",
          fontFamily: "monospace",
        }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>{" "}
      <span
        style={{
          marginRight: "50px",
          fontSize: "30px",
          fontFamily: "monospace",
        }}
      >
        =
      </span>
      <span
        style={{
          marginRight: "50px",
          fontSize: "40px",
          fontFamily: "monospace",
          fontWeight: "bold",
          color: "brown",
        }}
      >
        {count}
      </span>
      <br />
    </div>
  );
}
