import React from "react";
import CommitTable from "../../components/CommitTable";

const CommitsPage: React.FC = () => {
  const data = [
    { sha: "123456", commit: { message: "First commit" } },
    { sha: "789012", commit: { message: "Second commit" } },
    // Add more data objects as needed
  ];

  return (
    <div>
      <h1>Commits Page</h1>
      <CommitTable data={data} />
    </div>
  );
};

export default CommitsPage;
