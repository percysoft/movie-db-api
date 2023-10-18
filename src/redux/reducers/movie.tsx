import * as actions from "../types/movie";

interface IInitialState {
  loading: boolean;
  data: any;
  dataForQuery: any;
  error: boolean;
}
const initialState: IInitialState = {
  loading: false,
  data: [],
  dataForQuery: [],
  error: false,
};

export default function MovieReducer(
  state: IInitialState = initialState,
  action: any
) {
  switch (action.type) {
    case actions.GET_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actions.GET_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };
    case actions.GET_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: false,
      };
    case actions.GET_MOVIE_QUERY_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actions.GET_MOVIE_QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        dataForQuery: action.payload,
        error: false,
      };
    case actions.GET_MOVIE_QUERY_ERROR:
      return {
        ...state,
        loading: false,
        dataForQuery: [],
        error: false,
      };

    default:
      return state;
  }
}