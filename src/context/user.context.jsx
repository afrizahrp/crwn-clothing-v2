import React, { createContext, useState } from "react";

// as the actual value of the context is not passed in, we can use the useContext hook to access the context
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  // children is the component that is wrapped in the provider
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }; // value is the object that is passed to the context

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
