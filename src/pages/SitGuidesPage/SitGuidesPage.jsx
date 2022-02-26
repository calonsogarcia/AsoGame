import React from "react";
import {Container} from "react-bootstrap"
import SitPopUp from "../../components/SitGuides/SitPopUp";

const SitGuides = () => {
  return (
    <Container className="d-flex-column align-items-center">
      <h3> Cómo llegar a tu asiento </h3>
      <SitPopUp />
    </Container>
  );
};

export default SitGuides;
