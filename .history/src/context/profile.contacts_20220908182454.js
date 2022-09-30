const { createContext } = require('react');

const ProfileContext = createContext();

export const ProfileContext = ({ children }) => {
  return <ProfileContext.Provider>{children}</ProfileContext.Provider>;
};
