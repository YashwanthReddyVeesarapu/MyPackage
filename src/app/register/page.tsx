"use client";
import Input from "@/components/Input";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@mui/material";
import React, { useState } from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleRegistration = () => {};
  return (
    <>
      <div>
        <h1>Login</h1>
        <div>
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
          <Input
            type="password"
            placeholder="Password"
            value={cpassword}
            onChange={setCpassword}
          />
          <Button onClick={() => handleRegistration()}>Register</Button>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
