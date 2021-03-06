import React from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import logoUser from "../../assets/images/user.png";
import logoCoin from "../../assets/images/coin.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar id="navbar" expand="lg">
      <Container className="">
        <Row xs="" className="">
          <Col className="d-flex align-items-center">
            <img
              src={logoUser}
              width="40"
              height="40"
              className="m-2"
              alt="user icon"
            />
            <img
              id="coin-img"
              src={logoCoin}
              width="20"
              height="20"
              className="m-2"
              alt="coin icon"
            />
            <p className="mt-3">150</p>
          </Col>
          <Col className="container-menu d-flex flex-column">
            <Navbar.Toggle
              id="navbar-toggle"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Brand href="/">Aso Game</Navbar.Brand>
              <Nav className="me-auto"></Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
