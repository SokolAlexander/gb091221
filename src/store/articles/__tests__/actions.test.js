import {
  getArticles,
  getArticlesFailure,
  getArticlesRequest,
  getArticlesSuccess,
  GET_ARTICLES_REQUEST,
} from "../actions";

describe("getArticlesRequest tests", () => {
  it("return object with certain type", () => {
    const expected = {
      type: GET_ARTICLES_REQUEST,
    };

    const received = getArticlesRequest();
    expect(expected).toEqual(received);
  });
});

describe("getArticles", () => {
  it("dispatches getArticlesRequest", () => {
    const mockDispatch = jest.fn();
    getArticles()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequest());
  });

  it("calls getArticlesSuccess if fetch was successfull", async () => {
    const mockDispatch = jest.fn();
    const body = { test: "test" };
    fetch.mockResponseOnce(JSON.stringify(body));
    await getArticles()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(body));
  });

  it("calls getArticlesFailure if fetch was unsuccessfull", async () => {
    const mockDispatch = jest.fn();
    const error = { message: "test" };
    fetch.mockRejectOnce(error);
    await getArticles()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(
      getArticlesFailure(error.message)
    );
  });
});
