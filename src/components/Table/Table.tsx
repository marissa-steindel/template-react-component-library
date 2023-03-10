import React,{FC} from "react";
import styled from 'styled-components';
import StyledTableHeader from "./TableHeader/TableHeader";
import StyledTableRow from "./TableRow/TableRow";
import StyledTableFooter from "./TableFooter/TableFooter";
// import { TableProps } from "./Table.types";

export interface TableProps {
  header: string[];
  headerColor:string;
  footerColor:string;
  rows: Array<string[]>;
  footer: string[];
  disabled: boolean;
}

// define the styles of the HTML tags of the component
const StyledTable = styled.table<TableProps>`
  border: 5px solid black;
  border-collapse: collapse;
  cursor: ${props => props.disabled ? "not-allowed" : "default"};
`;

const Table: FC<TableProps> = ({header,footer,rows,...props}) => {
return(
    <table>
      <StyledTableHeader rowArray={header} {...props}/>
      <tbody>
        {rows.map((singleRow) => <StyledTableRow rowArray={singleRow} {...props}/> )}
      </tbody>
      <StyledTableFooter rowArray={footer} {...props}/>
    </table>
  );
};

export default Table;


// while (tableData[0].rowData.length > 0)
// {
//  console.log( tableData.map((row)  => row.rowData.shift()))
// }
