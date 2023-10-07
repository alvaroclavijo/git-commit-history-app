import "./App.css";
import CommitTable from "./components/CommitTable";

function App() {
  const data = [
    { sha: "123456", commit: { message: "First commit" } },
    { sha: "789012", commit: { message: "Second commit" } },
  ];
  return (
    <>
      <CommitTable data={data} />
    </>
  );
}

export default App;
