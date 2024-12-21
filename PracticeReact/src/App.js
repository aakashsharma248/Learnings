import React,{useState} from 'react';
import "./styles.css";
// used lazy loading to avoid loading
const UserData = React.lazy(() => import("./UserData"));
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from 'react';
import UserDetail from "./UserDetail";
import Form from "./Form";

// While using context api always create it at the top and above the component
// always better to pass the context Initial value as empty object
export const MyContext = React.createContext({});

export default function App() {
  const [data, setData] = useState([]);
  return (
    <MyContext.Provider value={{data, setData}}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/users"
          element={
            <React.Suspense fallback={<h1>User Data is loading</h1>}>
              <UserData />
            </React.Suspense>
          }
        />
         <Route
          exact
          path="/users/:id"
            element={
              <UserDetail />
          }
        />
         <Route
          exact
          path="/contact-me"
            element={
              <Form />
          }
        />
      </Routes>
    </BrowserRouter>
    </MyContext.Provider>
  );
}
