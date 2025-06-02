import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleClick(value) {
    setInput((prev) => prev + value);
  }

  function calculate() {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(input));
    } catch {
      setResult("Error");
    }
  }

  function clear() {
    setInput("");
    setResult("");
  }

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>InstaKit Calculator</h1>
      <input
        type="text"
        readOnly
        value={input}
        style={{ width: "100%", fontSize: 24, padding: 10, marginBottom: 10 }}
      />
      <div
        style={{
          marginBottom: 10,
          minHeight: 30,
          fontSize: 20,
          color: result === "Error" ? "red" : "green",
          fontWeight: "bold",
        }}
      >
        {result}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
        {["7", "8", "9", "/"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} style={{ fontSize: 20, padding: 10 }}>
            {btn}
          </button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} style={{ fontSize: 20, padding: 10 }}>
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} style={{ fontSize: 20, padding: 10 }}>
            {btn}
          </button>
        ))}
        {["0", ".", "=", "+"].map((btn) =>
          btn === "=" ? (
            <button
              key={btn}
              onClick={calculate}
              style={{ fontSize: 20, padding: 10, backgroundColor: "#4caf50", color: "white" }}
            >
              =
            </button>
          ) : (
            <button key={btn} onClick={() => handleClick(btn)} style={{ fontSize: 20, padding: 10 }}>
              {btn}
            </button>
          )
        )}
      </div>
      <button
        onClick={clear}
        style={{
          marginTop: 15,
          width: "100%",
          padding: 10,
          fontSize: 20,
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Clear
      </button>
    </div>
  );
}
