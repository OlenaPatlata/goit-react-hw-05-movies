import { nanoid } from 'nanoid';
import s from './Cast.module.css';
const Cast = ({ cast }) => {
  return (
    <>
      <ul>
        {cast &&
          cast.map(elem => {
            const poster = elem.profile_path
              ? `https://image.tmdb.org/t/p/w300${elem.profile_path}`
              : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';
            return (
              <li key={nanoid()}>
                <img src={poster} alt={elem.name} className={s.img} />
                <p>{elem.name}</p>
                <p>{elem.character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
