import { showName, SHOW_NAME } from "./actions";

const initialState = {
  name: "default name",
  showName: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NAME:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};
