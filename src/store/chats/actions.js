import { onValue, set } from "@firebase/database";
import {
  chatsRef,
  getChatRefById,
  getMsgsRefById,
} from "../../service/firebase";

export const SET_CHATS = "CHATS::SET_CHATS";
export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat,
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  payload: chatId,
});

const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

export const initChatsTracking = () => (dispatch) => {
  onValue(chatsRef, (snapshot) => {
    const newChats = [];

    snapshot?.forEach((chat) => {
      newChats.push(chat.val());
    });

    dispatch(setChats(newChats));
  });
};

export const addChatWithFb = (newChatName) => () => {
  const newId = `chat${Date.now()}`;
  const newChat = {
    id: newId,
    name: newChatName,
  };
  set(getChatRefById(newId), newChat);
  set(getMsgsRefById(newId), { empty: true });
};

export const deleteChatWithFb = (id) => () => {
  set(getChatRefById(id), null);
  set(getMsgsRefById(id), null);
};
