import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_MOVIES:
      return [action.payload.data.Search][0]
	case FETCH_MOVIE:
	  return {movie: action.payload.data };
    default:
      return state;
  }
}
