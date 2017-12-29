// client/src/pages/Profile/Signup.js
import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";
import { FormBtn, FormDiv, Input, TextArea } from "../../components/Form";
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
    console.log('the button was clicked');
    var displayname = this.state.displayname;
    if (this.state.displayname && this.state.username && this.state.password) {
      API.saveArtist({
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
      <Container>
        <Nav>
          <NavLi>Home</NavLi>
          <NavLi>About</NavLi>
          <NavLi>My profile</NavLi>
          <NavLi>Log in</NavLi> 
        </Nav>
        <h1 className="my-4"><span className="fa fa-user-plus"></span> Sign up</h1>
        <form>
          <FormDiv>
            <label>Display Name</label>
            <Input
              value={this.state.displayname}
              onChange={this.handleInputChange}
              placeholder="Display name"
              name="displayname"
            />
          </FormDiv>
          <FormDiv>
            <label>Username</label>
            <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder="Username"
              name="username"
            />
          </FormDiv>
          <FormDiv>
            <label>Password</label>
            <Input 
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="Password"
              name="password"
            />
          </FormDiv>
            <FormBtn
              onClick={this.handleFormSubmit}>Sign up
            </FormBtn>
        </form>
        <hr/>
        <p>Already have an account? <a href="/">Log in</a></p>
        <p>Or click <a href="/home">Home</a></p>
    </Container>
    );
  }
}

export default Signup;