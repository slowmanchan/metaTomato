import { FETCH_MOVIES, FETCH_MOVIE, ADD_FAVORITE, DELETE_FAVORITE, FETCH_FAVORITES } from '../actions/index';
import _ from 'lodash';

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
    console.log(state.favorites)

	  return {...state, favorites: _.reject(state.favorites, (fav) => { return fav.Title === action.payload})}
	case FETCH_FAVORITES:
	  console.log(action.payload)
	  return { ...state, favorites: action.payload }
  default:
      return state;
  }
}
