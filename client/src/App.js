import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logon from "./pages/logon";
import Signup from "./pages/SignUp";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route exact path="/Signup" component={Signup} />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
