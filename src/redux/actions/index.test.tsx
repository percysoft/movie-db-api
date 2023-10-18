import * as actions from "./tvShows";
import * as types from "../types/tvShows";

describe("tvShowsActions", () => {
  it("should create an action to get TV shows request", () => {
    const expectedAction = {
      type: types.GET_TV_SHOWS_REQUEST,
      payload: 123,
    };
    expect(actions.getTvShowsRequest(123)).toEqual(expectedAction);
  });
});
