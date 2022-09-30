import React from 'react';
import { Button, Drawer } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';

const EditRoomBtnModel = () => {
  const { isOpen, open, close } = useModalState();
  return (
    <div>
      <Button className="br-circle" size="sm" color="red" onClick={open}>
        A
      </Button>
      <Drawer show={isOpen} onHide={close} placement="right"></Drawer>
    </div>
  );
};

export default EditRoomBtnModel;
