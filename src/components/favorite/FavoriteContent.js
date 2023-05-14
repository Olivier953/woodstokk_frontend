import React, { useContext } from 'react';
import { GetProductData } from '../others/ProductStore';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StyledLogoMagnify } from '../../styled-component/StyledLink';
import { shoppingCartContext } from '../../context/ShoppingCartContext';

const FavoriteContent = ({ favorite, currentFavoriteId, currentFavorite }) => {
  const id = currentFavoriteId;
  const productData = GetProductData(id);
  const cart = useContext(shoppingCartContext);

  return (
    <div className="favoritePage_content_card carousel_content_card">
      <img
        className=""
        src={productData?.fields?.image[0]?.url}
        alt={productData?.fields?.name}
      />
      <h4>{productData?.fields?.name}</h4>
      <button onClick={() => favorite.deleteFromFavorite(id)}>remove</button>
      <div className="logo">
        <div className="logo_content">
          <div className="logoMagnify">
            <StyledLogoMagnify to={'/product/' + currentFavorite?.id}>
              <GiMagnifyingGlass />
            </StyledLogoMagnify>
          </div>
          <div
            className="logoBasket"
            onClick={() => cart.addOneToCart(currentFavorite?.id)}
          >
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteContent;

/*
 <div className="logo">
                <div className="logo_content">
                  <div className="logoMagnify">
                    <StyledLogoMagnify to={'/product/' + currentFavorite?.id}>
                      <GiMagnifyingGlass />nkkk
                    </StyledLogoMagnify>
                  </div>
                  <div
                    className="logoBasket"
                    onClick={() => cart.addOneToCart(currentFavorite?.id)}
                  >
                    <AiOutlineShoppingCart />
                  </div>
                </div>
              </div>
*/
