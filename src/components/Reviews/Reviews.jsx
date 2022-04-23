import { nanoid } from 'nanoid';
import s from './Reviews.module.css';
const Reviews = ({ results }) => {
  return (
    <>
      <ul>
        {results.length > 0 ? (
          results.map(elem => {
            return (
              <li key={nanoid()}>
                <p className={s.title}>{elem.author}</p>
                <p className={s.description}>{elem.content}</p>
              </li>
            );
          })
        ) : (
          <p>We don`t have any rewiews for this movie.</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
