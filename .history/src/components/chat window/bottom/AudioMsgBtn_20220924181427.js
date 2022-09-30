import React from 'react';
import { Icon, InputGroup } from 'rsuite';
import { ReactMic } from 'react-mic';
import { useState } from 'react';
import { useCallback } from 'react';

const AudioMsgBtn = ({ afterUpload }) => {
  const [isRecording, setIsRecording] = useState(false);
  const onUpload = useCallback(() => {}, []);
  const onClick = useCallback(() => {
    setIsRecording(p => !p);
  }, []);
  return (
    <InputGroup.Button onClick={onClick}>
      <Icon icon="microphone" />
      <ReactMic
        record={isRecording}
        className="d-none"
        onStop={onUpload}
        mimeType="audio/mp3"
      />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
