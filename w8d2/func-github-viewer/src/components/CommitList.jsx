import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commits } = props;

  const parsedCommits =
    Array.isArray(commits) &&
    commits.map((commit) => <CommitListItem key={commit.sha} commit={commit} />);
  return <ul>{parsedCommits}</ul>;
}
