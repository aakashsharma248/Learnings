import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import modifyCount from "./Action/modifyCount";
import "./Home.css"

const Home = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state);
  // console.log(stateData, "stateData");

  // Imp
  // here after fetching the data i am not using state to use the data instead I am using redux 
  // with this we don't need to use "useState" hook
  useEffect(() => {
    console.log("Home component is mounted");


    const fetchData = async () => {
      if (stateData.users.length === 0) {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //   .then((res) => {
        //     return res.json();
        //   })
        //   .then((data) => {
        //     console.log(data, "data");
        //     dispatch(modifyCount("SET_USER", data));
        //   });
        const readableData = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await readableData.json();
        dispatch(modifyCount("SET_USER", data));
        console.log(data, "data");
      }

    }

    fetchData();


    return () => {
      console.log("Home component is unmounted");
    };
  }, []);

  const onClickHandler = () => {
    console.log("Home Component onclick handler is called");
    dispatch(modifyCount("increment", 2));
    navigate("/users", { state: { id: 7, color: "green" } });
  };

  return (
    <div style={{ backgroundColor: "grey", height: "100vh" }}>
      <div style={{backgroundColor: "beige"}}>
      <h1 style={{ display: "inline-block", marginTop: "10px" }}>
        {" "}
        This is a home component - Redirected {stateData.moveCount} Times
      </h1>
      <button
        onClick={onClickHandler}
        className="changeButton" 
      >
        Redirect to the users component
      </button>
      </div >
      {stateData &&
        stateData.users &&
        stateData.users.length > 0 &&
        stateData.users.map((user) => {
          return (
            <div style={{marginTop: "20px"}}>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    minWidth: "250px",
                    marginLeft: "20px",
                  }}
                >
                  Name: {user.name}
                </span>
                <span>&nbsp; &nbsp; &nbsp;</span>
                <span>Email: {user.email} </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
