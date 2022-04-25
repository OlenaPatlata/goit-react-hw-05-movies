import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, useLocation, useHistory, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import * as movieAPI from 'servises/api';
import OneMovie from 'components/OneMovie/OneMovie';
import Loader from 'components/Loader/Loader';
// import CastPage from 'Pages/CastPage';
// import ReviewsPage from 'Pages/ReviewsPage';

const CastPage = lazy(() =>
  import('Pages/CastPage' /* webpackChunkName: "CastPage" */)
);
const ReviewsPage = lazy(() =>
  import('Pages/ReviewsPage' /* webpackChunkName: "ReviewsPage" */)
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  console.log('~ ~ MovieDetailsPage ~ location', location);

  const params = useParams();
  console.log('~ ~ OneMovie ~ params', params);

  if (typeof window !== 'undefined') {
    injectStyle();
  }
  const notify = () =>
    toast.error('The resource you requested could not be found.');

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

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
  console.log('~ ~ OneMovie ~ history', history);

  const handleClickBack = () => {
    history.push(location?.state?.from ?? '/');
  };
  return (
    <>
      {movie && (
        <>
          <OneMovie onClickBack={handleClickBack} movie={movie} />
          <Suspense fallback={<Loader />}>
            <Route path="/movies/:movieId/cast">
              <CastPage />
            </Route>
            <Route path="/movies/:movieId/reviews">
              <ReviewsPage />
            </Route>
          </Suspense>
        </>
      )}
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
