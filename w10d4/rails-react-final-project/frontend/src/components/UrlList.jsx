import UrlListItem from "./UrlListItem";
export default function UrlList(props) {
  const { urls } = props;

  const parsedUrls = urls.map((url) => <UrlListItem {...url} key={url.shortUrl} />);

  return (
    <div>
      <h1>List of urls</h1>
      {parsedUrls}
    </div>
  );
}
