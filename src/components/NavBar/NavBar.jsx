import React from "react";
import { Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import logoUser from "../../assets/images/user.png"
import logoCoin from "../../assets/images/coin.jpeg"

const NavBar = () => {

  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <img
        src={logoCoin}
        width="60"
        height="30"
        className="d-inline-block align-top ml-5"
        alt="coin icon"
      />
      <p>150</p>
        <img
        src={logoUser}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="user icon"
      />
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
                <Nav.Link href="">Sign Up</Nav.Link>
                <Nav.Link href="">Log In</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
