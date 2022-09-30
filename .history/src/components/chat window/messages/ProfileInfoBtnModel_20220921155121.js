import React from 'react';
import { Button } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';

const ProfileInfoBtnModel = ({ profile }) => {
  const { isOpen, close, open } = useModalState();

  const shortName = profile.name.split(' ')[0];

  return (
    <div>
      <Button>{shortName}</Button>
    </div>
  );
};

export default ProfileInfoBtnModel;
