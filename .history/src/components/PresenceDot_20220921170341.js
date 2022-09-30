import React from 'react';
import { Whisper } from 'rsuite';
import { usePresence } from '../misc/custom-hooks';

const PresenceDot = ({ uid }) => {
  const presence = usePresence(uid);
  return (
    <Whisper
      placement="top"
      controlId="control-id-hover"
      trigger="hover"
      speaker={tooltip}
    >
      <Button>Hover</Button>
    </Whisper>
  );
};

export default PresenceDot;
