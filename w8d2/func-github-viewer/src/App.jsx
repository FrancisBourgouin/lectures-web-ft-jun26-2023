import { useState } from "react";
import axios from "axios";

import CommitList from "./components/CommitList";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import Spy from "./components/Spy";

import "./App.css";

function App() {
  const [commits, setCommits] = useState(null);
  const [isSpyHidden, setIsSpyHidden] = useState(true);

  const fetchCommits = (formData) => {
    const { owner, repo } = formData;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setCommits(data))
      .catch((err) => {
        console.log(err);
        setCommits(null);
      });
  };

  const resetCommits = () => {
    setCommits(null);
  };
  return (
    <>
      <Header />
      {isSpyHidden && <Spy />}
      <main>
        <RepoForm onSubmit={fetchCommits} resetCommits={resetCommits} />
        {commits && <CommitList commits={commits} />}
      </main>
    </>
  );
}

export default App;
