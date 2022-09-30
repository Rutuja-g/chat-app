import React, { createContext, useState } from 'react';

const ProfileContext = createContext();

export const ProfileContext = ({ children }) => {
  const [profile, setProfiles] = useState(false);
  return <ProfileContext.Provider>{children}</ProfileContext.Provider>;
};
