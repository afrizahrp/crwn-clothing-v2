import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// as the actual value of the context is not passed in, we can use the useContext hook to access the context
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  // children is the component that is wrapped in the provider
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }; // value is the object that is passed to the context
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
