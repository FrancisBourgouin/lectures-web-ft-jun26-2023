import { useState } from "react";
import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";

export default function TopicListItem(props) {
  const { id, question, username, profile_url, replies, addReplyToTopic } = props;
  const [isReplyVisible, setIsReplyVisible] = useState(false);

  return (
    <article className="TopicListItem">
      <header>
        <h1>{question}</h1>
        <div
          style={{ backgroundImage: `url(${profile_url})` }}
          onClick={() => setIsReplyVisible(!isReplyVisible)}
        ></div>
        <p>By {username}</p>
        <p>{replies.length} replies to this topic</p>
      </header>
      {isReplyVisible && (
        <>
          <ReplyList replies={replies} />
          <ReplyForm onSubmit={(text) => addReplyToTopic(text, id)} />
        </>
      )}
    </article>
  );
}
