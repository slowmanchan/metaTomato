import { FETCH_MOVIES, FETCH_MOVIE, ADD_FAVORITE, DELETE_FAVORITE, FETCH_FAVORITES } from '../actions/index';

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
	case DELETE_FAVORITE:

	  return { ...state, favorites: action.payload }
	case FETCH_FAVORITES:
	  console.log(action.payload)
	  return { ...state }
    default:
      return state;
  }
}
