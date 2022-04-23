import { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import * as movieAPI from 'servises/api';
import OneMovie from 'components/OneMovie/OneMovie';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  if (typeof window !== 'undefined') {
    injectStyle();
  }

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const notify = () =>
    toast.error('The resource you requested could not be found.');

  useEffect(() => {
    (async () => {
      if (movieId) {
        try {
          const results = await movieAPI.getMovieId(movieId);
          setMovie(results);
        } catch (errorNew) {
          setError(errorNew);
          console.log(errorNew);
          notify();
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
      {error && (
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
    </>
  );
};

export default MovieDetailsPage;
