import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../misc/firebase';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(authObj => {
      // console.log('authObj', authObj);
      if (authObj) {
      } else {
        setProfile(null);
      }
    });
  }, []);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);
