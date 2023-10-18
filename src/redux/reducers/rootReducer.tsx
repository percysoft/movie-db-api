import { combineReducers } from "redux";
import MovieReducer from "./movie";
import TvShowsReducer from "./tvShows";

const rootReducer = combineReducers({
  movie: MovieReducer,
  tvShows: TvShowsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
