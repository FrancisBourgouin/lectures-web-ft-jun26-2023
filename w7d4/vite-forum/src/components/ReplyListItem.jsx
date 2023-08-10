export default function ReplyListItem(props) {
  const { content, profile_url, username } = props;

  return (
    <li className="ReplyListItem">
      <p>{content}</p>
      <div style={{ backgroundImage: `url(${profile_url})` }}></div>
      <p>{username}</p>
    </li>
  );
}
