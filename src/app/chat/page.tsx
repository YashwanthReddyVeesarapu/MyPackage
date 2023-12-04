"use client";

import Container from "@/components/Container";
import MainLayout from "@/layouts/MainLayout";
import React, { FormEvent, useState } from "react";

type ChatMessage = {
  role: string;
  content: string;
};

const ChatPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chatLog, setChatLog] = useState<Array<ChatMessage>>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setChatLog((prevLog: Array<ChatMessage>) => [
      ...prevLog,
      { role: "user", content: inputValue },
    ]);
    setInputValue("");
  };

  return (
    <Container>
      <h2>Google Integrations</h2>
      <p>
        We are working on Google Calendar and TODO list implemention.... <br />
        Stay tuned for updates
      </p>
    </Container>
  );
};

export default ChatPage;
