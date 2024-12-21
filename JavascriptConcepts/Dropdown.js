import React, { useState, useEffect } from "react";

const Dropdown = () => {
  const [value, setValue] = useState("");
  const [filteredWords, setFilteredWords] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let relatedWords = [];
      if (value !== "") {
        console.log("coming under if block");
        const databaseProduct = fetchProduct();
        databaseProduct.then((res) => {
          // console.log(res, "res");
          relatedWords = res.filter((ele) => {
            return ele.toLowerCase().includes(value.toLowerCase());
          });
          console.log(relatedWords, "relatedWords");
          setFilteredWords(relatedWords);
        });
      } else {
        setFilteredWords(relatedWords);
      }
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  const fetchProduct = () => {
    console.log("Api is being called");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          "Shoes",
          "Adidas",
          "Nike",
          "Shirt",
          "Skirt",
          "Short Dress",
          "One Piece",
          "Jeans",
          "Jockey Jeans",
        ]);
      }, 3000);
    });
  };

  const onValueChange = (e) => {
    const word = e.target ? e.target.value : e;
    // console.log(word, "word");
    setValue(word);
  };

  return (
    <>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <li>
          <input
            placeholder="Search for Product"
            value={value}
            onChange={onValueChange}
            style={{ width: "300px" }}
          />
        </li>
        {filteredWords &&
          filteredWords.map((word, idx) => {
            return (
              <li
                onClick={() => onValueChange(word)}
                style={{
                  border: "1px solid green",
                  width: "300px",
                  backgroundColor: "black",
                  color: "white",
                }}
                key={idx}
              >
                {word}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Dropdown;
