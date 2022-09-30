import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, database } from '../misc/firebase';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(authObj => {
      // console.log('authObj', authObj);
      if (authObj) {
        database.ref(`/profiles/${authObj.uid}`).on('value', snap => {});

        const data = {
          uid: authObj.uid,
          email: authObj.email,
        };
        setProfile(data);
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
