import "../styles/App.css";
import React, { Link, Route, Switch } from 'react';
// import Switch from 'react-router-dom';
import NavBar from './NavBarComponent';
import AddProperty from "./AddPropertyComponent";

function App() {
  return (
    <>
      <h2>Surreal Estate</h2>
      <NavBar>
        <Link className="item" to="/">
          View Properties
        </Link>
        <Link className="item" to="add-property">
          Add Properties
        </Link>
      </NavBar>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/add-property" component={Properties}>
          <AddProperty />
        </Route>
      </Switch>
    </>
  );
}

export default App;
