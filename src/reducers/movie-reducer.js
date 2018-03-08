import {
  ADD_FAVORITE, DELETE_FAVORITE,
  FETCH_FAVORITES, REQUEST_FETCH_MOVIES, FETCH_MOVIES_SUCCESS,
  REQUEST_FETCH_UPCOMING_MOVIES, FETCH_UPCOMING_MOVIES_SUCCESS,
  FETCH_MOVIE_SUCCESS, REQUEST_FETCH_MOVIE
} from '../actions/index';
import _ from 'lodash';

export default function(state = {
  upComingMoviesList: [],
  movieList: [],
  isLoading: false
}, action) {
  switch(action.type) {
  	case ADD_FAVORITE:
  	  const favorites = []
  	  return { ...state, favoritesList: favorites.push(action.payload)}
  	case DELETE_FAVORITE:
  	  return {...state, favorites: _.reject(state.favorites, (fav) => { return fav._id === action.payload})}
  	case FETCH_FAVORITES:
    console.log(action.payload.data)
  	  return { ...state, favorites: action.payload.data }
    case REQUEST_FETCH_MOVIES:
      return { ...state, isLoading: true}
    case FETCH_MOVIES_SUCCESS:
      return { ...state, moviesList: action.payload.data.Search, isLoading: false }
    case REQUEST_FETCH_UPCOMING_MOVIES:
      return { ...state, isLoading: true }
    case FETCH_UPCOMING_MOVIES_SUCCESS:
      console.log(action.payload.data.results)
      return { ...state, upComingMoviesList: action.payload.data.results, isLoading: false }
	case REQUEST_FETCH_MOVIE:
	  return { ...state, isLoading: true }
	case FETCH_MOVIE_SUCCESS:
	console.log( state )
	  return { ...state, selectedMovie: action.payload.data, isLoading: false }
    default:
        return state;
  }
}
