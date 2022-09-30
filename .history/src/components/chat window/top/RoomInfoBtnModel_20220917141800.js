import React from 'react';
import { useCurrentRoom } from '../../../context/current-room.context';

const RoomInfoBtnModel = () => {
  const description = useCurrentRoom(v => v.description);
  return <div></div>;
};

export default RoomInfoBtnModel;
