import { Container } from "react-bootstrap";
import "./ScoreBoard.css";
import franklinLogo from "../../assets/images/franklin.png";
import badaHuescaLogo from "../../assets/images/badahuesca.png";

const ScoreBoard = () => {
  return (
    <Container className="score-board">
      <p className="m-1">Franklin BM...</p>
      <img src={franklinLogo} className="m-1" width="30" height="30" />
      <p className="m-1">2 - 1</p>
      <img src={badaHuescaLogo} className="m-1" width="30" height="30" />
      <p className="m-1">Bada Huesca</p>
    </Container>
  );
};

export default ScoreBoard;
