import React, { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [updatedData, setUpdatedData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      // make api call here
      console.log("timeout is called");
      const newData = [1, 2, 3, Math.floor(Math.random() * 9)];
      setUpdatedData(newData);
    }, delay);
  }, [value, delay]);

  return updatedData;
};

export default useDebounce;
