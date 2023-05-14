import React, { useContext } from 'react';
import { CartContent } from '../components/cart/CartContent';
import { shoppingCartContext } from '../context/ShoppingCartContext';
import { LinkToPayPal } from '../styled-component/StyledLink';

export const Cart = () => {
  const cart = useContext(shoppingCartContext);

  return (
    <div className="cart">
      <h1>My Cart</h1>
      <div className="cart_summary">
        <div className="cart_summary_title">
          <ul className="cart_summary_title_list">
            <li>Name</li>
            <li>Image</li>
            <li>Quantity</li>
            <li>Price</li>
          </ul>
        </div>
        <div className="cart_summary_products">
          {cart.furnituresCount > 0 ? (
            <>
              {cart.items.map((currentFurniture, index) => (
                <CartContent
                  cart={cart}
                  key={index}
                  currentFurnitureId={currentFurniture.id}
                />
              ))}
            </>
          ) : (
            <h2>No items in your cart!</h2>
          )}
        </div>
        <div className="cart_summary_total">
          <div className="cart_summary_total_title">
            total <span>${cart.getTotalCost().toFixed(2)}</span>
          </div>
        </div>
      </div>
      {cart.furnituresCount > 0 ? (
        <LinkToPayPal to="/checkout">Purchase</LinkToPayPal>
      ) : (
        ''
      )}
    </div>
  );
};
