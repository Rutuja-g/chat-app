import React from 'react';
import { Icon, InputGroup } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';

const AttachmentBtnModal = () => {
  const { isOpen, close, open } = useModalState();
  return (
    <div>
      <InputGroup.Button onClick={open}>
        <Icon icon="attachment" />
      </InputGroup.Button>
    </div>
  );
};

export default AttachmentBtnModal;
