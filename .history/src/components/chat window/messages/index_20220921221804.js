import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { database } from '../../../misc/firebase';
import { transformToArrWithId } from '../../../misc/Helpers';
import MessageItem from './MessageItem';

const Messages = () => {
  const { chatId } = useParams();

  const [messages, setMessages] = useState(null);

  const isChatEmpty = messages && messages.length === 0;
  const canShowMessages = messages && messages.length > 0;

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
  const handleAdmin = useCallback(
    async uid => {
      const adminsRef = database.ref(`/rooms/${chatId}/admins`);

      await adminsRef.transaction(admins => {
        if (admins) {
          if (admins[uid]) {
            admins[uid] = null;
          } else {
            admins[uid] = true;
            if (!post.stars) {
              post.stars = {};
            }
            post.stars[uid] = true;
          }
        }
        return post;
      });
    },
    [chatId]
  );
  return (
    <ul className="msg-list custom-scroll">
      {isChatEmpty && <li>No messages yet</li>}
      {canShowMessages &&
        messages.map(msg => <MessageItem key={msg.id} message={msg} />)}
    </ul>
  );
};

export default Messages;
