import { 
  GET_MOVIES, GET_MOVIES_ERROR, CREATE_MOVIE, CREATE_MOVIE_ERROR, DELETE_MOVIE,
  DELETE_MOVIE_ERROR, UPDATE_MOVIE, UPDATE_MOVIE_ERROR, SET_NOTIFICATION, RESET_NOTIFICATION
} from '../actions/types';

const initialState = {
  movies: [],
  moviesInitLoad: false,
  notification: ''
}

const reducer = (state = initialState, action) => {

  switch(action.type){
  
    case GET_MOVIES: {
      return { ...state, movies: [ ...action.payload ], moviesInitLoad: true}
    }

    case GET_MOVIES_ERROR: {
      return { ...state, notification: 'Something went wrong...' }
    }

    case CREATE_MOVIE: {
      return { ...state, movies: [ ...state.movies, ...action.payload ] }
    }

    case CREATE_MOVIE_ERROR: {
      return { ...state, notification: 'Something went wrong...' }
    }

    case UPDATE_MOVIE: {
      const currentMovies = [ ...state.movies ];

      const indexToUpdate = currentMovies.findIndex(movie => {
        return movie.id == action.payload.id;
      });

      let movies = [
        ...currentMovies.slice(0, indexToUpdate),        
        action.payload,
        ...currentMovies.slice(indexToUpdate + 1)
      ];

      return { ...state, movies: movies, notification: 'Movie was successfully updated' };
    }

    case UPDATE_MOVIE_ERROR: {
      return { ...state, notification: 'Something went wrong...' }
    }
    
    case DELETE_MOVIE: {
      const currentMovies = [ ...state.movies ];

      const indexToDelete = currentMovies.findIndex(movie => {
        return movie.id == action.payload;
      });

      let movies = [
        ...currentMovies.slice(0, indexToDelete),
        ...currentMovies.slice(indexToDelete + 1)
      ];

      return { ...state, movies: movies, notification: 'Movie was successfully deleted' };
    }

    case DELETE_MOVIE_ERROR: {
      return { ...state, notification: 'Something went wrong...' }
    }

    case SET_NOTIFICATION: {
      return { ...state, notification: action.payload }
    }

    case RESET_NOTIFICATION: {
      return { ...state, notification: '' }
    }

  }

  return state;
}

export default reducer;