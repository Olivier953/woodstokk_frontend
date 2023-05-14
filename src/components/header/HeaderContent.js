import { SlBasket } from 'react-icons/sl';
import { FaMoon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ShoppingCart from "../shoppingCart/ShoppingCart"

const HeaderContent = ({
  shoppingCart,
  showShoppingCart,
  closeShoppingCart,
  login,
  Logout,
  cart,
}) => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? `rgb(223, 175, 80)` : 'rgb(87, 84, 84)',
      textDecoration: 'none',
      fontSize: '23px',
    };
  };

  return (
    <>
      <div className="header">
        <div className="header_left_menu">
          <ul>
            <li>
              <NavLink style={navLinkStyles} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/products">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/cart">
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header_logo">
          <h1>
            wood<span>stokk</span>
          </h1>
        </div>
        <div className="account">
          {!login.isLoggedIn.get ? (
            ''
          ) : (
            <NavLink style={navLinkStyles} to="/myaccount">
              Account
            </NavLink>
          )}
        </div>
        <div className="header_right_menu">
          {!login.isLoggedIn.get ? (
            <NavLink style={navLinkStyles} to="/login">
              Login
            </NavLink>
          ) : (
            <NavLink style={navLinkStyles} onClick={Logout} to="/login">
              Logout
            </NavLink>
          )}
          <FaMoon className="header_right_menu_moon" />
          <div className="header_right_menu_shoppingCart">
            <SlBasket
              className="header_right_menu_shoppingCart_basket"
              onClick={showShoppingCart}
            />
            <span>{cart.furnituresCount}</span>
          </div>
        </div>
      </div>
      {shoppingCart ? (
        <ShoppingCart closeShoppingCart={closeShoppingCart} cart={cart} />
      ) : (
        ''
      )}
    </>
  );
};

export default HeaderContent;
