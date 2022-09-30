import React from 'react';
import { Button, Modal } from 'rsuite';
import { useModalState } from '../../misc/custom-hooks';

const fileInputTypes = '.png, .jpeg, .jpg';

const acceptedFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];

const AvatarUploadBtn = () => {
  const { isOpen, open, close } = useModalState;

  const onFileInputChange = ev => {
    const currFiles = ev.target.files;

    if (currFiles.length === 1) {
      const file = currFiles[0];
    }
  };

  return (
    <div className="mt-3 text-center">
      <div>
        <label
          htmlFor="avatar-upload"
          className="d-block cursor-pointer padded"
        >
          Select new avatar
          <input
            id="avatar-upload"
            type="file"
            className="d-none"
            accept={fileInputTypes}
            onChange={onFileInputChange}
          />
        </label>

        <Modal show={isOpen} onHide={close}>
          <Modal.Header>
            <Modal.Title>Adjust and upload new avatar</Modal.Title>
          </Modal.Header>
          <Modal.Body>xxx</Modal.Body>
          <Modal.Footer>
            <Button block appearance="ghost">
              Upload new avatar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AvatarUploadBtn;
