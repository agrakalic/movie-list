import axios from 'axios';
import { api } from '../config';

import { 
  GET_MOVIES, GET_MOVIES_ERROR, CREATE_MOVIE, CREATE_MOVIE_ERROR, DELETE_MOVIE,
  DELETE_MOVIE_ERROR, UPDATE_MOVIE, UPDATE_MOVIE_ERROR, SET_NOTIFICATION, RESET_NOTIFICATION
} from './types';

export const getMovies = () => {
  return (dispatch) => {
    axios.get(api.endpoints.movies)
      .then((res) => dispatch({ type: GET_MOVIES, payload: res.data }))
      .catch((err) => dispatch({ type: GET_MOVIES_ERROR, payload: 'Error' }))
  }
}

export const createMovie = (movie,callback) => {
  return (dispatch) => {
    axios.post((api.endpoints.movies), movie)
    .then((res) => {
        callback();
        dispatch({ type: CREATE_MOVIE, payload: res.data });
      })
    .catch((err) => dispatch({ type: CREATE_MOVIE_ERROR, payload: 'Error' }))
  }
}

export const updateMovie = (movieId,movie,callback) => {
  return (dispatch) => {
    axios.put((`${api.endpoints.movies}/${movieId}`), movie)
    .then((res) => {
      callback();
      dispatch({ type: UPDATE_MOVIE, payload: movie });
    })
    .catch((err) => dispatch({ type: UPDATE_MOVIE_ERROR, payload: 'Error' }))
  }
}

export function deleteMovie(movieId){
  return (dispatch) => {
    axios.delete((`${api.endpoints.movies}/${movieId}`))
    .then((res) => dispatch({ type: DELETE_MOVIE, payload: movieId }))
    .catch((err) => dispatch({ type: DELETE_MOVIE_ERROR, payload: 'Error' }))
  }
}

export function setNotification(notification){
  return { type: SET_NOTIFICATION, payload: notification }
}

export function resetNotification(){
  return { type: RESET_NOTIFICATION }
}