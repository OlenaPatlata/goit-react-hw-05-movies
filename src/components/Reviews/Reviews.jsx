import { nanoid } from 'nanoid';
import s from './Reviews.module.css';
const Reviews = ({ results }) => {
  return (
    <>
      <ul>
        {results.lenght > 0 ? (
          results.map(elem => {
            return (
              <li key={nanoid()}>
                <p>{elem.author}</p>
                <p>{elem.content}</p>
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
