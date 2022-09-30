import React from 'react';
import { Button, Col, Container, Grid, Panel, Row } from 'rsuite';

function SignIn() {
  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>
              <div>
                <Button block color="blue">
                  <Icon icon="facebook" />
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default SignIn;
