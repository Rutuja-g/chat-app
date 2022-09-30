import React, { useCallback, useState } from 'react';
import { Icon, Input, InputGroup } from 'rsuite';
import firebase from 'firebase/app';
import { useProfile } from '../../../context/profile.context';

function assembleMessage(profile, chatId) {
  return {
    roomId: chatId,
    author: {
      name: profile.name,
      uid: profile.uid,
      createdAt: profile.createdAt,
      ...(profile.avatar ? { avatar: profile.avatar } : {}),
    },
    createdAt: firebase.database.ServerValue.TIMESTAMP,
  };
}
const Bottom = () => {
  const [input, setInput] = useState('');
  const { profile } = useProfile();
  const onInputChange = useCallback(value => {
    setInput(value);
  }, []);

  const onSendClick = () => {
    if (input.trim() === '') {
      return;
    }
    const msgData = assembleMessage(profile, chatId);
  };
  return (
    <div>
      <InputGroup>
        <Input
          placeholder="Write a new message here..."
          value={input}
          onChange={onInputChange}
        />
        <InputGroup.Button
          color="blue"
          appearance="primary"
          onClick={onSendClick}
        >
          <Icon icon="send" />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};

export default Bottom;
