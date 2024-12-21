// Creat a ReactApp with a circle and a buttom in the middle of the screen.
// Onclick of the button it should change the color of the circle


import "./styles.css";
import React from "react";

export default function App() {
  const [randomColor, setRandomColor] = React.useState("black");
  const colorArray = [
    "Grey",
    "Green",
    "Yellow",
    "Orange",
    "Green",
    "Yellow",
    "Orange",
    "Blue",
    "White",
    "Pink",
  ];
  const changeColor = () => {
    setRandomColor(colorArray[Math.ceil(Math.random() * 10)]);
  };
  return (
    <div className="App">
      <div className="circle" style={{ backgroundColor: randomColor }}>
        <button onClick={changeColor} className="clickMeButton">
          Click Me
        </button>
      </div>
    </div>
  );
}


// .App {
//     font-family: sans-serif;
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }
//   .circle {
//     height: 80px;
//     padding: 80px;
//     width: 15px;
//     border: 1px solid black;
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     align-self: center;
//     align-items: center;
//   }
//   .clickMeButton {
//     /* justify-content: center; */
//     align-items: center;
//     marginleft: auto;
//     marginright: auto;
//     leftmargin: 100px;
//   }
  