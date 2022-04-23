import {
  useRouteMatch,
  useHistory,
  useParams,
  useLocation,
  Link,
  Route,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import MovieDetailsPage from 'Pages/MovieDetailsPage';
import * as movieAPI from 'servises/api';

const MoviesPage = () => {
  const [qwery, setQwery] = useState('');
  const [moviesSearch, setMoviesSearch] = useState(null);
  const { url, path } = useRouteMatch();

  const formSubmitHandler = newQwery => {
    setQwery(newQwery);
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
              <Link to={`${url}/${movie.id}`}>
                {movie.name ? movie.name : movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <Route path={`${path}/:movieId`}>
        {moviesSearch && <MovieDetailsPage movies={moviesSearch} />}
      </Route>
    </>
  );
};

export default MoviesPage;
