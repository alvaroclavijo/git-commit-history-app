import React from "react";
import { useTable, HeaderGroup, Cell, Row, Column } from "react-table";
import { Commit } from "../../types/common/Commit";
import classes from "./styles.module.css";

interface CommitTableProps {
  data: Commit[];
}

const CommitTable: React.FC<CommitTableProps> = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Author",
        accessor: "commit.author.name",
        Cell: ({ value }) => (
          <p
            className={classes["single-line"]}
            style={{ width: "clamp(100px, 20vw, 200px" }}
          >
            {value}
          </p>
        ),
      },
      {
        Header: "Commit",
        accessor: "sha",
        Cell: ({ value }) => (
          <p
            className={classes["single-line"]}
            style={{ width: "clamp(100px, 20vw, 200px" }}
          >
            {value}
          </p>
        ),
      },
      {
        Header: "Message",
        accessor: "commit.message",
        Cell: ({ value }) => (
          <p
            className={classes["single-line"]}
            style={{ width: "clamp(300px, 30vw, 550px" }}
          >
            {value}
          </p>
        ),
      },
      {
        Header: "Date",
        accessor: "commit.author.date",
        Cell: ({ value }) => (
          <p
            className={classes["single-line"]}
            style={{ width: "clamp(100px, 20vw, 200px" }}
          >
            {value}
          </p>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className={classes.container}>
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
    </div>
  );
};

export default CommitTable;
