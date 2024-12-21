import { useEffect } from "react";
import "./Eventbubbling.css";

const Eventbubbling = () => {
  useEffect(() => {
    const yellowData = document.querySelector(".yellow");
    const greenData = document.querySelector(".green");
    const redData = document.querySelector(".red");

    if (yellowData) {
      yellowData.addEventListener("click", () => {
        console.log("Yellow is clicked");
        event.stopPropagation(); // it stop propation of event to its' parent element
      });
    }

    if (greenData) {
      greenData.addEventListener("click", () => {
        console.log("Green is clicked");
        event.stopPropagation(); // it stop propation of event to its' parent element
      });
    }

    if (redData) {
      redData.addEventListener("click", () => {
        console.log("Red is clicked");
        event.stopPropagation(); // it stop propation of event to its' parent element
      });
    }

    // Cleanup to remove the event listener when the component unmounts
    return () => {
      if (yellowData) {
        yellowData.removeEventListener("click", () => {
          console.log("yellow is clicked");
        });
      }
      if (greenData) {
        greenData.removeEventListener("click", () => {
          console.log("green is clicked");
        });
      }
      if (redData) {
        redData.removeEventListener("click", () => {
          console.log("red is clicked");
        });
      }
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <>
      <div className="yellow">
        <div className="green">
          <div className="red"></div>
        </div>
      </div>
    </>
  );
};

export default Eventbubbling;
