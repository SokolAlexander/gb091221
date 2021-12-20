import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";
import App from "../../App";
import { ChatList } from "../ChatList";
import Chats from "../Chats";
import { Home } from "../Home";
import { NoMatch } from "../NoMatch";
import { Profile } from "../Profile";

const initialChats = [
  {
    id: "chat1",
    name: "Chat 1",
  },
  {
    id: "chat2",
    name: "Chat 2",
  },
  {
    id: "chat3",
    name: "Chat 3",
  },
  {
    id: "chat4",
    name: "Chat 4",
  },
];

const initialMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});

export const Router = () => {
  const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initialMessages);

  const handleAddMessage = (newMessage, chatId) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [chatId]: [...prevMessages[chatId], newMessage],
    }));
  };

  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink
            style={(isActive) => ({ color: isActive ? "green" : "blue" })}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            style={(isActive) => ({ color: isActive ? "green" : "blue" })}
            to="/chats"
          >
            Chats
          </NavLink>
        </li>
        <li>
          <NavLink
            style={(isActive) => ({ color: isActive ? "green" : "blue" })}
            to="profile"
          >
            PROFILE
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chats" element={<ChatList chats={chats} />}>
          <Route
            path=":chatId"
            element={
              <Chats messages={messages} onAddMessage={handleAddMessage} />
            }
          />
        </Route>
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};
