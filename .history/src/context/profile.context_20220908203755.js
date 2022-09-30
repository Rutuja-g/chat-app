import React, { createContext, useContext, useEffect, useState } from 'react';

import { auth, database } from '../misc/firebase';
import { Container, Loader } from 'react-dom';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(authObj => {
      // console.log('authObj', authObj);
      if (authObj) {
        database.ref(`/profiles/${authObj.uid}`).on('value', snap => {
          const { name, createdAt } = snap.val();
          // console.log('profileData', profileData);
          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };

          setProfile(data);
          setIsLoading(false);
        });
      } else {
        setProfile(null);
        setProfile(null);
      }
    });
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);
