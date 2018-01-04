import React, { Component } from "react";
import { Nav, NavLi } from "../../components/Nav";
import { Container } from "../../components/Grid";
import { FormBtn, FormDiv, Input } from "../../components/Form";

class Login extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };
  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };
  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <Container>
      <Nav>
          <NavLi>Home</NavLi>
          <NavLi>About</NavLi>
          <NavLi>My profile</NavLi>
          <NavLi>Sign up</NavLi> 
      </Nav>
      <form>
        <h1 className="my-4"><i class="fa fa-sign-in"></i> Log in</h1>
        <FormDiv>
          <label>Username: {this.state.username}</label>
          <Input
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </FormDiv>
        <FormDiv>
          <label>Password: {this.state.password}</label>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </FormDiv>
        <FormBtn 
          onClick={this.handleFormSubmit}>Log in
        </FormBtn>
      </form>
      <hr />
      <p>Don't have an account? <a href="/">Sign up</a></p>
      <p>Or click <a href="/home">Home</a></p>
      </Container>
    );
  }
}

export default Login;