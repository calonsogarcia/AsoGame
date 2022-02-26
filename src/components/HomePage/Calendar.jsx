import React from "react";
import {Table} from "react-bootstrap"

const Calendar = () => {
  return (
    <Table responsive hover bordered variant="light">
      <thead>
        <tr>
          <th className="text-center">Domingo</th>
          <th className="text-center">Lunes</th>
          <th className="text-center">Martes</th>
          <th className="text-center">Miércoles</th>
          <th className="text-center">Jueves</th>
          <th className="text-center">Viernes</th>
          <th className="text-center">Sábado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="text-center">27/02</th>
          <th className="text-center">28/02</th>
          <th className="text-center">01/03</th>
          <th className="text-center">02/03</th>
          <th className="text-center">03/03</th>
          <th className="text-center">04/03</th>
          <th className="text-center">05/03</th>
        </tr>
      </tbody>
    </Table>
  );
};

export default Calendar;