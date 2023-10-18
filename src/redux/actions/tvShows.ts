import {
  CLEAR_DATA_QUERY,
  GET_TV_FOR_QUERY_SHOWS_REQUEST,
  GET_TV_SHOWS_ERROR,
  GET_TV_SHOWS_REQUEST,
  GET_TV_SHOWS_SUCCESS,
  GET_TV__FOR_QUERY_SHOWS_ERROR,
  GET__FOR_QUERY_TV_SHOWS_SUCCESS,
} from "../types/tvShows";

export const getTvShowsRequest = (value: number) => ({
  type: GET_TV_SHOWS_REQUEST,
  payload: value,
});

export const getTvShowsSuccess = (data: any) => ({
  type: GET_TV_SHOWS_SUCCESS,
  payload: data,
});

export const getTvShowsFailure = (error: any) => ({
  type: GET_TV_SHOWS_ERROR,
  errorPaylod: error,
});

export const getTvShowForIdRequest = (value: string, page: number) => ({
  type: GET_TV_FOR_QUERY_SHOWS_REQUEST,
  payload: value,
  page: page,
});

export const getTvShowForIdSuccess = (data: any) => ({
  type: GET__FOR_QUERY_TV_SHOWS_SUCCESS,
  payload: data,
});

export const getTvShowForIdFailure = (error: any) => ({
  type: GET_TV__FOR_QUERY_SHOWS_ERROR,
  errorPaylod: error,
});

export const clearDataQuery = () => ({
  type: CLEAR_DATA_QUERY,
});
