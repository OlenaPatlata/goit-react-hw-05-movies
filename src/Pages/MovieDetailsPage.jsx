import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as movieAPI from 'servises/api';

const MovieDetailsPage = () => {
  // console.log(movies);
  const { movieId } = useParams();
  // console.log('~ ~ MovieDetailsPage ~ movieId', movieId);
  // const location = useLocation();
  // console.log('~ ~ HomePage ~ location', location);

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    (async () => {
      if (movieId) {
        try {
          const { results } = await movieAPI.getMovieId(movieId);
          setMovie([...results]);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [movieId]);

  return (
    <>
      <p>movie {movieId}</p>
      <img src="" width="100" />
    </>
  );
};

export default MovieDetailsPage;
