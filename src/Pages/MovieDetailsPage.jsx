import { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory, NavLink } from 'react-router-dom';
import * as movieAPI from 'servises/api';
import OneMovie from 'components/OneMovie/OneMovie';
import Cast from 'components/Cast/Cast';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  // const location = useLocation();
  // console.log('~ ~ HomePage ~ location', location);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      if (movieId) {
        try {
          const results = await movieAPI.getMovieId(movieId);
          setMovie(results);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [movieId]);

  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <>
      {movie && <OneMovie onClick={handleClick} movie={movie} />}
      {/* {movie && <Cast movie={movie} />} */}
      {/* <hr />
      <Route path={`${path}/:movieId`}>
        {moviesSearch && <MovieDetailsPage movies={moviesSearch} />}
      </Route> */}
    </>
  );
};

export default MovieDetailsPage;
