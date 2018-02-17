import { combineReducers } from 'redux';
import MovieReducer from './movie-reducer';

const rootReducer = combineReducers({
  movies: MovieReducer
});

export default rootReducer;
