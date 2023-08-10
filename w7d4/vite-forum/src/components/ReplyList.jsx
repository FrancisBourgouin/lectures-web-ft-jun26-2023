import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
  const { replies } = props;

  const parsedReplies =
    Array.isArray(replies) && replies.map((reply) => <ReplyListItem {...reply} />);
  return <ul className="ReplyList">{parsedReplies}</ul>;
}
