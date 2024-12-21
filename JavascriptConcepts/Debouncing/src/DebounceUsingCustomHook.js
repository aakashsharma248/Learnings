import React, { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

const Debounce = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiData, setApiData] = useState([]);

  const delay = 3000;

  const data = useDebounce(inputValue, delay);

  useEffect(() => {
    if (data) {
      setApiData(data);
      console.log(data, "new Data is being fetched");
    }
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

export default Debounce;
