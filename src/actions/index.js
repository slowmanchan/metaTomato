import axios from 'axios'

export const FETCH_MOVIES = 'FETCH_MOVIES';
const ROOT_URL = 'http://www.omdbapi.com/?';
const API_KEY = 'apikey=eda26e6d';


export function fetchMovies(movie) {
  const request = axios.get(`${ROOT_URL}${API_KEY}&s=${movie}`)

  return {
    type: FETCH_MOVIES,
    payload: request
  }
}
