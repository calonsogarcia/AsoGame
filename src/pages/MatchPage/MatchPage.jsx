import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import MatchDetails from "../../components/MatchDetails/MatchDetails";
import ScoreBoard from "../../components/ScoreBoard/ScoreBoard";
import "./MatchPage.css";
import MatchCommunity from "../../components/MatchCommunity/MatchCommunity";

const MatchPage = () => {
  const [showMatchDetails, setShowMatchDetails] = useState(true);
  const [showMatchCommunity, setShowMatchCommunity] = useState(false);

  const showDetails = () => {
    setShowMatchDetails(true);
    setShowMatchCommunity(false);
  };
  const showCommunity = () => {
    setShowMatchCommunity(true);
    setShowMatchDetails(false);
  };
  return (
    <>
      <ScoreBoard />
      <Container className="mt-5 container-info-match">
        <Row>
          <Col className="d-flex justify-content-center">
            <Button variant="ligth" onClick={showCommunity}>
              Comunidad
            </Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button variant="ligth" onClick={showDetails}>
              Partido
            </Button>
          </Col>
        </Row>
      </Container>
      {showMatchDetails && <MatchDetails />}
      {showMatchCommunity && <MatchCommunity />}
    </>
  );
};

export default MatchPage;
