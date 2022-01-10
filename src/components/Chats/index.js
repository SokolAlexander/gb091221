import React, { useEffect, useMemo, useRef } from "react";
import { Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Form } from "../Form";
import { MessageList } from "../MessageList";
import { AUTHORS } from "../../utils/constants";
import { addMessage } from "../../store/messages/actions";
import {
  selectMessages,
  selectMessagesByChatId,
} from "../../store/messages/selectors";

import "./Chats.css";

function Chats() {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);
  const formInputRef = useRef();

  const getMessagesByChatId = useMemo(
    () => selectMessagesByChatId(chatId),
    [chatId]
  );

  const messagesForCurrentChat = useSelector(getMessagesByChatId);
  const dispatch = useDispatch();

  const onAddMessage = (newMessage, chatId) => {
    dispatch(addMessage(newMessage, chatId));
  };

  const handleSubmit = (text) => {
    const newMessage = { text, author: AUTHORS.HUMAN, id: `msg-${Date.now()}` };
    onAddMessage(newMessage, chatId);
  };

  // useEffect(() => {
  //   let timeout;
  //   if (
  //     messages[chatId]?.[messages[chatId].length - 1]?.author === AUTHORS.HUMAN
  //   ) {
  //     timeout = setTimeout(() => {
  //       onAddMessage(
  //         {
  //           text: "iambot",
  //           author: AUTHORS.BOT,
  //           id: `msg-${Date.now()}`,
  //         },
  //         chatId
  //       );
  //     }, 1500);
  //   }

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [messages]);

  useEffect(() => {
    formInputRef.current?.focus();
  }, [chatId]);

  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <h3>HEADER</h3>
      <div className="chat-wrap">
        <div className="App">
          <Form ref={formInputRef} onSubmit={handleSubmit} />
          <MessageList messages={messagesForCurrentChat} />
        </div>
      </div>
    </>
  );
}

export default Chats;
