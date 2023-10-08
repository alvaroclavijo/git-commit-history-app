import React from "react";
import CommitTable from "../../components/CommitTable";
import classes from "./styles.module.css";
import FixedWidthContainer from "../../components/UI/FixedWithContainer";

const CommitsPage: React.FC = () => {

  return (
    <FixedWidthContainer>
      <h1 className={classes.title}>Commits</h1>
      <CommitTable/>
    </FixedWidthContainer>
  );
};

export default CommitsPage;
