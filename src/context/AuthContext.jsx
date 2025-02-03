import React, { useState, useContext, createContext } from "react";
import { auth } from "../firebase";

// Create Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);

  const value = {
    currentUser,
    setCurrentUser
  }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext);
}

