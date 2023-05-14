import React from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StyledLogoMagnify } from '../../styled-component/StyledLink';
import { FavoriteBtn } from '../favorite/FavoriteBtn';

export const ProductList = ({ cart, filter, price, favorite }) => {
  return (
    <>
      {filter
        .filter((data) => data.fields.price > parseInt(price, 10))
        .map((item) => {
          return (
            <div
              key={item.id}
              className="carousel_content_card products_content_list_card"
            >
              <img src={item.fields.image[0].url} alt={item.fields.name} />
              <p>{item.fields?.name}</p>
              <span>${item.fields.price / 100}</span>
              <div
                onClick={() => {
                  favorite.addToFavorite(item.id);
                }}
              >
                <div className="favoriteBtn">
                  <FavoriteBtn />
                </div>
              </div>
              <div className="logo logo_productsPage">
                <div className="logo_content">
                  <div className="logoMagnify">
                    <StyledLogoMagnify to={'/product/' + item.id}>
                      <GiMagnifyingGlass />
                    </StyledLogoMagnify>
                  </div>
                  <div
                    className="logoBasket"
                    onClick={() => cart.addOneToCart(item.id)}
                  >
                    <AiOutlineShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
