import React from 'react';
import { Button, Tooltip, Whisper } from 'rsuite';
import { usePresence } from '../misc/custom-hooks';

const PresenceDot = ({ uid }) => {
  const presence = usePresence(uid);
  return (
    <Whisper
      placement="top"
      controlId="control-id-hover"
      trigger="hover"
      speaker={
        <Tooltip>
          This is a help <i>tooltip</i> .
        </Tooltip>
      }
    >
      {' '}
    </Whisper>
  );
};

export default PresenceDot;
