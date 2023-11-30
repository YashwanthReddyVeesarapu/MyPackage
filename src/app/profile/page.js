"use client";
import MainLayout from "@/layouts/MainLayout";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../components/context/AuthContext";
import Container from "@/components/Container";
import { redirect } from "next/navigation";
import { Button } from "@mui/material";

const ProfilePage = () => {
  const user = UserAuth();

  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth);
  };

  if (!user) {
    redirect("/login");
  }
  return (
    <>
      {user && (
        <Container>
          {<h3>Hey {user.displayName}, Welcome to MyPackage</h3>}
          <Button onClick={() => handleLogout()}>Logout</Button>
        </Container>
      )}
    </>
  );
};

export default ProfilePage;
