import React from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

const CurrentRoomContext = createContext();

export const CurrentRoomProvider = ({ children, data }) => {
  return (
    <CurrentRoomContext.Provider value={data}>
      {children}
    </CurrentRoomContext.Provider>
  );
};

const useCurrentRoom = () =>
  useContextSelector(PersonContext, state => state.firstName);
