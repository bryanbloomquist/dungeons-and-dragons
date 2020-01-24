import React from "react";
import { Table } from "react-bootstrap";

const CombatTable = () => {
  return (
    <Table responsive="md" id="combat-table" borderless>
      <thead>
        <tr>
          <th>#</th>
          <th>Initiative</th>
          <th>Name</th>
          <th>Armor Class</th>
          <th>Hit Points</th>
          <th>Value</th>
          <th>Heal</th>
          <th>Damage</th>
          <th>Kill</th>
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  );
};

export default CombatTable;
