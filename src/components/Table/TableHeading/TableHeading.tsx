import React from "react";

export interface TableHeading {
  column: string;
}

const TableHeading = (props: TableHeading) => {
  return(<th>{props.column}</th>)
};

export default TableHeading;