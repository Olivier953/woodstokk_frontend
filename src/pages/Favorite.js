import { useContext } from 'react';
import FavoriteContent from '../components/favorite/FavoriteContent';
import { favoriteContext } from '../context/FavoriteContext';

const Favorite = () => {
  const favorite = useContext(favoriteContext);

  return (
    <div className="favoritePage">
      <h1>My favorites</h1>
      <div className="favoritePage_content">
        {favorite.items.map((currentFavorite) => {
          return (
            <div key={currentFavorite.id}>
              <FavoriteContent
                favorite={favorite}
                currentFavoriteId={currentFavorite.id}
                currentFavorite={currentFavorite}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorite;
