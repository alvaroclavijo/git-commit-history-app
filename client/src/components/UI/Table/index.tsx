import React from "react";
import {
  useTable,
  HeaderGroup,
  Cell,
  Row,
  Column,
} from "react-table";
import { Commit } from "../../types/common/Commit";
import classes from "./styles.module.css";

interface TableProps {
  data: any[];
  columns: any[];
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
  page,
  totalPages,
  onPageChange,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <table {...getTableProps()} className={classes.table}>
        <thead className={classes.header}>
          {headerGroups.map((headerGroup: HeaderGroup<Commit>) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: Column<Commit>) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className={classes.body}>
          {rows.map((row: Row<Commit>) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={classes.row}>
                {row.cells.map((cell: Cell<Commit>) => {
                  return (
                    <td {...cell.getCellProps()} className={classes.field}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={classes["pagination-section"]}>
        <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
          {"<"}
        </button>
        <p>
          {page} of {totalPages}
        </p>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default Table;
