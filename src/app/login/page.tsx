"use client";
import MainLayout from "@/layouts/MainLayout";
import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Container from "@/components/Container";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {};

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const user = UserAuth();

  if (user) return redirect("/profile");

  const handleSocial = async () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <Container>
        {/* <h2>Login</h2>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={setEmail}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
        <Button onClick={() => handleLogin()}>Login</Button>
        <br /> */}
        <Button onClick={() => handleSocial()}>Google</Button>
      </Container>
    </div>
  );
};

export default LoginPage;
