import React from 'react';
import '../scss/main.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import { routes } from './config';

import Layout from './components/template/Layout';
import HomePage from './pages/HomePage';
import MoviesListPage from './pages/MoviesListPage';
import MovieEditPage from './pages/MovieEditPage';
import Notification from './components/ui/Notification';

function App() {
  return (
    <BrowserRouter>
      <Layout>      
        <Route path={routes.moviesList} component={MoviesListPage}/>
        <Route path={routes.movieEditParam} component={MovieEditPage}/>
        <Route path={routes.movieAdd} component={MovieEditPage}/>
        <Route exact path={routes.home} component={HomePage}/>
        <Notification />  
      </Layout>
    </BrowserRouter>
  );
}

export default App;