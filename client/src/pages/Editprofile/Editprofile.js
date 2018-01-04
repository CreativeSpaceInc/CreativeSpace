// client/src/pages/Profile/Profile.js
import React, { Component } from "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { FormBtn, FormDiv, Input, TextArea } from "../../components/Form";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";

class Editprofile extends Component {
  state = {
    artist: "5a34a9d1afaabc1820db0b32"
  };

  render() {
    return (
      <Container>
        <Nav>
          <NavLi>Home</NavLi>
          <NavLi>About</NavLi>
          <NavLi>Search</NavLi>
          <NavLi>Profile</NavLi>
          <NavLi>Log out</NavLi>                    
        </Nav>
        <Row>
          <Col size="md-8">
            <h2 style={{textDecoration: "underline"}}><i className="fa fa-pencil-square-o" ></i>Edit My Profile</h2>
          </Col>
          <Col size="md-4">
            <a href="/profile"><h2><i className="fa fa-eye"></i> View My Profile</h2></a>
          </Col>
        </Row> <hr />
        <Row>
          <Col size="md-8">
            <h3 className="my-4">Archives</h3>
            <form action="profile.html" method="get" id="archives-background">
              <FormDiv>
                <label>URL of creation you would like to add your profile <strong style={{color:"red"}}>(NOT featured)</strong></label>
                <Input 
                  id="input-creation-url" />
                <FormBtn
                  id="save-creation-url" 
                  style={{backgroundColor:"orange"}}>Save Changes</FormBtn>
              </FormDiv>
              <FormDiv>
                <label>Title of creation you would like to add to your profile <strong style={{color:"red"}}>(NOT featured)</strong></label>
                <Input 
                  id="input-creation-title" />
                <FormBtn
                  id="save-creation-title" 
                  style={{backgroundColor:"orange"}}>Save Changes</FormBtn>
              </FormDiv>            
              <FormDiv>
                <label>Description of creation you would like to add to your profile <strong style={{color:"red"}}>(NOT featured)</strong></label>
                <TextArea 
                  id="input-creation-description"
                  type="text" />
                <FormBtn
                  id="save-creation-description" 
                  style={{backgroundColor:"orange"}}>Save Changes</FormBtn>
              </FormDiv>            
            </form>
          </Col> 
          <Col size="md-4">
            <h3 className="my-4">Creator Details</h3>
            <form action="profile.html" method="post">
              <FormDiv>
                <label>Display Name you would like on your profile</label>
                <Input 
                  id="input-display-name" />
                <FormBtn 
                  id="save-display-name"
                  style={{backgroundColor:"orange"}}>Save Changes</FormBtn>
              </FormDiv>
              <FormDiv>
                <label>URL of your chosen avatar (will be displayed within 150px by 150px)</label>
                <Input 
                  id="input-avatar" />
                <FormBtn
                  id="save-avatar"
                  style={{backgroundColor:"orange"}}>Save Changes</FormBtn>
              </FormDiv>
              <FormDiv>
                <label>Bio you would like displayed on your profile</label>
                <TextArea 
                  id="input-bio" 
                  type="text" />
                <FormBtn 
                  id="save-bio"
                  style={{backgroundColor:"orange"}}>Save Changes</FormBtn>
              </FormDiv>
            </form> 
          </Col>
          <Col size="md-8">
              <h3 className="my-3">Account Details</h3>
              <form action="profile.html" method="post" id="featured-background">
              <FormDiv>
                <label>Username</label>
                <Input 
                  id="input-username" />
                <FormBtn 
                  id="save-username"
                  style={{backgroundColor:"orange"}}>Save Changes</FormBtn>
              </FormDiv>
              <FormDiv>
                <label>E-mail address</label>
                <Input id="input-email" />
                <FormBtn
                  id="save-email"
                  style={{backgroundColor:"orange"}}>Save Changes</FormBtn>
              </FormDiv>
              <FormDiv>
                <label>Title</label>
                <Input id="input-title" />
                <FormBtn
                  id="save-title"
                  style={{backgroundColor:"orange"}}>Save Changes</FormBtn>
              </FormDiv>
              <FormDiv>
                <label>Location</label>
                <Input 
                  id="input-location" />
                <FormBtn
                  id="save-location"
                  style={{backgroundColor:"orange"}}>Save Changes</FormBtn>
              </FormDiv>   
            </form>       
          </Col>
        </Row>
    </Container>
    );
  }
}
export default Editprofile;