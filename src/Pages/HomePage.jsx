import {
  useRouteMatch,
  useHistory,
  useParams,
  useLocation,
  NavLink,
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
  console.log(url);
  console.log(path);

  const history = useHistory();
  console.log('~ ~ HomePage ~ history', history);
  const params = useParams();
  console.log('~ ~ MovieDetailsPage ~ params', params);
  const location = useLocation();
  console.log('~ ~ HomePage ~ location', location);

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
              <NavLink to="/movies/:movieId">
                {movie.name ? movie.name : movie.title}
              </NavLink>
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
