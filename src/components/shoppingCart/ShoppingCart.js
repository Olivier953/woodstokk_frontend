import { ImCross } from 'react-icons/im';
import { LinkToCart } from '../../styled-component/StyledLink';
import ProductListBasket from './ProductListBasket';

const ShoppingCart = ({ cart, closeShoppingCart }) => {
  return (
    <div className="shoppingCart">
      <div className="shoppingCart_top">
        <div className="shoppingCart_top_cross" onClick={closeShoppingCart}>
          <ImCross />
        </div>
        <h2>Your bag</h2>
      </div>
      <div className="shoppingCart_productsList">
        {cart.furnituresCount > 0 ? (
          <>
            {cart.items.map((currentFurniture, index) => (
              <ProductListBasket
                cart={cart}
                key={index}
                currentFurnitureId={currentFurniture.id}
              />
            ))}
          </>
        ) : (
          <h1>No items in your cart!</h1>
        )}
      </div>
      <div className="shoppingCart_bottom">
        <h2 className="shoppingCart_bottom_total">
          Total : ${cart.getTotalCost().toFixed(2)}
        </h2>
        <LinkToCart to="/cart" className="shoppingCart_bottom_checkoutBtn">
          Checkout
        </LinkToCart>
      </div>
    </div>
  );
};

export default ShoppingCart;
