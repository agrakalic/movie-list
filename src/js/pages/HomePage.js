import React from 'react';
import { useHistory } from "react-router-dom";
import { routes } from '../config';

const HomePage = () => {
  
  const history = useHistory();

  return (
    <div className="homepage">
      <p className="content__intro">
        Demo application built with React / Redux with a touch of the Express on the backend. 
      </p>
      <div className="content__actions">
        <button 
          className="button--large"  
          type="button" 
          onClick={() => { history.push(routes.moviesList) }}
        >View Movies List</button>
      </div>
    </div>
  )

}

export default HomePage;