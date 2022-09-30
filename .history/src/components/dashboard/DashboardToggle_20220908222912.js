import React from 'react';
import { Button, Icon, Drawer } from 'rsuite';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';

function DashboardToggle() {
  const { isOpen, close, open } = useModalState();
  useMediaQuery('(max-width:992px)');

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer full show={isOpen} onHide={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
}

export default DashboardToggle;
