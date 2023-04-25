import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../redux/cardRedux';
import styles from "./Card.module.scss";
import clsx from 'clsx';

const Card = props => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  const clickTrash = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  }

  return (
    <li className={styles.card}>
      {props.title}
      <button className={clsx(styles.button, props.isFavorite && styles.isActive)} onClick={handleClick}>
        <i className={'fa fa-star-o'} />
      </button>
      <button className={styles.button} onClick={clickTrash}>
        <i className={'fa fa-trash'} />
      </button>
    </li>
  );
};

export default Card;