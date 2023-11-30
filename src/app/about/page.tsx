"use client";

import MainLayout from "@/layouts/MainLayout";
import React from "react";
import Container from "@/components/Container";

type Props = {};

const page = (props: Props) => {
  return <Container>

    <h1>Have You Ever Had Difficulty Tracking Your Packages?</h1>
    <br />
    <br />
    <p>Tracking numbers always getting lost in hundreds of unread emails?</p>
    <p>Welcome to MyPackage, an easy solution to all of these inconveniences</p>
    <p>MyPackage works by scanning through your emails, looking for different tracking numbers</p>
    <p>Then displaying all of your packages from all different sources in one easy to use website!</p>
    
    </Container>;
};

export default page;
