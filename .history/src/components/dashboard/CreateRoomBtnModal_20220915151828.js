import React from 'react';
import {
  Button,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Icon,
  Modal,
} from 'rsuite';
import { useModalState } from '../../misc/custom-hooks';

const CreateRoomBtnModal = () => {
  const { isOpen, open, close } = useModalState();

  return (
    <div className="mt-2">
      <Button block color="green" onClick={open}>
        <Icon icon="creative" />
        Create new chat room
      </Button>

      <Modal>
        <Modal.Header>
          <Modal.Title>New chat room</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <FormGroup>
              <ControlLabel>Room name</ControlLabel>
              <FormControl name="name" placeholder="Enter chat room name..." />
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button block appearance="primary">
            Create new chat room
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateRoomBtnModal;
