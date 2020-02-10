import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/';
import { useHistory } from "react-router-dom";
import { routes } from '../../config';

import MoviesListItem from './MoviesListItem';

const MoviesList = ({ movies, moviesInitLoad, getMovies }) => {

  const history = useHistory()
  
  useEffect(() => {
    if (!moviesInitLoad) getMovies();
  },[])

  const movieListItems = () => {
    if (movies.length === 0) {
      return (
        <div className="message--info">
          Your movie list is empty. Why don't you add some?
        </div>
      )
    }
    return (
      <div className="movies">
        {movies.map((movie,key) => (
          <MoviesListItem key={key} movie={movie} />      
        ))}
        <p class="footnote">* (explicit movie)</p>
      </div> 
    )
  }

  return (
    <div>
      {movieListItems()}       
      <div className="content__actions">
        <button 
          className="button--large"  
          type="button" 
          onClick={() => { history.push(routes.movieAdd) }}
        >Add New Movie</button>
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    moviesInitLoad: state.moviesInitLoad
  }
}

export default connect(mapStateToProps, { getMovies })(MoviesList);
