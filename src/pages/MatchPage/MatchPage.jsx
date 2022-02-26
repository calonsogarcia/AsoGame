import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import MatchDetails from "../../components/MatchDetails/MatchDetails";
import ScoreBoard from "../../components/ScoreBoard/ScoreBoard";
import "./MatchPage.css";

const MatchPage = () => {
  const [showMatchDetails, setShowMatchDetails] = useState(false);
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
            <p className="" onClick={showCommunity}>Comunidad</p>
          </Col>
          <Col className="d-flex justify-content-center">
            <p className="" onClick={showDetails}>Partido</p>
          </Col>
        </Row>
      </Container>
      {showMatchDetails && <MatchDetails />}
    </>
  );
};

export default MatchPage;
