import axios from 'axios';
import _ from 'lodash';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FETCH_FAVORITES = 'FETCH_FAVORITES';

const ROOT_URL = 'http://www.omdbapi.com/?';
const API_KEY = 'apikey=eda26e6d';


export function fetchMovies(movie) {
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
	window.localStorage.setItem(movie.Title, JSON.stringify(movie))

	return {
		type: ADD_FAVORITE,
		payload: movie
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
