"use client";
import MainLayout from "@/layouts/MainLayout";
import React, { useState } from "react";
import Input from "@/components/Input";
import Container from "@/components/Container";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { UserAuth } from "../../components/context/AuthContext";
import { redirect } from "next/navigation";

import { Button } from "@mui/material";
import { Google } from "@mui/icons-material";

import { apiInstance } from "@/lib/api/apiInstance";
import { useDispatch } from "react-redux";

import { fetchData, fetchUserData } from "@/redux/actions/actions";

type Props = {};

type Context = {
  user: any;
  access: string;
  setAccessToken: any;
};

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const auth = getAuth();
  const context: any = UserAuth();

  if (context.user) return redirect("/profile");

  // const fetchGmailData = async (accessToken: string, userId: string) => {
  //   try {
  //     // Specify the Gmail API endpoint for the user's messages
  //     // const apiUrl = `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`;

  //     const apiUrl = `http://127.0.0.1:8000/fetch-gmail-data`;
  //     // Make a GET request to the Gmail API with the access token
  //     const response = await apiInstance.get("/fetch-gmail-data", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         UserId: userId,
  //       },
  //     });

  //     return response.data;
  //     // You can handle and display the data as needed
  //   } catch (error) {
  //     console.error("Error fetching Gmail data:", error);
  //     alert("Something went wrong while fetching data");
  //   }
  // };

  const handleSocial = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/gmail.readonly");

    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);

    //Access toke to fetch gmail data
    const token: any = credential?.accessToken;
    const email = result.user.email;

    if (token && email) {
      // Call the function to fetch Gmail data with the obtained access token

      // const items = await fetchGmailData(token, userId);

      // dispatch(setData(items));
      dispatch(
        fetchUserData({
          uid: result.user.uid,
          displayName: result.user.displayName,
          email: result.user.email,
          token: token,
        })
      );
      dispatch(fetchData({ token: token, email: email }));
      // const insertUserResponse = await apiInstance.post("/users", userData);
      // console.log(insertUserResponse);

      // await fetchGmailData(token, userId);
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <div>
      <h2>Login is required to user our services</h2>
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
