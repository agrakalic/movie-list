import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { FormControlGroup, FormInput, FormSelect, FormSelectTrueFalse, FormActions, FormButton } from '../ui/FormElements';
import { ButtonBack } from '../ui/Buttons';
import { createMovie, updateMovie, setNotification } from '../../actions';

import axios from 'axios';
import { routes, api, selectParameters } from '../../config';

const MovieEdit = ({ movies, movieId, createMovie, updateMovie, setNotification }) => {

  const history = useHistory()

  const goBack = () => {
    history.push(routes.moviesList);
  }

  const [currentMovie, setCurrentMovie] = useState({
    name: '',
    genre: '',
    rating: '',
    explicit: ''
  })

  const getMovieById = movieId => { 

    // Since we do not have fully functional backend with DB,
    // I am getting the movie details from the state not the database
    
    const currentMovieIndex = movies.findIndex(movie => {
      return movie.id == movieId;
    });

     setCurrentMovie(movies[currentMovieIndex]);

    // return axios.get(`${api.endpoints.movies}/${movieId}`)
    //   .then((res) => {
    //     setCurrentMovie(res.data[0]);
    //   })
  
  }

  useEffect(() => {
    if (movieId) getMovieById(movieId);
  },[])

  const pageTitle = () => (movieId ? 'Edit Movie' : 'Add New Movie')

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setCurrentMovie({
      ...currentMovie,
      [name]: value
    });
  }
  
  const validate = () => {
    let valid = true;
    Object.keys(currentMovie).map(key => {
      if (currentMovie[key] === '') {
        setNotification('Please fill all the fields.');
        valid = false;
      }
    })
    return valid;
  }

  const onSubmit = e => {
    e.preventDefault();
    if(validate()){
      if (movieId) {
        updateMovie(movieId,currentMovie,goBack);
      } else {
        createMovie(currentMovie,goBack);
      }
    }
  }

  return (
    <div>      
      <h2>{pageTitle()}</h2>
      <form className="content__form" onSubmit={onSubmit}>
      
        <FormControlGroup label="Movie Title">
          <FormInput placeholder="Movie Title" name="name" value={currentMovie.name} onChange={handleChange} />
        </FormControlGroup>
        
        <FormControlGroup label="Movie Genre">
          <FormSelect name="genre" options={selectParameters.genre} value={currentMovie.genre} onChange={handleChange} />
        </FormControlGroup>
        
        <FormControlGroup label="Movie Rating">
          <FormSelect name="rating" options={selectParameters.rating} value={currentMovie.rating} onChange={handleChange} />
        </FormControlGroup>

        <FormControlGroup label="Movie Explicit Status">
          <FormSelectTrueFalse name="explicit" value={currentMovie.explicit} onChange={handleChange} />
        </FormControlGroup>
      
        <FormActions>
          <FormButton text="Submit" />
        </FormActions>

      </form>

      <div className="content__actions">
        <ButtonBack onClick={goBack} />
      </div>

    </div>
  )

}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { createMovie, updateMovie, setNotification })(MovieEdit);