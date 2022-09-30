import React from 'react';
import { Button, Icon, Drawer } from 'rsuite';
import { useModalState } from '../../misc/custom-hooks';

function DashboardToggle() {
    const {isOpen,close,open}=useModalState()
  return (
    <>
      <Button block color="blue">
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer show={} onHide={} placement="left">

      </Drawer>
    </>
  );
}

export default DashboardToggle;
