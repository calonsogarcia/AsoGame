import { Container } from "react-bootstrap";
import "./ScoreBoard.css";
import barçaLogo from "../../assets/images/FCB1.png";
import badaHuescaLogo from "../../assets/images/badahuesca.png";

const ScoreBoard = () => {
  return (
    <Container className="score-board">
      <p className="m-1">BARÇA</p>
      <img src={barçaLogo} className="m-1" width="30" height="30" />
      <p className="m-1">2 - 1</p>
      <img src={badaHuescaLogo} className="m-1" width="30" height="30" />
      <p className="m-1">Bada Huesca</p>
    </Container>
  );
};

export default ScoreBoard;
