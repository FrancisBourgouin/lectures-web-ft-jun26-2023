import { Component } from "react";

export default class RepoForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = { owner: "", repo: "" };
    this.state = this.initialState;

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.setState(this.initialState);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="owner"
            placeholder="Enter the owner"
            onChange={this.handleChange}
            value={this.state.owner}
          />
          <input
            type="text"
            name="repo"
            placeholder="Enter the repo"
            onChange={this.handleChange}
            value={this.state.repo}
          />
          <button type="reset" onClick={this.props.resetCommits}>
            Reset
          </button>
          <button type="submit">Fetch</button>
        </form>
      </>
    );
  }
}

// export default function RepoForm(props) {
//   return (
//     <form>
//       <input type="text" />
//       <input type="text" />
//       <button>Reset</button>
//       <button>Fetch</button>
//     </form>
//   );
// }
