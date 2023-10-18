import * as actions from "../types/tvShows";

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

export default function TvShowsReducer(
  state: IInitialState = initialState,
  action: any
) {
  switch (action.type) {
    case actions.GET_TV_SHOWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actions.GET_TV_SHOWS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };
    case actions.GET_TV_SHOWS_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: false,
      };
    case actions.GET_TV_FOR_QUERY_SHOWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actions.GET__FOR_QUERY_TV_SHOWS_SUCCESS:
      return {
        ...state,
        loading: false,
        dataForQuery: action.payload,
        error: false,
      };
    case actions.GET_TV__FOR_QUERY_SHOWS_ERROR:
      return {
        ...state,
        loading: false,
        dataForQuery: [],
        error: false,
      };

      case actions.CLEAR_DATA_QUERY:
      return {
        ...state,
        dataForQuery: [],
      };

    default:
      return state;
  }
}
