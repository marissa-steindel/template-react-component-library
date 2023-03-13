import React,{FC} from "react";
import styled from 'styled-components';
import StyledTableHeader from "./TableHeader/TableHeader";
import StyledTableFooter from "./TableFooter/TableFooter";
import StyledTableRow from "./TableRow/TableRow";
// import { TableProps } from "./Table.types";

export interface TableProps {
  header: string[];
  rows: Array<string[]>;
  footer: string[];
  headerColor: string;
  footerColor: string;
  disabled: boolean;
}

// define the styles of the HTML tags of the component
const StyledTable = styled.table<TableProps>`
  border: 5px solid black;
  border-collapse: collapse;
  cursor: ${props => props.disabled ? "not-allowed" : "default"};
`;

const Table: FC<TableProps> = ({header,footer,rows,headerColor,footerColor,disabled}) => {
return(
    <StyledTable disabled={disabled}>
      <StyledTableHeader rowArray={header} backgroundColor={headerColor} />
      <tbody>
        {rows.map((singleRow) => <StyledTableRow rowArray={singleRow}/> )}
      </tbody>
      <StyledTableFooter rowArray={footer} backgroundColor={footerColor}/>
    </StyledTable>
  );
};

export default Table;


// while (tableData[0].rowData.length > 0)
// {
//  console.log( tableData.map((row)  => row.rowData.shift()))
// }
