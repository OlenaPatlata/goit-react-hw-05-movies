import { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory, NavLink } from 'react-router-dom';
import * as movieAPI from 'servises/api';

import Cast from 'components/Cast/Cast';

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    (async () => {
      if (movieId) {
        try {
          const { cast } = await movieAPI.getMovieIdCredits(movieId);
          setCast(cast);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [movieId]);

  return <>{cast && <Cast cast={cast} />}</>;
};

export default CastPage;
