import React from "react";
import CommitTable from "../../components/CommitTable";

import classes from "./styles.module.css";
import FixedWidthContainer from "../../components/UI/FixedWithContainer";

const CommitsPage: React.FC = () => {
  const data = [
    {
      sha: "123456",
      commit: {
        message: "First commit",
        author: { name: "Alvaro Clavijo", date: "2023-10-07T13:29:34Z" },
      },
    },
    {
      sha: "789012",
      commit: {
        message: "Second commit",
        author: { name: "Alvaro Clavijo", date: "2023-10-07T13:29:34Z" },
      },
    },
    // Add more data objects as needed
  ];

  return (
    <FixedWidthContainer>
      <h1 className={classes.title}>Commits</h1>
      <CommitTable data={data} />
    </FixedWidthContainer>
  );
};

export default CommitsPage;
