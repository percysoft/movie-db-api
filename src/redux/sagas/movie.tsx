import { AxiosError, AxiosInstance } from "axios";
import { call, put, delay, takeLeading, select } from "redux-saga/effects";
import axiosInstance from "../../utils/axiosInstance";
import {
  getMovieFailure,
  getMovieForIdFailure,
  getMovieForIdRequest,
  getMovieForIdSuccess,
  getMovieRequest,
  getMovieSuccess,
} from "../actions/movie";
import { GET_MOVIE_QUERY_REQUEST, GET_MOVIE_REQUEST } from "../types/movie";

export function* getAllMovieSaga(page: number): Generator<any, any, any> {
  const axiosInstanceService: AxiosInstance = axiosInstance();
  yield put(getMovieRequest(page));
  try {
    const response = yield call(
      axiosInstanceService.get,
      `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    const currentResults: any[] = yield select(
      (state: any) => state.movie.data
    );
    if (currentResults.length == 0) {
      yield put(getMovieSuccess(response.data.results));
    } else {
      const newResults: any[] = response.data.results;
      const updatedResults = currentResults.concat(newResults);
      yield put(getMovieSuccess(updatedResults));
    }
  } catch (error) {
    const err = error as AxiosError;
    yield delay(3500);
    yield put(getMovieFailure(err.message));
  }
}

export function* watchGetAllMovie() {
  yield takeLeading(GET_MOVIE_REQUEST, function* (action: any) {
    const page = action.payload || "";
    yield call(getAllMovieSaga, page);
  });
}

export function* getMovieForQuery(
  value: string,
  page: number
): Generator<any, any, any> {
  const axiosInstanceService: AxiosInstance = axiosInstance();
  yield put(getMovieForIdRequest(value, page));
  try {
    const response = yield call(
      axiosInstanceService.get,
      `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=search/movie?&query=${value}`
    );
    const currentResults: any[] = yield select(
      (state: any) => state.movie.dataForQuery
    );
    console.log(currentResults, "currentResultscurrentResults");
    // if (currentResults.length == 0) {
    yield put(getMovieForIdSuccess(response.data.results));
    // } else {
    //   const newResults: any[] = response.data.results;
    //   const updatedResults = currentResults.concat(newResults);
    //   yield put(getMovieForIdSuccess(updatedResults));
    // }
  } catch (error) {
    const err = error as AxiosError;
    yield delay(3500);
    yield put(getMovieForIdFailure(err.message));
  }
}

export function* watchGetMovieForQuery() {
  yield takeLeading(GET_MOVIE_QUERY_REQUEST, function* (action: any) {
    const id = action.payload || "";
    const page = action.page || "";
    yield call(getMovieForQuery, id, page);
  });
}
