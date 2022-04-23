import { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory, NavLink } from 'react-router-dom';
import * as movieAPI from 'servises/api';

import Reviews from 'components/Reviews/Reviews';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    (async () => {
      if (movieId) {
        try {
          const { results } = await movieAPI.getMovieIdReviews(movieId);
          setReviews(results);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [movieId]);

  return <>{reviews && <Reviews results={reviews} />}</>;
};

export default ReviewsPage;
