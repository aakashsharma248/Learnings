import { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {userContext} from "./App.js";

const Dashboard = () => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const contextData = useContext(userContext);

  useEffect(() => {
   if(contextData?.users.length === 0)    
     fetchData();

  }, [contextData?.users]);

  // useEffect(() => {
  //  if(contextData?.users.length === 0)   
   
  //  Promise.all(
  //   Array(5).fill().map(()=>{
  //     return fetchData();
  //   })

  //  ).then((res)=> console.log(res,'11111111111111'));
  

  // }, [contextData?.users]);

  console.log(contextData?.users,'2222222222222222222222222');

  const API_URL = "https://randomuser.me/api/?results=5";

  const fetchData = async () => {
    try {
      setError(false);
      const userResult = await axios.get(API_URL);
      if (userResult) {
        contextData.setUsers(userResult?.data?.results);
      }
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  //   const fetchData = async () => {
  //   try {
  //     setError(false);
  //     const userResult = await axios.get(API_URL);
  //     if (userResult) {
  //       return userResult.data.results;
  //     }
  //   } catch (err) {
  //     setError(true);
  //     console.log(err);
  //   }
  // };

  const handleUserClick = (user) => {
    console.log(user, "user");
    history.push(`/user/${user?.id?.value}`);
  };

  return (
    <>
      {error ? (
        <h1>Encountered Error while fetching the data </h1>
      ) : (
        <>
          {contextData?.users?.map((user) => {
            return (
              <div key={user?.id?.value} onClick={() => handleUserClick(user)}>
                <h3>{user?.name?.first + " " + user?.name?.last} </h3>
                <img src={user?.picture?.large} alt={user?.name} />
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Dashboard;