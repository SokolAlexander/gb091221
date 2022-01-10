import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import {
  selectArticles,
  selectErrorMessage,
  selectIsError,
  selectIsLoading,
} from "../../store/articles/selectors";
import { apiUrl } from "../../utils/constants";

export const Articles = () => {
  const articles = useSelector(selectArticles);
  const errorMsg = useSelector(selectErrorMessage);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();

  const requestArticles = async () => {
    dispatch(getArticles());
  };

  // const getArticles = () => {
  //   setLoading(true);
  //   fetch(apiUrl)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Request error: " + response.status);
  //       }
  //       return response.json();
  //     })
  //     .then((result) => {
  //       setArticles(result);
  //     })
  //     .catch((err) => {
  //       setError(true);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  useEffect(() => {
    requestArticles();
  }, []);

  return (
    <>
      <h3>ARTICLES</h3>
      {isLoading && <CircularProgress />}
      {!isError ? (
        <ol>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ol>
      ) : (
        <>
          <h4>Error: {errorMsg}</h4>
          <button onClick={requestArticles}>Try again</button>
        </>
      )}
    </>
  );
};
