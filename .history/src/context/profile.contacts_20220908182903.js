import React, { createContext, useState } from 'react';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfiles] = useState(false);

  return <ProfileContext.Provider>{children}</ProfileContext.Provider>;
}
