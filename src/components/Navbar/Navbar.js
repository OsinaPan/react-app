import { Link, NavLink} from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
      <Link to="/"><span className='fa fa-tasks'></span></Link>
        <ul>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/favorite">Favorite</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;