"use client";
import MainLayout from "@/layouts/MainLayout";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../components/context/AuthContext";
import Container from "@/components/Container";
import { permanentRedirect } from "next/navigation";
import { Button } from "@mui/material";
import { clearData, logoutUser } from "@/redux/actions/actions";
import { useDispatch } from "react-redux";
import Link from "next/link";

const ProfilePage = () => {
  const context: any = UserAuth();

  if (!context.user) {
    window.location.href = "/login";
  }
  return (
    <>
      {context.user && (
        <Container>
          {<h3>Hey {context.user.displayName}, Welcome to MyPackage</h3>}
          <Button onClick={() => (window.location.href = "/logout")}>
            Logout
          </Button>
        </Container>
      )}
    </>
  );
};

export default ProfilePage;
