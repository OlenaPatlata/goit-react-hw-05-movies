import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.current} activeClassName={s.active}>
      Home
    </NavLink>
    <NavLink to="/movies" className={s.current} activeClassName={s.active}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
