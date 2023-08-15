// owner => User input
// repo => User input
// url of commit => commit.html_url
// commiter => commit.commit.author.name
// commiter url => commit.author.avatar_url
// commit message => commit.commit.message
// commit date => commit.commit.author.date

export default function CommitListItem(props) {
  const { commit } = props;
  return (
    <li>
      <h1>
        {commit.commit.author.name} on {commit.commit.author.date}
      </h1>
      <a href={commit.html_url}>Link to commit</a>
      <p>{commit.commit.message}</p>
    </li>
  );
}
