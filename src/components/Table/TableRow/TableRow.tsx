import React,{FC} from "react";
import styled from 'styled-components';
import TableCell from "../TableCell/TableCell";
// import { TableRowProps } from "./TableRow.types";

export interface TableRowProps {
  rowArray: Array<string>;
  backgroundColor?: string;
  fontColor?: string;
  disabled: boolean;
}

const StyledTableRow = styled.tr<TableRowProps>`

`;

const TableRow: FC<TableRowProps> = (props: TableRowProps) => {
  return(
    <tr>
      {props.rowArray.map((datum) => <TableCell {...props} value={datum}/>)}
    </tr>
  );

};

export default TableRow;