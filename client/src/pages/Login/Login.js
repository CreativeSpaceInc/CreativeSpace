import React, { Component } from "react";
import API from "../../utils/API";
import { Nav, NavLi } from "../../components/Nav";
import { Container } from "../../components/Grid";
import { FormBtn, FormDiv, Input } from "../../components/Form";

class Login extends Component {

    state = {
      username: "",
      displayname: "",
      password: "",
      id: ""
    };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      getArtistId = (username) => {
        console.log(username);
        API.getArtistId(username)
        // .then(res => console.log(`The id is ${res.data._id}`))
        .then(res => this.setState({ id: res.data._id }))
        .then(console.log(this.state.id))
        .catch(err => console.log(err));
      };

      handleFormSubmit = event => {
        event.preventDefault();
        console.log(`handleFormSubmit username is ${this.state.username}`)
        if (this.state.username && this.state.password) {
          API.login({
            username: this.state.username,
            password: this.state.password
          })
            .then(res => this.getArtistId(this.state.username))
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
          <NavLi>Sign up</NavLi>
      </Nav>
      <form>
        <h1 className="my-4"><i className="fa fa-sign-in"></i> Log in</h1>
        <FormDiv>
          <label>Current Id: {this.state.id}</label>
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
