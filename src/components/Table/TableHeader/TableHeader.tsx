import React,{FC} from "react";
import styled from 'styled-components';
// import TableRow from "../TableRow/TableRow";
import StyledTableRow from "../TableRow/TableRow";
import { TableRowProps } from "../TableRow/TableRow";


export interface TableHeaderProps {
  rowArray: string[];
  backgroundColor?: string;
}

const TableHeader: FC<TableRowProps> = ({rowArray,backgroundColor}) => {
  return <StyledTableRow rowArray={rowArray} backgroundColor={backgroundColor}/>;
}

export default TableHeader;