import React from "react";
import TableCell from "./TableCell/TableCell";

export interface TableRow {
  rowObject: Array<string>;
}

const TableRow = (props: TableRow) => {
  return(
    <tr>
      {props.rowObject.map((datum) => <TableCell value={datum}/>)}
    </tr>
  )
};

export default TableRow;