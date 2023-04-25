import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../redux/store';
import styles from "./Card.module.scss";
import clsx from 'clsx';

const Card = props => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button className={clsx(styles.button, props.isFavorite && styles.isActive)} onClick={handleClick}>
        <i className={'fa fa-star-o'} />
      </button>
    </li>
  );
};

export default Card;