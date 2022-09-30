import React, { useState } from 'react';
import { useParams } from 'react-router';

const MessageItem = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState(null);
  return <div>hello</div>;
};

export default MessageItem;
