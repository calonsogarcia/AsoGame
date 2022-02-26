import { Col, Container, Row } from "react-bootstrap";
import logoPitch from "../../assets/images/pitch.png";
import logoBadaHuesca from "../../assets/images/badahuesca.png";
import logoPlayersBadaHuesca from "../../assets/images/players-bada-huesca.png";
import logoFCB from "../../assets/images/FCB1.png";
import logoPlayersBarça from "../../assets/images/players-barça.png";

const MatchDetails = () => {
  return (
    <Container className="d-flex flex-column justify-content-center">
      <Row>
        <Col className="mb-3">
          <Col className="d-flex justify-content-start mb-4">
            <img src={logoBadaHuesca} width="30" height="30" />
            <p className="m-1">Bada Huesca</p>
          </Col>
          <img src={logoPlayersBadaHuesca} />
        </Col>
        <img src={logoPitch} className="mb-3" />
        <Col>
          <Col className="d-flex justify-content-start mb-4">
            <img src={logoFCB} className="mt-2" width="30" height="30" />
            <p className="m-2">BARÇA</p>
          </Col>
          <img src={logoPlayersBarça} />
        </Col>
      </Row>
    </Container>
  );
};

export default MatchDetails;
