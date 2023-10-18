import { combineReducers } from 'redux';
import MovieReducer from './movie';

const rootReducer = combineReducers({
  movie: MovieReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
