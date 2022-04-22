import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const MovieDetailsPage = ({ movies }) => {
  console.log(movies);
  const { movieId } = useParams();
  console.log('~ ~ MovieDetailsPage ~ movieId', movieId);
  const location = useLocation();
  console.log('~ ~ HomePage ~ location', location);

  return (
    <>
      <p>1111111</p>
    </>
  );
};

export default MovieDetailsPage;
