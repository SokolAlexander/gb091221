import { ADD_CHAT } from "./actions";

const initialState = [];

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return [...state, action.payload];
    default:
      return state;
  }
};
