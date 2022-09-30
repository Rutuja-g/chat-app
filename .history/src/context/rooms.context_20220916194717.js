import React, { createContext, useEffect, useState } from 'react';
import { database } from '../misc/firebase';
import { transformToArrWithId } from '../misc/Helpers';

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const roomListRef = database.ref('rooms');

    roomListRef.on('value', snap => {
      const data = transformToArrWithId(snap.val());
      console.log('data', data);
    });

    return () => {
      roomListRef.off();
    };
  }, []);

  return (
    <RoomsContext.Provider value="hello">{children}</RoomsContext.Provider>
  );
};
