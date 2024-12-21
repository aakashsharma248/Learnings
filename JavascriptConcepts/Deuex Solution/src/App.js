import "./styles.css";
import { useState } from "react";
import Dashboard from "./Dashboard.js";
import UserDetail from "./UserDetail.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createContext } from "react";

export const userContext = createContext();

 function App() {
  const [users, setUsers] = useState([]);

  return (
    <userContext.Provider value={{ users, setUsers }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/user/:id" component={UserDetail} />
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
// userContext;
// Create a react program that consumes the following API - https://randomuser.me/api/?results=5
// Create 5 users using the API and show it on dashboard. You should show name and avatar.

// When clicking on the name a details page should open which should have other details.
//  (List few details and not all)

// The data should be persisted across in state(use context api),

// means if you call the API and the API has provided profile of ‘X’ user,
// we should not be calling the API again.
