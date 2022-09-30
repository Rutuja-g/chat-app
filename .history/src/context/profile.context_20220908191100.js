import React, { createContext, useContext, useEffect, useState } from 'react';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged();
  }, []);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);
