import React from "react";
import classes from "./styles.module.css";
import RoundedContainer from "../UI/RoundedContainer";
import Table from "../UI/Table";
import Loader from "../UI/Loader";

const CommitTable: React.FC = () => {
  const [commits, setCommits] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
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
        Cell: ({ value, row }) => {
          const firstDigitsSha = value.substring(0, 5);

          return (
            <a href={row.original.html_url} className={classes["single-line"]}>
              {firstDigitsSha}
            </a>
          );
        },
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
        Cell: ({ value }) => {
          const dateObject = new Date(value);
          const formattedDate = `${
            dateObject.getMonth() + 1
          }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
          return (
            <p className={classes["single-line"]} style={{ width: "100px" }}>
              {formattedDate}
            </p>
          );
        },
      },
    ],
    []
  );

  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  const pageSize = 10;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  React.useEffect(() => {
    fetchCommits(currentPage, pageSize);
  }, [currentPage]);

  const fetchCommits = async (currentPage: number, pageSize: number) => {
    const { VITE_API_URL } = import.meta.env;
    try {
      setIsLoading(true);
      const resp = await fetch(
        `${VITE_API_URL}/commits?&limit=${pageSize}&page=${currentPage}`
      );
      const resJson = await resp.json();
      setTotalPages(resJson.totalPages);
      setCurrentPage(resJson.page);
      setCommits(resJson.content);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <RoundedContainer className={classes.container}>
        <Loader />
      </RoundedContainer>
    );
  }

  return (
    <RoundedContainer>
      <Table
        data={commits}
        columns={columns}
        page={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className={classes.table}
      />
    </RoundedContainer>
  );
};

export default CommitTable;
