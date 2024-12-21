import React, { useState, useEffect } from "react";

const DebounceInSameComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (true) {
        // make api call here
        // setApiData(data);
        console.log("new Data is being fetched");
      }
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder={"Enter your text"}
      />
      {apiData.map((ele) => {
        return <h1>{ele}</h1>;
      })}
    </div>
  );
};

export default DebounceInSameComponent;
