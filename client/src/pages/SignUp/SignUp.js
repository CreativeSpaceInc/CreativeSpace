import React, { Component } from "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    displayname: "",
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  displayMessage = (displayname) => {
    alert(`Welcome ${displayname} to CreativeSpace.`)
  };

  handleFormSubmit = event => {
    event.preventDefault();
    var displayname = this.state.displayname;
    if (this.state.displayname && this.state.username && this.state.password) {
      API.addArtist({
        displayname: this.state.displayname,
        username: this.state.username,
        password: this.state.password
      })
        .then(res => this.displayMessage(displayname))
        .catch(err => console.log(err));
    } else {
      alert('All fields are required.')
    }
  };

  render() {
    return (
//Begin Copy

<div className="container">
        <h1><span className="fa fa-user-plus"></span> Sign up</h1>
        <form action="/signup" method="post">

        <div className="form-group">
            <label>Display Name</label>
            <input
            value={this.state.displayname}
            onChange={this.handleInputChange}
            type="text"
            className="form-control" name="displayname"/>
        </div>

        <div className="form-group">
            <label>Username</label>
            <input
            value={this.state.username}
            onChange={this.handleInputChange}
            type="text"
            className="form-control"
            name="username"/>
        </div>


        <div className="form-group">
            <label>Password</label>
            <input type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            className="form-control"
            name="password"/>
        </div>
            <button type="submit" className="btn btn-primary btn-lg" onClick={this.handleFormSubmit} >Sign up</button>
        </form>
        <hr/>
        <p>Already have an account? <a href="/signup">Log in</a></p>
        <p>Or click <a href="/">Home</a></p>


</div>

    );
  }
}

export default Signup;
