import React from "react";
import {Container} from "react-bootstrap"
import SitPopUp from "../../components/SitLocation/SitPopUp";
import SitLocationComponent from "../../components/SitLocation/SitLocationComponent"

const SitGuides = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h3> Cómo llegar a tu asiento </h3>
      <SitPopUp />
      <SitLocationComponent />
    </Container>
  );
}

export default SitGuides;
