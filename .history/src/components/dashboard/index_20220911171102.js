import React, { Profiler } from 'react';
import { Drawer } from 'r-suite';
import { useProfile } from '../../context/profile.context';

function Dashboard() {
  // return <Drawer.Header />;
  const { profile } = useProfile();
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey,{profile.name}</h3>
      </Drawer.Body>
      <Drawer.Footer>Sign out</Drawer.Footer>
    </>
  );
}

export default Dashboard;
