import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import HomePage from 'Pages/HomePage';
import MoviesPage from 'Pages/MoviesPage';
import MovieDetailsPage from 'Pages/MovieDetailsPage';
import CastPage from 'Pages/CastPage';
import ReviewsPage from 'Pages/ReviewsPage';
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
        <Route path="/movies/:movieId/cast">
          <CastPage />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <ReviewsPage />
        </Route>
        <Route path="/pagenotfound">
          <NotFoundPage />
        </Route>
        <Redirect to="/pagenotfound" />
      </Switch>
      {/* </Container> */}
    </>
  );
}
