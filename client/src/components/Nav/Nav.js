import React from "react";
// import { Col, Container, Row } from "../Grid";
import { Container } from "../Grid";

export const Nav = ({ children }) =>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Container>
          <a className="navbar-brand" href="/">CreativeSpace</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {children}
            </ul>
          </div>
        </Container>
      </nav>;
