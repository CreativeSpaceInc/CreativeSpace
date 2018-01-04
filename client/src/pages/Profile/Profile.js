// client/src/pages/Profile/Profile.js
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";

class Profile extends Component {
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
          <NavLi>Edit profile</NavLi>
          <NavLi>Log out</NavLi>
        </Nav>
        <Row>
          <Col size="md-8">
            <h2 className="my-4" style={{textDecoration: "underline"}}><i className="fa fa-user"></i> My Profile</h2>
          </Col>
          <Col size="md-4">
            <a href="/Editprofile"><h2 className="my-4"><i className="fa fa-pencil-square-o"></i> Edit My Profile</h2></a>
          </Col>
        </Row><hr />
        <Row>
          <Col size="md-8">
            <h1 className="my-4">Featured Creations</h1>
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
              <ol className="carousel-indicators">
                <CarLi data-slide-to="0" className="active"></CarLi>
                <CarLi data-slide-to="1"></CarLi>
                <CarLi data-slide-to="2"></CarLi>
              </ol>
              <CarDiv>
                <CarItem className="active">
                  <CarImg
                    src="http://placehold.it/900x350"
                    alt="First slide">
                  </CarImg>
                </CarItem>
                <CarItem>
                  <CarImg
                    src="http://placehold.it/900x350"
                    alt="Second slide">
                  </CarImg>
                </CarItem>
                <CarItem>
                  <CarImg
                    src="http://placehold.it/900x350"
                    alt="Third slide">
                  </CarImg>
                </CarItem>
              </CarDiv>
              <CarA
                className="carousel-control-prev"
                data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </CarA>
              <CarA
                className="carousel-control-next"
                data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </CarA>
            </div>
            <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
              <tbody>
              <tr>
                <td style={{paddingBottom:"15px",paddingRight:"15px",borderRight:"2px solid gray"}}>Title</td>
                <td id="featured-creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/">Creation Title</a></td>
              </tr>
              <tr>
                <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                <td id="featured-creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</td>
              </tr>
              </tbody>
            </table>
          </Col>
          <Col size="md-4">
            <h1 id="display-name" className="my-4">Display Name</h1>
            <img id="avatar" className="img-fluid" src="http://placehold.it/150x150" alt="Creator Profile Avatar" />
            <h3 className="my-3">Creator Bio</h3>
            <p id="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
            <h3 className="my-3">Creator Details</h3>
            <table>
            <tbody>
              <tr>
                <td style={{paddingRight:"15px",borderRight:"2px solid gray"}}>Username</td>
                <td id="username" style={{paddingLeft:"15px"}}>123Fire</td>
              </tr>
              <tr>
                <td style={{paddingRight:"15px",borderRight:"2px solid gray"}}>E-mail</td>
                <td id="email" style={{paddingLeft:"15px"}}><a href="/">email@gmail.com</a></td>
              </tr>
              <tr>
                <td style={{paddingRight:"15px",borderRight:"2px solid gray"}}>Detail</td>
                <td id="title" style={{paddingLeft:"15px"}}>Detail</td>
              </tr>
              <tr>
                <td style={{paddingRight:"15px",borderRight:"2px solid gray"}}>Details</td>
                <td id="location" style={{paddingLeft:"15px"}}>Details</td>
              </tr>
            </tbody>
            </table>
          </Col>
        </Row>
        <h3 className="my-4">Archives</h3>
        <Row>
          <Col size="sm-6 md-3" className="mb-4" name="1">
            <a href="/">
              <ArchImg
                src="http://placehold.it/500x300"
                name="1">
              </ArchImg>
              <p>Creation Title</p>
            </a>
          </Col>
          <Col size="sm-6 md-3" className="mb-4" name="2">
            <a href="/">
              <ArchImg
                src="http://placehold.it/500x300"
                name="2" />
              <p>Creation Title</p>
            </a>
          </Col>
          <Col size="sm-6 md-3" className="mb-4" name="3">
            <a href="/">
              <ArchImg
                src="http://placehold.it/500x300"
                name="3" />
              <p>Creation Title</p>
            </a>
          </Col>
          <Col size="sm-6 md-3" className="mb-4" name="4">
            <a href="/">
              <ArchImg
                src="http://placehold.it/500x300"
                name="4" />
              <p>Creation Title</p>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Profile;
