import { useEffect } from "react";
import {
  getMovieForIdRequest,
  getMovieRequest,
} from "../../../../redux/actions/movie";

export const useFetchMovie = (
  dispatch: any,
  page: number,
  valueInputMovie: string
) => {
  useEffect(() => {
    if (valueInputMovie !== "") {
      dispatch(getMovieForIdRequest(valueInputMovie, page));
    } else {
      dispatch(getMovieRequest(page));
    }
  }, [dispatch, valueInputMovie, page]);
};
