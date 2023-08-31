import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UrlListItem from "./components/UrlListItem";
import UrlList from "./components/UrlList";
import axios from "axios";

// const url1 = {
//   shortUrl: "b2xvn2",
//   longUrl: "http://google.com",
//   userId: 1,
// };
// const url2 = {
//   shortUrl: "x6v9q",
//   longUrl: "http://bing.com",
//   userId: 1,
// };
// const urls = [url1, url2];

function App() {
  const [urls, setUrls] = useState([]);
  const [mode, setMode] = useState("VIEW");

  useEffect(() => {
    axios
      .get("/api/urls")
      .then((res) => res.data)
      .then((data) => setUrls(data));
  }, []);

  return (
    <>
      <header>
        <h1>Super TinyApp of Destiny</h1>
      </header>
      {mode === "VIEW" && (
        <section>
          <UrlList urls={urls} />
          {/* <UrlListItem {...url1} /> */}
        </section>
      )}
      {mode === "NEW" && (
        <section>
          <h1>New url!</h1>
        </section>
      )}
    </>
  );
}

export default App;
