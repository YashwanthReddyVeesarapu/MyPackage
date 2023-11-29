"use client";
import { useContext, createContext, useState } from "react";

const AuthContext = createContext("auth");

import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  console.log(user);
  if (loading)
    return (
      <div className="lds-circle">
        <div></div>
      </div>
    );

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
