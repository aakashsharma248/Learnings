import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  const location = useLocation();
  console.log(location, "location");
  const data = location.state.filterData[0];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-me");
  }
  return (
    <div style={{ padding: "20px", backgroundColor: "green", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>This is a UserDetail component</h1>
        <button
          style={{
            height: "35px",
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={handleClick}
        >
          Contact Me
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "yellow",
          marginTop: "10px",
        }}
      >
        <div style={{ marginTop: "20px", padding: "5px" }}>
          <div>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>Name:</span>
            <span style={{ fontSize: "20px" }}>{data.username}</span>
          </div>
          <div>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              lastName:
            </span>
            <span style={{ fontSize: "20px" }}>{data.lastName}</span>
          </div>
          <div>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>Email:</span>
            <span style={{ fontSize: "20px" }}>{data.email}</span>
          </div>
        </div>

        <div style={{ padding: "5px" }}>
          <img src={data.image} alt={"Image is loading..."} />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
