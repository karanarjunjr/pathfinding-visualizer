import "./App.css";
import Node from "./node";
import Main from "./main";
import { useState } from "react";

function App() {
  const [row, setRow] = useState(10);
  const [isPressed, setIsPressed] = useState(false);
  const [startMoving, setStartMoving] = useState(false);
  const [endMoving, setEndMoving] = useState(false);
  const handleMouseUp = (i, j) => {
    if (!startMoving && !endMoving) setIsPressed(false);
    if (!isNaN(j)) {
      setStartMoving(false);
      setEndMoving(false);
      setIsPressed(false);
    }
  };

  return (
    <div className="App" onMouseUp={handleMouseUp}>
      <Main
        isPressed={isPressed}
        setIsPressed={setIsPressed}
        handleMouseUp={handleMouseUp}
        startMoving={startMoving}
        setStartMoving={setStartMoving}
        endMoving={endMoving}
        setEndMoving={setEndMoving}
      />
    </div>
  );
}

export default App;
