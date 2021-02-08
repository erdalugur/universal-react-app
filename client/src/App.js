import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Spinner } from './components/Spinner';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Container } from '@material-ui/core';
const Movies = lazy(() => import('./pages/movies'))
const Movie = lazy(() => import('./pages/movie'))
const NotFound = lazy(() => import('./pages/notFound'))

function App() {
  return (
    <Container maxWidth="md">
      <ThemeSwitcher />
      <div className="app">
        <Suspense fallback={() => <Spinner />}>
          <BrowserRouter>
            <Switch>
              <Route component={Movies} exact path="/" />
              <Route component={Movies} exact path="/movies" />
              <Route component={Movie} exact path="/movie/:id" />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </div>
    </Container>
  );
}

export default App;
