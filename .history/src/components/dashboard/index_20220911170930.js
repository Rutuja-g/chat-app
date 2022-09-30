import React, { Profiler } from 'react';
import { Drawer } from 'r-suite';

function Dashboard() {
  // return <Drawer.Header />;
  <>
    <Drawer.Header>
      <Drawer.Title>Dashboard</Drawer.Title>
    </Drawer.Header>
    <Drawer.Body>
      <h3>Hey,{profile.name}</h3>
    </Drawer.Body>
    <Drawer.Footer>Sign out</Drawer.Footer>
  </>;
}

export default Dashboard;
