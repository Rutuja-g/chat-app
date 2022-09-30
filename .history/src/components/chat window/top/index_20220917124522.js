import React from 'react';
import { useCurrentRoom } from '../../../context/current-room.context';

const Top = () => {
  const name = useCurrentRoom(v => v.name);
  return <div>top</div>;
};

export default Top;
