import React,{FC} from "react";
import styled from 'styled-components';
import TableCell from "../TableCell/TableCell";
import TableRow from "../TableRow/TableRow";

export interface TableFooterProps {
  rowArray: string[];
  backgroundColor?: string;
  fontColor?: string;
  disabled: boolean;
}

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  border: 5px solid black;
  background-color: ${(props) =>
    props.disabled ? '#cecdcd' : props.backgroundColor ? props.backgroundColor : '#8080e4'};
  color: ${(props) =>
    props.disabled ? "darkgrey" : props.fontColor ? props.fontColor : "#6bedb5"};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  cursor: default;
  /* width: 500px; */
  /* padding: 20px; */
  /* display: block; */

  `;

const TableFooter: FC<TableFooterProps> = ({rowArray,...props}) => {
  return <TableRow {...props} rowArray={rowArray}/>;
}

export default TableFooter;


