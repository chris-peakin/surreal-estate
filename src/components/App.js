import '../styles/App.css';
import React, { Link, Route, Switch, Router } from 'react';
import NavBar from './NavBarComponent';
import AddProperty from './AddPropertyComponent';

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
      </Switch>
      <Route exact path="/add-property">
        <AddProperty />
      </Route>
    </Router>
  );
}

export default App;
