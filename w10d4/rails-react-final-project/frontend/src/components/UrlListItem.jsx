export default function UrlListItem(props) {
  const { short_url, long_url, user_id } = props;

  return (
    <article>
      <h1>Link for: {long_url}</h1>
      <p>Code is {short_url}</p>
      <p>By user id {user_id}</p>
    </article>
  );
}
