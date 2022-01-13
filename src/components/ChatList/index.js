import { onValue, set } from "@firebase/database";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  chatsRef,
  getChatRefById,
  getMsgsRefById,
} from "../../service/firebase";

import { addChat, deleteChat } from "../../store/chats/actions";
import { Form } from "../Form";
import { ChatItem } from "./ChatItem";

export const ChatList = () => {
  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  const [fbChats, setFbChats] = useState([]);

  useEffect(() => {
    onValue(chatsRef, (snapshot) => {
      const newChats = [];

      snapshot?.forEach((chat) => {
        newChats.push(chat.val());
      });

      setFbChats(newChats);
    });
  }, []);

  const onAddChat = (newChatName) => {
    const newId = `chat${Date.now()}`;
    const newChat = {
      id: newId,
      name: newChatName,
    };
    // dispatch(addChat(newChat));
    set(getChatRefById(newId), newChat);
    set(getMsgsRefById(newId), { empty: true });
  };

  const handleDeleteChat = (id) => {
    set(getChatRefById(id), null);
    // dispatch(deleteChat(id));
  };

  return (
    <>
      <ul>
        {fbChats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} onDelete={handleDeleteChat} />
        ))}
        <Form onSubmit={onAddChat} />
      </ul>
      <Outlet />
    </>
  );
};
