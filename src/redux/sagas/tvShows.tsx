import { AxiosError, AxiosInstance } from "axios";
import { call, put, delay, takeLeading, select } from "redux-saga/effects";
import axiosInstance from "../../utils/axiosInstance";
import {
  GET_TV_FOR_QUERY_SHOWS_REQUEST,
  GET_TV_SHOWS_REQUEST,
} from "../types/tvShows";
import {
  getTvShowForIdFailure,
  getTvShowForIdRequest,
  getTvShowForIdSuccess,
  getTvShowsFailure,
  getTvShowsRequest,
  getTvShowsSuccess,
} from "../actions/tvShows";

export function* getAllTvShows(page: number): Generator<any, any, any> {
  const axiosInstanceService: AxiosInstance = axiosInstance();
  yield put(getTvShowsRequest(page));
  try {
    const response = yield call(
      axiosInstanceService.get,
      `trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    );
    const currentResults: any[] = yield select(
      (state: any) => state.tvShows.data
    );
    if (currentResults.length == 0) {
      yield put(getTvShowsSuccess(response.data.results));
    } else {
      const newResults: any[] = response.data.results;
      const updatedResults = currentResults.concat(newResults);
      yield put(getTvShowsSuccess(updatedResults));
    }
  } catch (error) {
    const err = error as AxiosError;
    yield delay(3500);
    yield put(getTvShowsFailure(err.message));
  }
}

export function* watchGetAllTvShows() {
  yield takeLeading(GET_TV_SHOWS_REQUEST, function* (action: any) {
    const page = action.payload || "";
    yield call(getAllTvShows, page);
  });
}

export function* getTvShowsForQuery(
  value: string,
  page: number
): Generator<any, any, any> {
  const axiosInstanceService: AxiosInstance = axiosInstance();
  yield put(getTvShowForIdRequest(value, page));
  console.log("lanzo");
  try {
    const response = yield call(
      axiosInstanceService.get,
      `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=first_air_date.desc&first_air_date.gte=${value}&first_air_date.lte=${value}&with_genres=18&vote_average.gte=7&page=${page}`
    );
    const currentResults: any[] = yield select(
      (state: any) => state.tvShows.dataForQuery
    );
    console.log(currentResults, "currentResultscurrentResults");
    if (currentResults.length == 0) {
      yield put(getTvShowForIdSuccess(response.data.results));
    } else {
      const newResults: any[] = response.data.results;
      const updatedResults = currentResults.concat(newResults);
      yield put(getTvShowForIdSuccess(updatedResults));
    }
  } catch (error) {
    const err = error as AxiosError;
    yield delay(3500);
    yield put(getTvShowForIdFailure(err.message));
  }
}

export function* watchGetTvShowsForQuery() {
  yield takeLeading(GET_TV_FOR_QUERY_SHOWS_REQUEST, function* (action: any) {
    const id = action.payload || "";
    const page = action.page || "";
    yield call(getTvShowsForQuery, id, page);
  });
}
