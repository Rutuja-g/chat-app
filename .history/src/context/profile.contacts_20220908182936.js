import React, { createContext, useState } from 'react';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile] = useState(false);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
}
