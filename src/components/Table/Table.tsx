import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableHeading from "./TableHeading/TableHeading";
import TableRow from "./TableRow/TableRow";
import TableFooter from "./TableFooter/TableFooter";

export interface TableProps {
  headings: Array<string>;
  rows: Array<string[]>;
}

const Table = (props: TableProps) => {

  return(
    <table>
      <TableHeader/>
      <tbody>
        {/* table headings */}
        <tr>
          {props.headings.map((heading) =>
              <TableHeading column={heading}/>
            )
          }
        </tr>

        {/* table rows */}
        {props.rows.map((rowArray) => <TableRow rowObject={rowArray} /> )}
      </tbody>

      <TableFooter/>
    </table>
  );
};

export default Table;