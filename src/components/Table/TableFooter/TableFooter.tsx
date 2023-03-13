import React,{FC} from "react";
import styled from 'styled-components';
// import TableRow from "../TableRow/TableRow";
import StyledTableRow from "../TableRow/TableRow";
import { TableRowProps } from "../TableRow/TableRow";


export interface TableFooterProps {
  rowArray: string[];
  backgroundColor?: string;
  fontColor?: string;
  disabled: boolean;
}

const TableFooter: FC<TableRowProps> = ({rowArray,...props}) => {
  return <StyledTableRow {...props} rowArray={rowArray}/>;
}

export default TableFooter;


