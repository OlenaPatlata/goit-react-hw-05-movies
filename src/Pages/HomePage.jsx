import {
  useRouteMatch,
  useHistory,
  useParams,
  useLocation,
  Link,
  Route,
} from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import * as movieAPI from 'servises/api';
import { nanoid } from 'nanoid';
// import MovieDetailsPage from 'Pages/MovieDetailsPage';
// import s from './HomePage.module.css'

const MovieDetailsPage = lazy(() =>
  import('Pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */)
);

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const { url, path } = useRouteMatch();
  const location = useLocation();

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
              <Link
                to={{
                  pathname: `${url}movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.name ? movie.name : movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path={`${path}/:movieId`}>
          {movies && <MovieDetailsPage movies={movies} />}
        </Route>
      </Suspense>
    </>
  );
};

export default HomePage;

// https://reactrouter.com/docs/en/v6/api
