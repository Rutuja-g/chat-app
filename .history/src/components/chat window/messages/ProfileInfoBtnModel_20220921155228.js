import React from 'react';
import { Button, Modal } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';

const ProfileInfoBtnModel = ({ profile }) => {
  const { isOpen, close, open } = useModalState();

  const shortName = profile.name.split(' ')[0];

  return (
    <div>
      <Button>{shortName}</Button>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header></Modal.Header>
      </Modal>
    </div>
  );
};

export default ProfileInfoBtnModel;
