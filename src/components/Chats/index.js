import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import "./Chats.css";
import { Form } from "../Form";
import { MessageList } from "../MessageList";
import { AUTHORS } from "../../utils/constants";

function Chats({ messages, onAddMessage }) {
  const { chatId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (text) => {
    const newMessage = { text, author: AUTHORS.HUMAN, id: `msg-${Date.now()}` };
    onAddMessage(newMessage, chatId);
  };

  useEffect(() => {
    let timeout;
    if (
      messages[chatId]?.[messages[chatId].length - 1]?.author === AUTHORS.HUMAN
    ) {
      timeout = setTimeout(() => {
        onAddMessage(
          {
            text: "iambot",
            author: AUTHORS.BOT,
            id: `msg-${Date.now()}`,
          },
          chatId
        );
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <h3>HEADER</h3>
      <div className="chat-wrap">
        <div className="App">
          <Form onSubmit={handleSubmit} />
          <MessageList messages={messages[chatId]} />
        </div>
      </div>
    </>
  );
}

export default Chats;