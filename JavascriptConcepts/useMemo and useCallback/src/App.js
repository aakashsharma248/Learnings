import "./styles.css";
import { useState, useMemo } from "react";
import List from "./List";

export default function App() {
  const [count, setCount] = useState(0);
  const [backColor, setBackColor] = useState(false);

  const onCountChange = (e) => {
    setCount(Number(e.target.value));
  };

  const onToggleButtonClick = () => {
    setBackColor((prev) => !prev);
  };
  console.log("App is rerendered");

  const memoize =
    (() => {
      return <List count={count} />;
    },
    [count]);

  return (
    <div className="App">
      <input
        value={count}
        onChange={onCountChange}
        style={{
          backgroundColor: backColor ? "black" : "transparent",
          color: backColor ? "white" : "black",
        }}
      />
      <div>
        <button
          value={"ToggleTheme"}
          type="button"
          onClick={onToggleButtonClick}
        >
          Toggle Button
        </button>
      </div>
      {memoize}
    </div>
  );
}
