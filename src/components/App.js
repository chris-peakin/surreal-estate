import "../styles/App.css";
import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBarComponent";
import AddProperty from "./AddPropertyComponent";
import Properties from "./PropertiesComponent";

function App() {
  const [userId, setUserId] = useState("");

  const onLogin = (response) => {
    setUserId(response.userID);
  };

  const onLogout = () => {
    window.FB.logout();
    setUserId("");
  };

  return (
    <Router>
      <NavBar userId={userId} onLogin={onLogin} onLogout={onLogout} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Properties {...props} userId={userId} />}
        />
        <Route exact path="/add-property">
          <AddProperty />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
