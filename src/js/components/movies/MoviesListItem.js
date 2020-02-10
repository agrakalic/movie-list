import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { routes } from '../../config';
import { ButtonEdit, ButtonDelete } from '../ui/Buttons';
import { deleteMovie } from '../../actions';

const MoviesListItem = ({ movie, deleteMovie }) => {

  const history = useHistory()

  const handleEdit = movieId => {
    history.push(`${routes.movieEdit}/${movieId}`);
  }

  const handleDelete = movieId => {
    if( confirm('Are you sure you want to delete this movie?') ) {
      deleteMovie(movieId);
    }
  }

  const movieClassName = explicit => {
    return (explicit == 'true') ? 'movie movie-explicit' : 'movie';
  }

  return (
    <div className={movieClassName(movie.explicit)}>
      <p className="movie__rating">{movie.rating}</p>
      <div>
        <p className="movie__name">{movie.name}</p>  
        <p className="movie__genre">{movie.genre}</p>    
      </div>
      <p className="movie__actions">
        <ButtonEdit onClick={() => { handleEdit(movie.id) }} />
        <ButtonDelete onClick={() => { handleDelete(movie.id) }} />
      </p>      
    </div>
  )

}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { deleteMovie })(MoviesListItem);