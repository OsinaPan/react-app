import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../redux/cardRedux';


const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCard);
    if (!favoriteCards.length) {
      return(
        <div className={styles.favorite}>
          <PageTitle>No cards..</PageTitle>
        </div>
      );
}

return(
  <div className={styles.favorite}>
    <PageTitle>Favorite</PageTitle>
    <div className={styles.column}>
      <ul className={styles.cards}>
        {favoriteCards.map(card => (
          <Card 
            key={card.id}
            id={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
          />
        ))}
      </ul>
    </div>
  </div>
);
};

export default Favorite;