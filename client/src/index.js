import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Movies = lazy(() => import('./pages/movies'))
const Movie = lazy(() => import('./pages/movie'))
const NotFound = lazy(() => import('./pages/notFound'))

ReactDOM.render(
  <Suspense fallback={() => <div>loading...</div>}>
    <BrowserRouter>
      <Switch>
        <Route component={Movies} exact path="/" />
        <Route component={Movies} exact path="/movies" />
        <Route component={Movie} exact path="/movie/:id" />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);
