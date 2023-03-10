import React,{FC} from "react";
import styled from 'styled-components';
import TableCell from "../TableCell/TableCell";
import TableRow from "../TableRow/TableRow";
import StyledTableRow from "../TableRow/TableRow";


export interface TableHeaderProps {
  rowArray: string[];
  backgroundColor?: string;
  fontColor?: string;
  disabled: boolean;
}

// const StyledTableHeader = styled(TableRow)<TableHeaderProps>`
//   border: 5px solid black;
//   background-color: #8080e4;
//   color: "#6bedb5";
//   font-family: Arial, Helvetica, sans-serif;
//   cursor: default;
//   /* width: 500px; */
//   /* padding: 20px; */
//   /* display: block; */
// `;

// const StyledTableHeader = styled.thead<TableHeaderProps>`
//   border: 5px solid black;
//   background-color: ${(props) =>
//     props.disabled ? '#cecdcd' : props.backgroundColor ? props.backgroundColor : 'pink'};
//   color: ${(props) =>
//     props.disabled ? "darkgrey" : props.fontColor ? props.fontColor : 'blue'};
//   font-family: Arial, Helvetica, sans-serif;
//   cursor: default;
// `;

const TableHeader: FC<TableHeaderProps> = ({rowArray,...props}) => {
  return <StyledTableRow {...props} rowArray={rowArray}/>;
}

export default TableHeader;