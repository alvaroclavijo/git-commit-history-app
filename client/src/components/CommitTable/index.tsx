import React from "react";
import { useTable, HeaderGroup, Cell, Row, Column } from "react-table";
import { Commit } from "../../types/common/Commit";

interface CommitTableProps {
  data: Commit[];
}

const CommitTable: React.FC<CommitTableProps> = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Commit",
        accessor: "sha",
      },
      {
        Header: "Message",
        accessor: "commit.message",
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
    <table {...getTableProps()} style={{ border: "1px solid black" }}>
      <thead>
        {headerGroups.map((headerGroup: HeaderGroup<Commit>) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: Column<Commit>) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: Row<Commit>) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: Cell<Commit>) => {
                return (
                  <td {...cell.getCellProps()} style={{ padding: "10px" }}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CommitTable;
