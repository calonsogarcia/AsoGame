import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import polideportivo from "../../assets/images/polideportivo.png";
import direction from "../../assets/images/direction.png";
import sit from "../../assets/images/sit.png";
import "./SitLocationComponent.css";

const SitLocationComponent = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={polideportivo} />
        <Card.Body>
          <Card.Title>
            <img
              id="logo-img"
              src={direction}
              width="10"
              height="10"
              className="m-2"
              alt="equip icon"
            />
            <strong>Ubicación actual: Puerta N5</strong>
          </Card.Title>
          <Card.Text>
            <strong>Tu asiento es el 4 - fila 5</strong>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Camina por el pasillo B hasta la salida 2
          </ListGroupItem>
          <ListGroupItem>
            Gira a la derecha y sal por la salida 2 (junto a la cafetería)
          </ListGroupItem>
          <ListGroupItem>
            Continúa recto bajando por las escaleras hasta llegar a la fila 5
          </ListGroupItem>
          <ListGroupItem>Gira a la izquierda y camina 10 metros</ListGroupItem>
          <ListGroupItem>
            <img
              id="logo-img"
              src={sit}
              width="15"
              height="15"
              className="m-2"
              alt="equip icon"
            />
            <strong>Has llegado a tu asiento</strong>
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link
            href="/match"
            className="d-flex justify-content-center card-link"
          >
            <Button className="sit-button">Finalizar</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};
export default SitLocationComponent;
