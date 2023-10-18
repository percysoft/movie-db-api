import MovieReducer from "./movie";
import * as actions from "../types/movie";

describe("Movie Reducer", () => {
  it("should return the initial state", () => {
    expect(MovieReducer(undefined, {})).toEqual({
      loading: false,
      data: [],
      dataForQuery: [],
      dataForDetail: [],
      error: false,
    });
  });

  it("should handle GET_MOVIE_REQUEST", () => {
    expect(
      MovieReducer(
        {
          loading: true,
          data: [],
          dataForQuery: [],
          dataForDetail: [],
          error: false,
        },
        {
          type: actions.GET_MOVIE_REQUEST,
        }
      )
    ).toEqual({
      loading: true,
      error: false,
      data: [],
      dataForQuery: [],
      dataForDetail: [],
    });
  });
});
