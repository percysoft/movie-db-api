import { all } from "redux-saga/effects";
import { watchGetAllMovie, watchGetMovieForQuery } from "./movie";

export default function* rootSaga() {
  yield all([watchGetAllMovie(), watchGetMovieForQuery()]);
}
