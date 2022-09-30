import React from 'react';
import { Container, Grid, Panel, Row } from 'rsuite';
import Col from 'rsuite/lib/Carousel';

function SignIn() {
  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={24} md={12} />
          <Panel>
            <div>
              <h2>
                Welcome to Chat
                <p>Progressive chat platform for neophytes</p>
              </h2>
            </div>
          </Panel>
        </Row>
      </Grid>
    </Container>
  );
}

export default SignIn;
