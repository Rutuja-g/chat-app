import React from 'react';
import firebase from 'firebase/app';
import { Button, Col, Container, Grid, Panel, Row, Icon } from 'rsuite';
import { auth } from '../misc/firebase';

function SignIn() {
  const signInWithProvider = provider => {
    auth.signInWithPopup(provider);
  };
  const onFacebookSignIn = () => {
    signInWithProvider();
  };
  const onGoogleSignIn = () => {
    signInWithProvider();
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>
              <div className="mt-3">
                <Button block color="blue">
                  <Icon icon="facebook" /> Continue with Facebook
                </Button>
                <Button block color="green">
                  <Icon icon="google" /> Continue with Google
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
