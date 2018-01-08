// client/src/pages/Profile/Profile.js
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";

class Home extends Component {
  state = {
    artist: "5a34a9d1afaabc1820db0b32"
  };

  render() {
    return (
      <div>
      <Container>
        <Nav>
          <NavLi>Home</NavLi>
          <NavLi>About</NavLi>
          <NavLi>Search</NavLi>
          <NavLi>Edit profile</NavLi>
          <NavLi>Log out</NavLi>
        </Nav>
        <br /> <br />
        <Row>
             <div class="col-lg-3 col-md-3">
                <h2 class="my-4 rotate">Browse Creations:</h2>
                <div class="list-group">
                  <a href="#" class="list-group-item mouseoverStyle">Artwork</a>
                  <a href="#" class="list-group-item mouseoverStyle">Music</a>
                  <a href="#" class="list-group-item mouseoverStyle">Writing</a>
                  <a href="#" class="list-group-item mouseoverStyle">Video</a>
                </div>
              </div>

              <div id="carouselExampleSlidesOnly" class="carousel slide col-lg-9 col-md-9" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src="http://placehold.it/900x350" alt="First slide"></img>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Second slide"></img>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Third slide"></img>
                      </div>
                    </div>
              </div>
      </Row>
               <br />      <br />
      
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
      </div>
    );
  }
}
export default Home;

