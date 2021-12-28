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
