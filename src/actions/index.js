import axios from 'axios';
import _ from 'lodash';
import Auth from '../modules/Auth';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FETCH_FAVORITES = 'FETCH_FAVORITES';
export const REQUEST_FETCH_MOVIES = 'REQUEST_FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const REQUEST_FETCH_UPCOMING_MOVIES = 'REQUEST_FETCH_UPCOMING_MOVIES';
export const FETCH_UPCOMING_MOVIES_SUCCESS = 'FETCH_UPCOMING_MOVIES_SUCCESS';

const ROOT_URL = 'http://www.omdbapi.com/?';
const API_KEY = 'apikey=eda26e6d';

const TMDB_URL = 'https://api.themoviedb.org';
const TMDB_API_KEY = 'c9f885213cf6ff2087da9d18287a8f78';

export function fetchUpcomingMovies() {
  return dispatch => {
    dispatch(requestFetchUpcomingMovies())

    return axios.get(`${TMDB_URL}/3/movie/upcoming?api_key=${TMDB_API_KEY}`)
          .then((data) => dispatch(fetchUpcomingMoviesSuccess(data)))

  }
}

export function requestFetchUpcomingMovies() {
  return {
    type: REQUEST_FETCH_UPCOMING_MOVIES,
    payload: true
  }
}

export function fetchUpcomingMoviesSuccess(data) {
  return {
    type: FETCH_UPCOMING_MOVIES_SUCCESS,
    payload: data
  }
}

export function fetchMovies(movie, callback) {
  const request = axios.get(`${ROOT_URL}${API_KEY}&s=${movie}`)

  return {
    type: FETCH_MOVIES,
    payload: request
  }
}

export function fetchMovie(id) {
	const request = axios.get(`${ROOT_URL}${API_KEY}&i=${id}`)
	return {
		type: FETCH_MOVIE,
		payload: request
	}
}

export function addFavorite(movie) {
  const url = '/favorites';
  const data = { 'title': movie.Title, 'poster': movie.Poster }
  const headers = { headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': `bearer ${Auth.getToken()}`
  }}

  const request = axios.post(url, data, headers)

	return {
		type: ADD_FAVORITE,
		payload: request
	}
}

export function deleteFavorite(favorite) {
	window.localStorage.removeItem(favorite.Title);

	return {
		type: DELETE_FAVORITE,
		payload: favorite
	}
}

export function fetchFavorites() {
	var values = _.values(localStorage);
	var valuesParsed = values.filter((value) => {
     try {
         JSON.parse(value);
     } catch (e) {
         return false
     }
     return true
	})
  .map((value) => JSON.parse(value))

	return {
		type: FETCH_FAVORITES,
		payload: valuesParsed
	}
}

export function requestFetchMovies() {
  return {
    type: REQUEST_FETCH_MOVIES,
    payload: true
  }
}

export function fetchMoviesThunk(movie) {
  return dispatch => {
    dispatch(requestFetchMovies())

    return axios.get(`${ROOT_URL}${API_KEY}&s=${movie}`)
      .then((data) => dispatch(fetchMoviesSuccess(data)))

  }
}

export function fetchMoviesSuccess(data) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: data
  }
}
