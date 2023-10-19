import { useEffect, useState } from "react";
import {
  getMovieForIdRequest,
  getMovieRequest,
} from "../../../../redux/actions/movie";

export const useFetchMovie = (
  dispatch: any,
  page: number,
  valueInputMovie: string,
  setValueInputMovie: (value:string) => void
) => {
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    const delayDebounceFn = setTimeout(() => {
      if (valueInputMovie !== "") {
        dispatch(getMovieForIdRequest(valueInputMovie, page));
      } else {
        dispatch(getMovieRequest(page));
      }
      setValueInputMovie(valueInputMovie)
    }, 500);

    setTimer(delayDebounceFn);

    return () => clearTimeout(delayDebounceFn);
  }, [dispatch, valueInputMovie, page]);
};
