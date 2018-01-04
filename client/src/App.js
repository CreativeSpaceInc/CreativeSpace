// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import Editprofile from "./pages/Editprofile";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Signup from "./pages/SignUp";
import Upload from "./pages/Upload";
// import Artists from "./pages/Artists";

import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/artists/:id" component={Detail} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/editprofile" component={Editprofile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/upload" component={Upload} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
