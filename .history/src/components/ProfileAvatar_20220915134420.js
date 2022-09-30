import React from 'react';
import { Avatar } from 'rsuite';

const ProfileAvatar = ({ name, ...avatarProps }) => {
  return <Avatar {...avatarProps}>{}</Avatar>;
};

export default ProfileAvatar;
