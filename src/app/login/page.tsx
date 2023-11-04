"use client";
import MainLayout from "@/layouts/MainLayout";
import React from "react";
import { generateAuthUrl } from "./../../oauth.js";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <MainLayout>
      <div>
        <h1>Gmail App</h1>
        <div>
          <button onClick={() => generateAuthUrl()}>Login with Google</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
