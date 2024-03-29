"use client";
import { useContext, createContext, useState } from "react";

const AuthContext = createContext("auth");

import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [access, setAccess] = useState(null);

  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLoading(false);
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
    setLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
