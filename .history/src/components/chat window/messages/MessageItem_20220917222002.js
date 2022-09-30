import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { database } from '../../../misc/firebase';
import { transformToArrWithId } from '../../../misc/Helpers';

const MessageItem = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const messagesRef = database.ref('/messages');

    messagesRef
      .orderByChild('roomId')
      .equalTo(chatId)
      .on('value', snap => {
        const data = transformToArrWithId(snap.val());
        setMessages(data);
      });
    return () => {
      messagesRef.off('value');
    };
  }, [chatId]);
  return <div>hello</div>;
};

export default MessageItem;
