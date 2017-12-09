import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logon from "./pages/logon";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Jumbotron />
      <Nav />
      <Switch>
        <Route exact path="/" component={Logon} />

      </Switch>
    </div>
  </Router>;

export default App;
