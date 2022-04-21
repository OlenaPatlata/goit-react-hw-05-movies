import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';

import './App.css';

export default function App() {
  return (
    <>
      {/* <Container> */}
      <AppBar />
      <h1>hello!</h1>
      <Switch>
        {/* <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
          <Route path="/pagenotfound">
            <NotFoundPage />
          </Route> */}
        <Redirect to="/pagenotfound" />
      </Switch>
      {/* </Container> */}
    </>
  );
}
