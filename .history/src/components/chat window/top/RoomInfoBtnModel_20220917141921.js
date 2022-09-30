import React from 'react';
import { Button } from 'rsuite';
import { useCurrentRoom } from '../../../context/current-room.context';

const RoomInfoBtnModel = () => {
  const description = useCurrentRoom(v => v.description);

  const name = useCurrentRoom(v => v.name);

  return (
    <div>
      <Button appearance="link" className="px-0">
        Room Information
      </Button>
    </div>
  );
};

export default RoomInfoBtnModel;
