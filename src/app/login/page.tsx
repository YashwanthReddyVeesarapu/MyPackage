"use client";
import MainLayout from "@/layouts/MainLayout";
import React, { useState } from "react";
import Input from "@/components/Input";
import Container from "@/components/Container";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { UserAuth } from "../../components/context/AuthContext";
import Link from "next/link";
import { redirect } from "next/navigation";

import axios from "axios";
import { Button } from "@mui/material";
import { Google } from "@mui/icons-material";

type Props = {};

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const user = UserAuth();

  if (user) return redirect("/profile");

  const fetchGmailData = async (accessToken: string, userId: string) => {
    try {
      // Specify the Gmail API endpoint for the user's messages
      const apiUrl = `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`;

      // Make a GET request to the Gmail API with the access token
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // Process the Gmail API response
      console.log("Gmail API Response:", response.data);
      // You can handle and display the data as needed
    } catch (error) {
      console.error("Error fetching Gmail data:", error);
    }
  };

  const handleSocial = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/gmail.readonly");

    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);

    //Access toke to fetch gmail data
    const token = credential?.accessToken;
    const userId = result.user.email;

    if (token && userId) {
      // Call the function to fetch Gmail data with the obtained access token
      await fetchGmailData(token, userId);
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <div>
      <Container>
        Login with Google
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
        <Button onClick={() => handleSocial()}>
          <Google style={{ fontSize: "50px" }} />
        </Button>
      </Container>
    </div>
  );
};

export default LoginPage;
