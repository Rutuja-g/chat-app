import React from 'react';
import { Button, Icon, Drawer } from 'rsuite';

function DashboardToggle() {
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
