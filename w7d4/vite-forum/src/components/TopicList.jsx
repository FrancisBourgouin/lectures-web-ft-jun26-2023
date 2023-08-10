import TopicListItem from "./TopicListItem";
import { topicsObj } from "../data/topics";
import { usersObj } from "../data/users";
import { useState } from "react";

export default function TopicList(props) {
  const [users, setUsers] = useState(usersObj);
  const [topics, setTopics] = useState(topicsObj);

  const formatTopic = (topic, users) => {
    const formattedTopic = {
      id: topic.id,
      userId: topic.userId,
      question: topic.question,
      username: users[topic.userId].username,
      profile_url: users[topic.userId].profile_url,
    };

    const formattedReplies = topic.replies.map((reply) => ({
      userId: reply.userId,
      content: reply.content,
      username: users[reply.userId].username,
      profile_url: users[reply.userId].profile_url,
    }));

    formattedTopic.replies = formattedReplies;

    return formattedTopic;
  };

  const addReplyToTopic = (text, topicId) => {
    const updatedTopics = { ...topics };
    const updatedTopic = { ...topics[topicId] };

    const newReply = { userId: Math.floor(Math.random() * 39), content: text };

    updatedTopic.replies = [...updatedTopic.replies, newReply];

    updatedTopics[topicId] = updatedTopic;

    setTopics(updatedTopics);
  };

  const parsedTopicListItems = Object.values(topics).map((topic) => {
    const formattedTopic = formatTopic(topic, users);

    return (
      <TopicListItem
        key={formattedTopic.id}
        {...formattedTopic}
        addReplyToTopic={addReplyToTopic}
      />
    );
  });

  return <main>{parsedTopicListItems}</main>;
}
