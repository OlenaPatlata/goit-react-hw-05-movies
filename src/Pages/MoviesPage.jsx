import {
  useRouteMatch,
  useHistory,
  useParams,
  useLocation,
  Link,
  Route,
} from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { nanoid } from 'nanoid';

import Form from 'components/Form/Form';
// import MovieDetailsPage from 'Pages/MovieDetailsPage';
import * as movieAPI from 'servises/api';

const MovieDetailsPage = lazy(() =>
  import('Pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */)
);

const MoviesPage = () => {
  const [qwery, setQwery] = useState('');
  const [moviesSearch, setMoviesSearch] = useState(null);
  const { url, path } = useRouteMatch();
  const location = useLocation();
  console.log('~ ~ MoviesPage ~ location', location);
  const history = useHistory();

  const formSubmitHandler = newQwery => {
    setQwery(newQwery);
    history.push({ ...location, search: `qwery=${newQwery}` });
  };

  useEffect(() => {
    (async () => {
      if (qwery.length > 0) {
        try {
          const { results } = await movieAPI.getSearchMovies(qwery);
          setMoviesSearch([...results]);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [qwery]);

  return (
    <>
      <Form onSubmit={formSubmitHandler} />
      {moviesSearch && (
        <ul>
          {moviesSearch.map(movie => (
            <li key={nanoid()}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                  search: `?qwery=${qwery}`,
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
          {moviesSearch && <MovieDetailsPage />}
        </Route>
      </Suspense>
    </>
  );
};

export default MoviesPage;

// movies={moviesSearch}
