import { Component } from "react";
import axios from "axios";

import CommitList from "./components/CommitList";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import Spy from "./components/Spy";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      commits: null,
      isSpyHidden: true,
    };
  }

  fetchCommits = (formData) => {
    const { owner, repo } = formData;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => this.setState({ ...this.state, commits: data }))
      .catch((err) => {
        console.log(err);
        this.setState({ ...this.state, commits: null });
      });
  };

  resetCommits = () => {
    this.setState({ ...this.state, commits: null });
  };

  render() {
    return (
      <>
        <Header />
        {this.state.isSpyHidden && <Spy />}
        <main>
          <RepoForm onSubmit={this.fetchCommits} resetCommits={this.resetCommits} />
          {this.state.commits && <CommitList commits={this.state.commits} />}
        </main>
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <Header />
//       <main>
//         <RepoForm onSubmit={(formData) => console.log(formData)} />
//         <CommitList />
//       </main>
//     </>
//   );
// }

// export default App;
