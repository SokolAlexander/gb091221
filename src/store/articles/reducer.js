import { REQUEST_STATUS } from "../../utils/constants";
import {
  GET_ARTICLES_FAILURE,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
} from "./actions";

const initialState = {
  data: [],
  request: {
    error: "",
    status: REQUEST_STATUS.IDLE,
  },
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        request: {
          error: "",
          status: REQUEST_STATUS.PENDING,
        },
      };
    case GET_ARTICLES_FAILURE:
      return {
        ...state,
        request: {
          error: action.payload,
          status: REQUEST_STATUS.FAILURE,
        },
      };
    case GET_ARTICLES_SUCCESS: {
      return {
        data: action.payload,
        request: {
          error: "",
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    }
    default:
      return state;
  }
};
