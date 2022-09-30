import React from 'react';
import { Button } from 'rsuite';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useModalState } from '../../../misc/custom-hooks';

const RoomInfoBtnModel = () => {
  const { isOpen, close, open } = useModalState();
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
