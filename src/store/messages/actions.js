import { onValue, push } from "@firebase/database";
import {
  getMsgsListRefById,
  getMsgsRefById,
  msgsRef,
} from "../../service/firebase";
import { AUTHORS } from "../../utils/constants";

export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";
export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessage = (newMessage, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    message: newMessage,
    chatId,
  },
});

export const deleteMessage = (messageId, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    messageId,
    chatId,
  },
});

let timeout;

export const addMessageWithReply = (newMessage, chatId) => (dispatch) => {
  dispatch(addMessage(newMessage, chatId));

  clearTimeout(timeout);

  if (newMessage.author !== AUTHORS.BOT) {
    timeout = setTimeout(() => {
      dispatch(
        addMessage(
          {
            text: "iambot",
            author: AUTHORS.BOT,
            id: `msg-${Date.now()}`,
          },
          chatId
        )
      );
    }, 2000);
  }
};

const setMsgs = (msgs) => ({
  type: SET_MESSAGES,
  payload: msgs,
});

export const initMsgsTracking = () => (dispatch) => {
  onValue(msgsRef, (snapshot) => {
    const newMsgs = {};

    snapshot.forEach((chatMsgsSnap) => {
      newMsgs[chatMsgsSnap.key] = Object.values(
        chatMsgsSnap.val().messageList || {}
      );
    });

    dispatch(setMsgs(newMsgs));
  });
};

export const addMsgWithFb = (newMsg, chatId) => () => {
  push(getMsgsListRefById(chatId), newMsg);
};
