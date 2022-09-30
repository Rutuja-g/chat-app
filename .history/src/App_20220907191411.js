import React from 'react';
import { Switch, Route } from 'react-router';

import 'rsuite/dist/rsuite.min.css';
import SignIn from './pages/SignIn';
import './styles/main.scss';

function App() {
  return (
    <Switch>
      <Route>
        <SignIn path="/signin" />
      </Route>
    </Switch>
  );
}

export default App;
