import { React, useState } from "react";
import { Container } from "react-bootstrap";
import SitPopUp from "../../components/SitLocation/SitPopUp";
import SitLocationComponent from "../../components/SitLocation/SitLocationComponent";

const SitGuides = () => {
  const [showSitLocation, setshowSitLocation] = useState(false);

  const showSitLocationComponent = () => {
    setshowSitLocation(true);
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h3> Cómo llegar a tu asiento </h3>
      {!showSitLocation ? (
        <SitPopUp showSitLocationComponent={showSitLocationComponent} />
      ) : (
        <SitLocationComponent />
      )}
    </Container>
  );
};

export default SitGuides;
