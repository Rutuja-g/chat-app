/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Drawer, Button } from 'r-suite';
import { useProfile } from '../../context/profile.context';

function Dashboard({ onSignOut }) {
  const { profile } = useProfile();
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey,{profile.name}</h3>
      </Drawer.Body>
      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          Sign out
        </Button>
      </Drawer.Footer>
    </>
  );
}

export default Dashboard;
