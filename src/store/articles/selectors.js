import { REQUEST_STATUS } from "../../utils/constants";

export const selectArticles = (state) => state.articles.data;
export const selectErrorMessage = (state) => state.articles.request.error;
export const selectIsLoading = (state) =>
  state.articles.request.status === REQUEST_STATUS.PENDING;
export const selectIsError = (state) =>
  state.articles.request.status === REQUEST_STATUS.FAILURE;
