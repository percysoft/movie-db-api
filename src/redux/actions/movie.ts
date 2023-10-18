import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR,
  GET_MOVIE_QUERY_REQUEST,
  GET_MOVIE_QUERY_SUCCESS,
  GET_MOVIE_QUERY_ERROR,
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
