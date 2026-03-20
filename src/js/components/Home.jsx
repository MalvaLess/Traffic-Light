import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const cycleColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <div className="palito"></div>
      <div className="traffic-light">
        {colors.map((c) => (
          <div
            key={c}
            onClick={() => setColor(c)}
            className={`light ${c} ${color === c ? "brillo" : ""}`}
          ></div>
        ))}
      </div>
      <div className="mt-3 text-center">
        <button onClick={cycleColor} className="btn btn-outline-primary me-2">
          Cycle Color
        </button>
        <button onClick={addPurple} className="btn btn-outline-secondary">
          Add Purple
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
