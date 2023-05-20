import { useContext } from 'react';
import Filter from '../components/products/Filter';
import { ProductList } from '../components/products/ProductList';
import { apiContext } from '../context/ApiContext';
import { favoriteContext } from '../context/FavoriteContext';
import { shoppingCartContext } from '../context/ShoppingCartContext';

const Products = () => {
  const productsList = useContext(apiContext);
  const cart = useContext(shoppingCartContext);
  const favorite = useContext(favoriteContext);

  return (
    <>
      <div className="products">
        <h1>list of furnitures</h1>
        <div className="products_content">
          <div className="products_content_filter">
            <Filter productsList={productsList} />
          </div>
          <div className="products_content_list">
            <ProductList
              productsList={productsList}
              cart={cart}
              favorite={favorite}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
