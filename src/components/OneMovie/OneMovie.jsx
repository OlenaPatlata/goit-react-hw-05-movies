import { useRouteMatch, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './OneMovie.module.css';
import { nanoid } from 'nanoid';

const OneMovie = ({ movie, onClickBack }) => {
  const { url } = useRouteMatch();
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
      <button type="button" onClick={onClickBack}>
        Go back
      </button>
      <div className={s.container}>
        <div className={s.img__wrapper}>
          <img src={poster} alt={titleMovie} className={s.img} />
        </div>
        <div className={s.description__wrapper}>
          <ul className={s.description__list}>
            <li className={s.title}>
              <p className={s.titleMovie}>{titleMovie}</p>
              <p>{year}</p>
            </li>
            <li>
              <p className={s.titleMovie}>Vote count</p>
              <p>{vote_count}</p>
            </li>
            <li>
              <p className={s.titleMovie}>Overview</p>
              <p className={s.overview}>{overview}</p>
            </li>
            <li>
              <p className={s.titleMovie}>Genres</p>
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
      <p className={s.titleMovie}> Additional information</p>
      <nav className={s.nav}>
        <NavLink
          exact
          to={{ pathname: `${url}/cast` }}
          className={s.current}
          activeClassName={s.active}
        >
          Cast
        </NavLink>
        <NavLink
          to={{ pathname: `${url}/reviews` }}
          className={s.current}
          activeClassName={s.active}
        >
          Reviews
        </NavLink>
      </nav>
      <hr />
    </>
  );
};
OneMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  onClickBack: PropTypes.func.isRequired,
};
export default OneMovie;
