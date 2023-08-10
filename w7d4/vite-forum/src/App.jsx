import "./App.css";
import Header from "./components/Header";
import TopicList from "./components/TopicList";

function App() {
  return (
    <>
      <Header />
      <TopicList />
    </>
  );

  // // // Step 1: Header
  // // return <Header />;

  // // Step 2: ReplyListItem
  // // return <ReplyListItem {...formattedTopicOne.replies[0]} />;

  // // Step 3: ReplyList
  // // return <ReplyList replies={formattedTopicOne.replies} />;

  // // Step 4: TopicListItem
  // return <TopicListItem {...formattedTopicOne} />;
}

export default App;
