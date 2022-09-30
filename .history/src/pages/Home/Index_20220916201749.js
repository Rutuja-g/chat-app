import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Grid, Row, Col } from 'rsuite';
import Sidebar from '../../components/Sidebar';
import { RoomsProvider } from '../../context/rooms.context';
import { useMediaQuery } from '../../misc/custom-hooks';
import Chat from './Chat';

const Home = () => {
  const isDesktop = useMediaQuery('(min-width:992px)');
  const { isExact } = useRouteMatch();

  return (
    <RoomsProvider>
      <Grid fluid className="h-100">
        <Row className="h-100">
          <Col xs={24} md={8} className="h-100">
            <Sidebar />
          </Col>
          <Switch>
            <Route exact path="/chat/:chatId">
              <Col xs={24} md={16} className="h-100">
                <Chat />
              </Col>
            </Route>
          </Switch>
        </Row>
      </Grid>
    </RoomsProvider>
  );
};

export default Home;
