import React from "react";
import CommitTable from "../../components/CommitTable";
import classes from "./styles.module.css";
import FixedWidthContainer from "../../components/UI/FixedWithContainer";

const CommitsPage: React.FC = () => {
  const [commits, setCommits] = React.useState([]);

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
      setCommits(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FixedWidthContainer>
      <h1 className={classes.title}>Commits</h1>
      <CommitTable data={commits} />
    </FixedWidthContainer>
  );
};

export default CommitsPage;
