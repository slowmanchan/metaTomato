import { FETCH_MOVIES, FETCH_MOVIE, ADD_FAVORITE } from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_MOVIES:
	  console.log(state)
      return { ...state, moviesList: action.payload.data.Search}
	case FETCH_MOVIE:
	  console.log(action.payload.data)
	  return { ...state, selectedMovie: action.payload.data };
	case ADD_FAVORITE:
	  const favorites = []
	  return { ...state, favoritesList: favorites.push(action.payload)}
    default:
      return state;
  }
}
