import { Button, Container } from "react-bootstrap";
import comentsLogo from "../../assets/images/coments.png";
import { InputGroup, FormControl } from "react-bootstrap";
import logoCamara from "../../assets/images/camera.png";

const MatchCommunity = () => {
  return (
    <Container>
      <img src={comentsLogo} className="mt-3" />
      <InputGroup className="mt-4">
        <InputGroup.Text>
          <img src={logoCamara} />
        </InputGroup.Text>
        <FormControl as="textarea" aria-label="With textarea" />
        <Button variant="ligth">{"->"}</Button>
      </InputGroup>
    </Container>
  );
};

export default MatchCommunity;
