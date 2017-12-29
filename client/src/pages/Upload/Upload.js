// client/src/pages/Profile/Profile.js
import React, { Component } from "react";
import API from "../../utils/API";
import { Nav, NavLi } from "../../components/Nav";
import DisplayMessage from "../../components/DisplayMessage";
// import { Link } from "react-router-dom";
import { FormBtn, FormDiv, Input, TextArea } from "../../components/Form";
import { Col, Container, Row } from "../../components/Grid";
import "./Upload.css";

class Upload extends Component {
  state = {
    title: "",
    url: "",
    description: "",
    artist: "5a34a9d1afaabc1820db0b32",
    message: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  successMessage = () => {
    this.setState({ 
      message: 'Success! Your creation has been saved.',
      className: "success" 
    });
  };
  failMessage = () => {
    this.setState({
      message: '* Please indicate a url and title',
      className: "danger"
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    console.log('the button was clicked');
    if (this.state.url && this.state.title) {
      API.saveCreation({
        url: this.state.url,
        title: this.state.title,
        description: this.state.description,
        artist: this.state.artist
      })
        .then(res => this.successMessage())
        .catch(err => console.log(err));
    } else {
      this.failMessage();
    }
  };

  render() {
    return (
      <Container>
        <Nav>
          <NavLi>Home</NavLi>
          <NavLi>About</NavLi>
          <NavLi>My profile</NavLi>
          <NavLi>Log out</NavLi>                    
        </Nav>
        <h1 className="my-4"><i className="fa fa-picture-o"></i> Upload Your Creation</h1>
        <DisplayMessage 
          value={this.state.message}
          onChange={this.handleInputChange}
          className={this.state.className}
          name="message">{this.state.message}
        </DisplayMessage>
        <form>
          <FormDiv>
            <label>URL of creation you would like to add your profile</label>
            <Input
              value={this.state.url}
              onChange={this.handleInputChange}
              id="input-creation-url"
              name="url"
              placeholder="URL"
            />
          </FormDiv>
          <FormDiv>
            <label>Title of creation you would like to add to your profile</label>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              id="input-creation-title"
              name="title"
              placeholder="Title"
            />
          </FormDiv>
          <FormDiv>
            <label>Description of creation you would like to add to your profile</label>
            <TextArea
              value={this.state.description}
              onChange={this.handleInputChange}
              id="input-creation-description"
              name="description"
              placeholder="Description"
            />
          </FormDiv>
            <FormBtn
              id="save-creation"
              onClick={this.handleFormSubmit}>Save Creation
            </FormBtn>
        </form>
      </Container>
    );
  }
}

export default Upload;