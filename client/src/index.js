import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Movies } from './pages/movies'
import { Movie } from './pages/movie'
import { NotFound } from './pages/notFound'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route component={Movies} exact path="/" />
      <Route component={Movies} exact path="/movies" />
      <Route component={Movie} exact path="/movie/:id" />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
