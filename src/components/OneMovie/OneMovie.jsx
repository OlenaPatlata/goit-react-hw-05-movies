import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
  NavLink,
  Route,
} from 'react-router-dom';
import s from './OneMovie.module.css';
import { nanoid } from 'nanoid';
import CastPage from 'Pages/CastPage';
import ReviewsPage from 'Pages/ReviewsPage';

const OneMovie = ({ movie, onClick }) => {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();

  const { url, path } = useRouteMatch();
  const {
    release_date,
    first_air_date,
    poster_path,
    title,
    name,
    vote_count,
    overview,
    genres,
  } = movie;
  const date = new Date(release_date ? release_date : first_air_date);
  const year = date.getFullYear();
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';
  const titleMovie = title ? title : name;

  return (
    <>
      <button type="button" onClick={onClick}>
        Go back
      </button>
      <div className={s.container}>
        <div className={s.img__wrapper}>
          <img src={poster} alt={titleMovie} className={s.img} />
        </div>
        <div className={s.description__wrapper}>
          <ul className={s.description__list}>
            <li>
              <p>{titleMovie}</p>
              <p>{year}</p>
            </li>
            <li>
              <p>User Score</p>
              <p>{vote_count}</p>
            </li>
            <li>
              <p>Overview</p>
              <p>{overview}</p>
            </li>
            <li>
              <p>Genres</p>
              <p>
                {genres.map(genre => {
                  return <span key={nanoid()}>{genre?.name}</span>;
                })}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p> Additional information</p>
      <nav className={s.nav}>
        <NavLink
          exact
          to={{ pathname: `${url}/cast` }}
          // to="/movies/:movieId/cast"
          className={s.current}
          activeClassName={s.active}
        >
          Cast
        </NavLink>
        <NavLink
          to={{ pathname: `${url}/reviews` }}
          // to="/movies/:movieId/reviews"
          className={s.current}
          activeClassName={s.active}
        >
          Reviews
        </NavLink>
      </nav>
      <hr />
      <Route path="/movies/:movieId/cast">
        <CastPage />
      </Route>
      <Route path="/movies/:movieId/reviews">
        <ReviewsPage />
      </Route>
    </>
  );
};

export default OneMovie;
