import React, { useReducer, useState } from "react";

/*
Key Points to remember while working with useReducer

1. React Component will get rerender when the state changes
2. "state" is defined to access the state within the Component
3. In reducer function "iniState" is defined to access state
4. dispatch function is used to call reducer with type and payload 
*/

const reducer = (iniState, action) => {
  console.log("this is a reducer");
  switch (action.type) {
    case "increment":
      return { value: iniState.value + action.payload };

    case "decrement":
      return { value: iniState.value - action.payload };

    default:
      return state;
  }
};

export const ReducerPractice = () => {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  const incrementCounter = () => {
    console.log("this is a update state");
    setCounter((prev) => prev + 1);
    dispatch({ type: "increment", payload: 5 });
  };

  const decrementCounter = () => {
    console.log("this is a update state");
    setCounter((prev) => prev - 1);
    dispatch({ type: "decrement", payload: 5 });
  };

  return (
    <>
      <h1>{counter}</h1>
      <h1>{state.value}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </>
  );
};

export default ReducerPractice;
