import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    artist: {}
  };
  // When component did mount, grab the artist with the _id of this.props.match.params.id
  // e.g. localhost:3000/artists/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getArtist(this.props.match.params.id)
      .then(res => this.setState({ artist: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.artist.username} a.k.a. {this.state.artist.displayname}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <article>
              <h1>Password</h1>
              <p>
                {this.state.artist.password}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/home">← Home </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Detail;