import axios from 'axios';
import _ from 'lodash';
import Auth from '../modules/Auth';
import { message } from 'antd';


export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FETCH_FAVORITES = 'FETCH_FAVORITES';

export const REQUEST_FETCH_MOVIE = 'REQUEST_FETCH_MOVIE';
export const REQUEST_FETCH_MOVIES = 'REQUEST_FETCH_MOVIES';
export const REQUEST_ADD_FAVORITE = 'REQUEST_ADD_FAVORITE';

export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
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

export function addFavorite(movie) {
  const url = '/api/favorites';
  const data = { 'title': movie.Title, 'poster': movie.Poster, 'imdbID': movie.imdbID }
  const headers = { headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': `bearer ${Auth.getToken()}`
  }}

  const request = axios.post(url, data, headers)
    .catch((err) => { console.log('Not authorized')})

	return request
}
export function requestAddFavorites() {
  return {
    type: REQUEST_ADD_FAVORITE
  }
}

export function addFavoriteThunk(movie) {
  return dispatch => {
    dispatch(requestAddFavorites())

    return addFavorite(movie).then((data) => {
      dispatch(addFavoriteSuccess(data))
      message.info('Favorite Added')
    })
  }
}

export function addFavoriteSuccess(data) {
  return {
    type: ADD_FAVORITE_SUCCESS,
    payload: data
  }
}
export function deleteFavorite(id) {
  console.log(id)
  const url = '/api/favorites';
  const data = {id};
  const headers =  {
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': `bearer ${Auth.getToken()}`
  }

  const request = axios({
    method: 'delete',
    url,
    data,
    headers
  })

	return {
		type: DELETE_FAVORITE,
		payload: id
	}
}

export function fetchFavorites() {
  const url = '/api/favorites';
  const headers = { headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': `bearer ${Auth.getToken()}`
  }}

  const request = axios.get(url, headers)
    .then((req) => { return req })
    .catch((err) => { console.log(err.response)})

	return {
		type: FETCH_FAVORITES,
		payload: request
	}
}

export function requestFetchMovies() {
  return {
    type: REQUEST_FETCH_MOVIES
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

export function requestFetchMovie() {
	return {
		type: REQUEST_FETCH_MOVIE
	}
}

export function fetchMovieSuccess(data) {
	return {
		type: FETCH_MOVIE_SUCCESS,
		payload: data
	}
}
export function fetchMovieThunk(id) {
	return dispatch => {
		dispatch(requestFetchMovie())

		return axios.get(`${ROOT_URL}${API_KEY}&i=${id}`)
		  .then((data) => dispatch(fetchMovieSuccess(data)))
	}
}
