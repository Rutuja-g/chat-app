import React from 'react';
import { Loader, Nav } from 'rsuite';
import { useRooms } from '../../context/rooms.context';
import RoomItem from './RoomItem';
import { Link } from 'react-router-dom';

const ChatRoomList = ({ aboveElHeight }) => {
  const rooms = useRooms();
  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `calc(100% - ${aboveElHeight}px)`,
      }}
    >
      {!rooms && (
        <Loader center vertical content="Loading" speed="slow" size="md" />
      )}
      {rooms &&
        rooms.length > 0 &&
        rooms.map(room => (
          <Nav.Item componentClass={Link} key={room.id}>
            <RoomItem room={room} />
          </Nav.Item>
        ))}
    </Nav>
  );
};

export default ChatRoomList;
