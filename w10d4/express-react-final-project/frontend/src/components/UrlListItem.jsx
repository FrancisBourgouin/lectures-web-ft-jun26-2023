export default function UrlListItem(props) {
  const { shortUrl, longUrl, userId } = props;

  return (
    <article>
      <h1>Link for: {longUrl}</h1>
      <p>Code is {shortUrl}</p>
      <p>By user id {userId}</p>
    </article>
  );
}
