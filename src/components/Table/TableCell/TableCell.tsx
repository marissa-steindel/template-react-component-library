import React,{FC} from "react";
import styled from 'styled-components';
// import { TableCellProps } from "./TableCell.types";

export interface TableCellProps {
  value: string;
  backgroundColor?: string;
  fontColor?: string;
  // disabled: boolean;
}

const StyledTableCell = styled.td<TableCellProps>`
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid black;
  width: 100px;
  text-align: center;
  /* border-collapse: collapse; */
`;

const TableCell: FC<TableCellProps>  = (props: TableCellProps) => {
  // return <td>{props.value}</td>;
  return <StyledTableCell {...props}>{props.value}</StyledTableCell>;
};

export default TableCell;
