import { AUTHORS } from "../../utils/constants";

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
