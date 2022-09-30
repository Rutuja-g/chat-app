import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { database } from '../../../misc/firebase';

const MessageItem = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const messagesRef = database.ref('/messages');

    messagesRef.orderByChild('roomId').equalTo(chatId).on('value');
  }.[chatId]);
  return <div>hello</div>;
};

export default MessageItem;
