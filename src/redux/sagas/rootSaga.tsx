import { all } from "redux-saga/effects";
import { watchGetAllMovie, watchGetDetailMovie, watchGetMovieForQuery } from "./movie";
import { watchGetAllTvShows, watchGetTvShowsForQuery } from "./tvShows";

export default function* rootSaga() {
  yield all([
    watchGetAllMovie(),
    watchGetMovieForQuery(),
    watchGetAllTvShows(),
    watchGetTvShowsForQuery(),
    watchGetDetailMovie(),
  ]);
}
