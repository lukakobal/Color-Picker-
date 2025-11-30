import React, { useState } from "react";
import "./styles.css";

function ColorPicker({ onColorChange }) {
  const handleChange = (e) => {
    onColorChange(e.target.value);
  };

  return (
    <div className="picker-box">
      <label>Choose a color:</label>
      <input type="color" onChange={handleChange} />
    </div>
  );
}

function ColorDisplay({ color }) {
  return (
    <div className="color-display" style={{ backgroundColor: color }}>
      {color}
    </div>
  );
}

export default function App() {
  const [color, setColor] = useState("#ff0000");

  return (
    <div className="app-container">
      <h1>Color Picker 🎨</h1>
      <ColorPicker onColorChange={setColor} />
      <ColorDisplay color={color} />
    </div>
  );
}
