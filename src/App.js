import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import HomePage from 'Pages/HomePage';
import MoviesPage from 'Pages/MoviesPage';
import MovieDetailsPage from 'Pages/MovieDetailsPage';
import Cast from 'Pages/Cast';
import Reviews from 'Pages/Reviews';
import NotFoundPage from 'Pages/NotFoundPage';

import './App.css';

export default function App() {
  return (
    <>
      {/* <Container> */}
      <AppBar />
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
          <Cast />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route> */}
        <Route path="/pagenotfound">
          <NotFoundPage />
        </Route>
        <Redirect to="/pagenotfound" />
      </Switch>
      {/* </Container> */}
    </>
  );
}
