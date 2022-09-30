import React from 'react';
import { Badge, Tooltip, Whisper } from 'rsuite';
import { usePresence } from '../misc/custom-hooks';

const PresenceDot = ({ uid }) => {
  const presence = usePresence(uid);
  return (
    <Whisper
      placement="top"
      controlId="control-id-hover"
      trigger="hover"
      speaker={<Tooltip>hello</Tooltip>}
    >
      <Badge />
    </Whisper>
  );
};

export default PresenceDot;
