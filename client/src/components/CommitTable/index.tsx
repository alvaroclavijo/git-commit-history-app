import React from "react";
import classes from "./styles.module.css";
import RoundedContainer from "../UI/RoundedContainer";
import Table from "../UI/Table";

const CommitTable: React.FC = () => {
  const [commits, setCommits] = React.useState([]);
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

  React.useEffect(() => {
    fetchCommits();
  }, []);

  const fetchCommits = async () => {
    const { VITE_API_URL } = import.meta.env;
    try {
      const resp = await fetch(
        `${VITE_API_URL}/commits?owner=alvaroclavijo&repo=git-commit-history-app&token=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`
      );
      const resJson = await resp.json();
      console.log(resJson);
      setCommits(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RoundedContainer>
      <Table data={commits} columns={columns} />
    </RoundedContainer>
  );
};

export default CommitTable;
