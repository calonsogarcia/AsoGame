import {React} from "react";
import {Link} from "react-router-dom";
import { Table } from "react-bootstrap";

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
            <td>Barça - Bidasoa</td>
            <td>18:00</td>
            <td><Link to="/match"> Asisto </Link></td>
          </tr>
          <tr>
            <td>Granollers - La Rioja</td>
            <td>17:30</td>
            <td><Link to="/match">Asisto</Link></td>
          </tr>
          <tr>
            <td>Morrazo - Benidorm</td>
            <td>19:00</td>
            <td><Link to="/match">Asisto</Link></td>
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
            <td>Unicaja - Puente Genil</td>
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
