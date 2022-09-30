import React from 'react';
import { useParams } from 'react-router';
import ChatTop from '../../components/chat window/top';
import Messages from '../../components/chat window/messages';
import ChatBottom from '../../components/chat window/bottom';
import { useRooms } from '../../context/rooms.context';

const Chat = () => {
  const { chatId } = useParams();
  const rooms = useRooms();

  return (
    <>
      <div className="chat-top">
        <ChatTop />
      </div>
      <div className="chat-middle">
        <Messages />
      </div>
      <div className="chat-bottom">
        <ChatBottom />
      </div>
    </>
  );
};

export default Chat;
