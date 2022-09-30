import React, { useState, useCallback } from 'react';
import { Alert, Icon, InputGroup } from 'rsuite';
import { ReactMic } from 'react-mic';

import { useParams } from 'react-router';
import { storage } from '../../../misc/firebase';

const AudioMsgBtn = ({ afterUpload }) => {
  const { chatId } = useParams();
  const [isRecording, setIsRecording] = useState(false);

  const onClick = useCallback(() => {
    setIsRecording(p => !p);
  }, []);

  const onUpload = useCallback(async () => {
    try {
      const snap = await storage
        .ref(`/chat/${chatId}`)
        .child(`audio_${Date.now()}.mp3`)
        .put(data.blob, {
          cacheControl: `public, max-age=${3600 * 24 * 3}`,
        });
      const file = {
        contentType: snap.metadata.contentType,
        name: snap.metadata.name,
        url: await snap.ref.getDownloadURL(),
      };
      afterUpload([file]);
    } catch (err) {
      Alert.error(error.message);
    }
  }, [afterUpload, chatId]);

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
