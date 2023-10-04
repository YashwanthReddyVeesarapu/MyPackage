"use client";

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
    <MainLayout>
      <h2>Chat Page</h2>
      {chatLog.map((m: ChatMessage, i: number) => (
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
      </form>
    </MainLayout>
  );
};

export default ChatPage;
