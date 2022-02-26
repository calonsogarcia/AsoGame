import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";

const SitPopUp = (props) => {
  const {showSitLocationComponent} = props

  return (
    <>
      {["bottom"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Body>
                Introduce el código de tu entrada y te indicaremos cómo llegar a tu asiento
                <br></br>
                <input />
                <Button variant="secondary" onClick={showSitLocationComponent}>Go</Button>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary" >¿Cuál es tu código?</Button>
        </OverlayTrigger>
      ))}
    </>
  );
};
export default SitPopUp;
