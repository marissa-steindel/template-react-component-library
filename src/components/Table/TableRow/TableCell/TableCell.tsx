import React from "react";

export interface TableCell {
  value: string;
}

const TableCell = (props: TableCell) => {
  return <td>{props.value}</td>
};

export default TableCell;
