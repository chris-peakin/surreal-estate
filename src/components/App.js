import "../styles/App.css";
import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBarComponent";
import AddProperty from "./AddPropertyComponent";
import Properties from "./PropertiesComponent";

function App() {
  return (
    <Router>
      <h2>Surreal Estate</h2>
      <NavBar>
        <Link className="item" to="/">
          View Properties
        </Link>
        <Link className="item" to="/add-property">
          Add Properties
        </Link>
      </NavBar>
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
