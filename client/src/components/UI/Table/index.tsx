import React from "react";
import { useTable } from "react-table";
import classes from "./styles.module.css";

interface TableProps {
  data: any[];
  columns: any[];
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  className?: {};
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
  page,
  totalPages,
  onPageChange,
  className,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <table {...getTableProps()} className={`${classes.table} ${className}`}>
        <thead className={classes.header}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className={classes.body}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={classes.row}>
                {row.cells.map((cell) => {
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
