import { useState } from "react";

export default function ReplyForm(props) {
  const [reply, setReply] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(reply);
    setReply("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="answer"
        placeholder="Enter your reply"
        value={reply}
        onChange={(event) => setReply(event.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
