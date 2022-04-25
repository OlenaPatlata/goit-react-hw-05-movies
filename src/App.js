import { lazy, Suspense } from 'react';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
// import HomePage from 'Pages/HomePage';
// import MoviesPage from 'Pages/MoviesPage';
// import MovieDetailsPage from 'Pages/MovieDetailsPage';
// import CastPage from 'Pages/CastPage';
// import ReviewsPage from 'Pages/ReviewsPage';
// import NotFoundPage from 'Pages/NotFoundPage';

import './App.css';

// const AppBar = lazy(() =>
//   import('components/AppBar/AppBar' /* webpackChunkName: "AppBar" */)
// );
const HomePage = lazy(() =>
  import('Pages/HomePage' /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import('Pages/MoviesPage' /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import('Pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */)
);
// const CastPage = lazy(() =>
//   import('Pages/CastPage' /* webpackChunkName: "CastPage" */)
// );
// const ReviewsPage = lazy(() =>
//   import('Pages/ReviewsPage' /* webpackChunkName: "ReviewsPage" */)
// );
const NotFoundPage = lazy(() =>
  import('Pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */)
);

export default function App() {
  return (
    <>
      {/* <Container> */}
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          {/* <Route path="/movies/:movieId/cast">
            <CastPage />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <ReviewsPage />
          </Route> */}
          <Route path="/pagenotfound">
            <NotFoundPage />
          </Route>
          <Redirect to="/pagenotfound" />
        </Switch>
      </Suspense>

      {/* </Container> */}
    </>
  );
}
