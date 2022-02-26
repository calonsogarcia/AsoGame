import React from "react";
import {Table} from "react-bootstrap"

const Calendar = () => {
  return (
    <Table responsive hover bordered variant="light">
      <thead>
        <tr>
          {Array.from({ length: 8 }).map((_, index) => (
            <th key={index}>Lunes</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Array.from({ length: 8 }).map((_, index) => (
            <td key={index}>{index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

export default Calendar;