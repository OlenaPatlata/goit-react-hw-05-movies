import { nanoid } from 'nanoid';
import s from './Cast.module.css';
import PropTypes from 'prop-types';
const Cast = ({ cast }) => {
  return (
    <>
      <ul className={s.wrapper}>
        {cast.length > 0 ? (
          cast.map(elem => {
            const poster = elem.profile_path
              ? `https://image.tmdb.org/t/p/w300${elem.profile_path}`
              : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';
            return (
              <li key={nanoid()}>
                <img src={poster} alt={elem.name} className={s.img} />
                <p className={s.title}>Name:</p>
                <p className={s.description}>{elem.name}</p>
                <p className={s.title}>Character:</p>
                <p className={s.description}>{elem.character}</p>
              </li>
            );
          })
        ) : (
          <p>We don`t have any infomation about cast for this movie.</p>
        )}
      </ul>
    </>
  );
};
Cast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cast;
