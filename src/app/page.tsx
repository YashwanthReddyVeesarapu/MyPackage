"use client";
import Button from "@/components/Button";
import MainLayout from "@/layouts/MainLayout";
import "./styles.scss";
import Input from "@/components/Input";
import { useState } from "react";
import Container from "@/components/Container";

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const track = () => {};

  return (
    <>
      <Container>
        <h2> Track My Package</h2>
        <Input
          value={trackingNumber}
          placeholder="#Tracking ID"
          type="text"
          onChange={setTrackingNumber}
        />
        <Button onClick={() => track()}>Track</Button>
      </Container>
    </>
  );
}
