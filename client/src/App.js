import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
// import Artists from "./pages/Artists";
import Detail from "./pages/Detail";

import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/artists/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
