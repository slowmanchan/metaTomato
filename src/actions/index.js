import axios from 'axios'

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const ADD_FAVORITE = 'ADD_FAVORITE';

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
	window.localStorage.setItem('favorites ' + movie.Title, JSON.stringify(movie))
	
	return {
		type: ADD_FAVORITE,
		payload: movie
	}
}