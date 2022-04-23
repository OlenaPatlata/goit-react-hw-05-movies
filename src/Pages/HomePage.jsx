import {
  useRouteMatch,
  useHistory,
  useParams,
  useLocation,
  Link,
  Route,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as movieAPI from 'servises/api';
import { nanoid } from 'nanoid';
import MovieDetailsPage from 'Pages/MovieDetailsPage';
// import s from './HomePage.module.css'

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    (async () => {
      try {
        const { results } = await movieAPI.getTrendingMovies();
        setMovies([...results]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={nanoid()}>
              <Link to={`${url}movies/${movie.id}`}>
                {movie.name ? movie.name : movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <Route path={`${path}/:movieId`}>
        {movies && <MovieDetailsPage movies={movies} />}
      </Route>
    </>
  );
};

export default HomePage;

// style = {({ isActive }) => isActive ? activeStyle : undefined}
// https://reactrouter.com/docs/en/v6/api

//  <NavLink to={`${url}movie/${movie.id}`}>
//    {movie.name ? movie.name : movie.title}
//  </NavLink>;
