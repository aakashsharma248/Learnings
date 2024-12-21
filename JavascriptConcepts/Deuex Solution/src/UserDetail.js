import React from "react";
import { useParams } from "react-router-dom";
import {userContext} from "./App.js";
import { useContext } from "react";

const UserDetail = () => {
  const { id } = useParams();
  const contextData = useContext(userContext);

  const selectedUser = contextData.users.find(user => user?.id?.value === id);

  console.log(selectedUser,'selectedUser');
  return (
    <>
      <h1>{id}</h1>
      <h2>{selectedUser?.name?.first}</h2>
      <h2>{selectedUser?.name?.last}</h2>
    </>
  );
};

export default UserDetail;
