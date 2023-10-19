import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR,
  GET_MOVIE_QUERY_REQUEST,
  GET_MOVIE_QUERY_SUCCESS,
  GET_MOVIE_QUERY_ERROR,
  CLEAR_DATA_QUERY,
  GET_DETAIL_MOVIE_REQUEST,
  GET_DETAIL_MOVIE_SUCCESS,
  GET_DETAIL_MOVIE_ERROR,
  CLEAR_DATA_DETAIL,
} from "../types/movie";

export const getMovieRequest = (value: number) => ({
  type: GET_MOVIE_REQUEST,
  payload: value,
});

export const getMovieSuccess = (data: any) => ({
  type: GET_MOVIE_SUCCESS,
  payload: data,
});

export const getMovieFailure = (error: any) => ({
  type: GET_MOVIE_ERROR,
  errorPaylod: error,
});

export const getMovieForIdRequest = (value: string, page: number) => ({
  type: GET_MOVIE_QUERY_REQUEST,
  payload: value,
  page: page,
});

export const getMovieForIdSuccess = (data: any) => ({
  type: GET_MOVIE_QUERY_SUCCESS,
  payload: data,
});

export const getMovieForIdFailure = (error: any) => ({
  type: GET_MOVIE_QUERY_ERROR,
  errorPaylod: error,
});

export const getMovieDetailRequest = (value: number) => ({
  type: GET_DETAIL_MOVIE_REQUEST,
  payload: value,
});

export const getMovieDetailSuccess = (data: any) => ({
  type: GET_DETAIL_MOVIE_SUCCESS,
  payload: data,
});

export const getMovieDetailFailure = (error: any) => ({
  type: GET_DETAIL_MOVIE_ERROR,
  errorPaylod: error,
});

export const clearDataQuery = () => ({
  type: CLEAR_DATA_QUERY,
});

export const clearDataDetail = () => ({
  type: CLEAR_DATA_DETAIL,
});

