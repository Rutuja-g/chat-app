import React from 'react';
import { Col, Container, Grid, Panel, Row } from 'rsuite';

function SignIn() {
  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={24} md={12}>
            <Panel>
              <div>
                <h2>
                  Welcome to Chat
                  <p>Progressive chat platform for neophytes</p>
                </h2>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default SignIn;
