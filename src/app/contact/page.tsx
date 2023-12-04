"use client";

import MainLayout from "@/layouts/MainLayout";
import React from "react";
import Container from "@/components/Container";

type Props = {};

const page = (props: Props) => {
  return (
    <Container>
      <h1>Contact Us</h1>
      Kartik Ahluwalia kahluwal@stevens.edu
      <br />
      <br />
      Sanjeet Vinod Jain sjain68@stevens.edu
      <br />
      <br />
      Jeremy Krugman jkrugman@stevens.edu
      <br />
      <br />
      Yashwanth Reddy Veesarapu yveesara@stevens.edu
    </Container>
  );
};

export default page;
