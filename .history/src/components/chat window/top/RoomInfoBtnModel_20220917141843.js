import React from 'react';
import { useCurrentRoom } from '../../../context/current-room.context';

const RoomInfoBtnModel = () => {
  const description = useCurrentRoom(v => v.description);

  const name = useCurrentRoom(v => v.name);

  return <div></div>;
};

export default RoomInfoBtnModel;
