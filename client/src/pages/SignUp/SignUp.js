// client/src/pages/Profile/Signup.js
import React, { Component } from "react";
import API from "../../utils/API";
import { Nav, NavLi } from "../../components/Nav";
// import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    username: "",
    displayname: "",
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
    console.log('the button was clicked');
    var displayname = this.state.displayname;
    if (this.state.displayname && this.state.username && this.state.password) {
      API.saveArtist({
        username: this.state.username,
        displayname: this.state.displayname,
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

<div className="container">
        <Nav />
        <h1><span className="fa fa-user-plus"></span> Sign up</h1>

        <form>

          <div className="form-group">
              <label>Username</label>
              <input
                value={this.state.username}
                onChange={this.handleInputChange}
                type="text"
                className="form-control"
                name="username"
              />
          </div>

          <div className="form-group">
              <label>Display Name</label>
              <input
                value={this.state.displayname}
                onChange={this.handleInputChange}
                type="text"
                className="form-control"
                name="displayname"
              />

          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
                name="password"
              />
          </div>

              <button
              type="submit"
              className="btn btn-primary btn-lg" onClick={this.handleFormSubmit}>Sign up
              </button>

        </form>
        <hr/>
        <p>Already have an account? <a href="/">Log in</a></p>
        <p>Or click <a href="/">Home</a></p>


</div>

    );
  }
}

export default Signup;
