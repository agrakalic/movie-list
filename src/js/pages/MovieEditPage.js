import React, { useEffect } from 'react';

import MovieEdit from '../components/movies/MovieEdit';

const MovieEditPage = ({ match }) => {
  
  const { params: { movieId } } = match;

  return (
    <MovieEdit movieId={movieId} />
  )

}

export default MovieEditPage;