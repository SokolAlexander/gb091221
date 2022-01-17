import { onValue, set } from "@firebase/database";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  chatsRef,
  getChatRefById,
  getMsgsRefById,
} from "../../service/firebase";

import {
  addChat,
  addChatWithFb,
  deleteChat,
  deleteChatWithFb,
  initChatsTracking,
} from "../../store/chats/actions";
import { initMsgsTracking } from "../../store/messages/actions";
import { Form } from "../Form";
import { ChatItem } from "./ChatItem";

export const ChatList = () => {
  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initChatsTracking());
    dispatch(initMsgsTracking());
  }, []);

  const onAddChat = (newChatName) => {
    addChatWithFb(newChatName);
  };

  const handleDeleteChat = (id) => {
    dispatch(deleteChatWithFb(id));
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} onDelete={handleDeleteChat} />
        ))}
        <Form onSubmit={onAddChat} />
      </ul>
      <Outlet />
    </>
  );
};
