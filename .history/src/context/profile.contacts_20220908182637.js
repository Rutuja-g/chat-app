import React, { createContext } from 'react';

const ProfileContext = createContext();

export const ProfileContext = ({ children }) => {
  return <ProfileContext.Provider>{children}</ProfileContext.Provider>;
};
