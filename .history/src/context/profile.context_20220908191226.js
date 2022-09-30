import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../misc/firebase';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(authObj => {
      console.log('authObj', authObj);
    });
  }, []);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);
