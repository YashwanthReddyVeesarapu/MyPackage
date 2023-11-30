"use client";

import MainLayout from "@/layouts/MainLayout";
import React from "react";
import Container from "@/components/Container";

type Props = {};

const page = (props: Props) => {
  return <Container>
    <h1>DISCLAIMER</h1>
    <p>MyPackage will be scanning through your emails for package tracking numbers. </p>
    <p>We will only be using tracking numbers found in emails to get package data</p>
    <p>None of your data will be stored </p>
    
    </Container>;
};

export default page;
