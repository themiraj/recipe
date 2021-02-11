import React from 'react';
import Home from '../pages/home';
import Add from '../pages/add';
import Update from '../pages/update';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 
function Navbar() {
    return (
        <Router>
        <div>
          <div className="nav-wrapper">
            <ul >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add-ingredients">Add ingredients</Link>
              </li>
              <li>
                <Link to="/update">Update</Link>
              </li>
            </ul>
            </div>
            <div className="container">
                <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/add-ingredients">
                    <Add />
                </Route>
                <Route path="/update">
                    <Update />
                </Route>
                </Switch>
            </div>
          </div>
        </Router>
      );
}
 
export default Navbar;