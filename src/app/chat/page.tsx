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
      <h2>Chat</h2>
      <p>
        We are working on chat implemention.... <br />
        Stay tuned for updates
      </p>
      {/* {chatLog.map((m: ChatMessage, i: number) => (
        <div key={i}>{m.content}</div>
      ))}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Type your message here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form> */}
    </Container>
  );
};

export default ChatPage;
