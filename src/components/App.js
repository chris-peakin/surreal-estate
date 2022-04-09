import "../styles/App.css";
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBarComponent";
import AddProperty from "./AddPropertyComponent";
import Properties from "./PropertiesComponent";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property">
          <AddProperty />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
