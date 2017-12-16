// client/src/pages/Profile/Profile.js
import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
// import { Link } from "react-router-dom";


class Profile extends Component {
  state = {
    title: "",
    url: "",
    description: "",
    artist: "5a34a9d1afaabc1820db0b32"
  };



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  displayMessage = () => {
    alert(`Your creation has been saved.`)
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('the button was clicked');
    if (this.state.title && this.state.url) {
      API.saveCreation({
        title: this.state.title,
        url: this.state.url,
        description: this.state.description,
        artist: this.state.artist
      })
        .then(res => this.displayMessage())
        .catch(err => console.log(err));
    } else {
      alert('Please indicate a title and url.')
    }
  };

  render() {
    return (

  <div className="container">
    <Nav />
    <h3 className="my-4">Archives</h3>

    <form>

      <div className="form-group">
          <label>Title of creation you would like to add to your profile <strong>(NOT featured)</strong></label>
          <input
            value={this.state.title}
            onChange={this.handleInputChange}
            id="input-creation-title"
            type="text"
            className="form-control"
            name="title"
          />
      </div>

      <div className="form-group">
          <label>URL of creation you would like to add your profile <strong>(NOT featured)</strong></label>
          <input
            value={this.state.url}
            onChange={this.handleInputChange}
            id="input-creation-url"
            type="text"
            className="form-control"
            name="url"
          />
      </div>

      <div className="form-group">
          <label>Description of creation you would like to add to your profile <strong>(NOT featured)</strong></label>
          <textarea
            value={this.state.description}
            onChange={this.handleInputChange}
            id="input-creation-description"
            type="text"
            className="form-control"
            name="description"
            ></textarea>

          <button
            id="save-creation-description"
            type="submit"
            className="btn btn-warning btn-block"
            onClick={this.handleFormSubmit}>Save Changes</button>
      </div>

    </form>



  </div>

    );
  }
}

export default Profile;
