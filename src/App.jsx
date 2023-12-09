import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div
        style={{
          backgroundColor: color,
        }}
        className="main-wrapper"
      >
        <div
          className="btn-group"
        >
          <button
            className="button"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            red
          </button>
          <button
            className="button"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            className="button"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            orange
          </button>
          <button
            className="button"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button
            className="button"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
