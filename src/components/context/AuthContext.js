"use client";
import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext("auth");

import { auth } from "@/lib/firebase/config";
import { GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [access, setAccess] = useState(null);

  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (user) => {
    setUser(user);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  if (loading)
    return (
      <div className="lds-circle">
        <div></div>
      </div>
    );

  const contextValue = {
    user,
    access,
    setAccess,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
