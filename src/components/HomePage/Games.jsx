import { React } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import badahuesca from "../../assets/images/badahuesca.png";
import franklin from "../../assets/images/franklin.png";
import "./Games.css";

const Games = () => {
  return (
    <>
      <h1>Programación partidos</h1>
      <Table striped hover>
        <thead>
          <tr>
            <th colSpan={2}>Hoy: Sábado 26/02</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                id="logo-img"
                src={franklin}
                width="15"
                height="15"
                className="m-2"
                alt="equip icon"
              />
              Barça - Bidasoa
              <img
                id="logo-img"
                src={badahuesca}
                width="15"
                height="15"
                className="m-2"
                alt="equip icon"
              />
            </td>
            <td>18:00</td>
            <td>
              <Link to="/sitlocation"> {"->"} </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img
                id="logo-img"
                src={badahuesca}
                width="15"
                height="15"
                className="m-2"
                alt="equip icon"
              />
              Granollers - La Rioja
              <img
                id="logo-img"
                src={franklin}
                width="15"
                height="15"
                className="m-2"
                alt="equip icon"
              />
            </td>
            <td>17:30</td>
            <td>
              <Link to="/sitlocation">{"->"}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <img
                id="logo-img"
                src={franklin}
                width="15"
                height="15"
                className="m-2"
                alt="equip icon"
              />
              Morrazo - Benidorm
              <img
                id="logo-img"
                src={badahuesca}
                width="15"
                height="15"
                className="m-2"
                alt="equip icon"
              />
            </td>
            <td>19:00</td>
            <td>
              <Link to="/sitlocation">{"->"}</Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table striped hover>
        <thead>
          <tr>
            <th>Partidos futuros</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Unicaja - Puente Genil </td>
            <td>18:00</td>
            <td>05/03</td>
          </tr>
          <tr>
            <td>Ademar León - At. Valladolid</td>
            <td>19:00</td>
            <td>05/03</td>
          </tr>
          <tr>
            <td>Barcelona - Cuenca</td>
            <td>18:00</td>
            <td>05/03</td>
          </tr>
          <tr>
            <td>Morrazo - La Rioja</td>
            <td>19:00</td>
            <td>05/03</td>
          </tr>
          <tr>
            <td>Benidorm - Granollers</td>
            <td>17:30</td>
            <td>05/03</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Games;
