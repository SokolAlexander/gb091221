import { apiUrl } from "../../utils/constants";

export const GET_ARTICLES_REQUEST = "ARTICLES::GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS = "ARTICLES::GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_ARTICLES_FAILURE";

export const getArticlesRequest = () => ({
  type: GET_ARTICLES_REQUEST,
});

export const getArticlesSuccess = (data) => ({
  type: GET_ARTICLES_SUCCESS,
  payload: data,
});

export const getArticlesFailure = (err) => ({
  type: GET_ARTICLES_FAILURE,
  payload: err,
});

export const getArticles = () => async (dispatch) => {
  dispatch(getArticlesRequest());

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Request error: " + response.status);
    }
    const result = await response.json();

    dispatch(getArticlesSuccess(result));
  } catch (e) {
    dispatch(getArticlesFailure(e.message));
  }
};
