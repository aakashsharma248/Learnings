import React, { memo } from "react";

const List = ({ count }) => {
  console.log("List component is rerendered");
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>{count}</li>
        <li>{count + 1}</li>
        <li>{count + 2}</li>
      </ul>
    </>
  );
};

export default List;

//  This is the first way of removing rerendered of component
// export default memo(List);
