import { SlBasket } from 'react-icons/sl';
import { BsArrowDownCircleFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import { useState } from 'react';

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

  const [toggleLeftMenu, setToggleLeftMenu] = useState(true);
  const [toggleRightMenu, setToggleRightMenu] = useState(true);

  const showToggleLeftMenu = () => {
    setToggleLeftMenu((prev) => !prev);
  };

  const showToggleRightMenu = () => {
    setToggleRightMenu((prev) => !prev);
  };

  return (
    <>
      <div className="header">
        <div className="header_left_menu">
          <button
            className="header_left_menu_toggleBtn"
            onClick={showToggleLeftMenu}
          >
            <AiOutlineMenu />
          </button>
          <ul
            className={
              toggleLeftMenu
                ? 'header_left_menu_ul'
                : 'header_left_menu_ul_expanded'
            }
          >
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
              <NavLink style={navLinkStyles} to="/about">
                About
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

        <div className="header_right_menu_toggle" onClick={showToggleRightMenu}>
          <BsArrowDownCircleFill />
        </div>
        <div
          className={
            toggleRightMenu
              ? 'header_right_menu'
              : 'header_right_menu_expandedRight'
          }
        >
          <div>
            {!login.isLoggedIn.get ? (
              ''
            ) : (
              <NavLink style={navLinkStyles} to="/myaccount">
                Account
              </NavLink>
            )}
          </div>
          {!login.isLoggedIn.get ? (
            <NavLink style={navLinkStyles} to="/login">
              Login
            </NavLink>
          ) : (
            <NavLink style={navLinkStyles} onClick={Logout} to="/login">
              Logout
            </NavLink>
          )}
        </div>
        <div className="header_right_menu_shoppingCart">
          <SlBasket
            className="header_right_menu_shoppingCart_basket"
            onClick={() => showShoppingCart()}
          />
          <span>{cart.furnituresCount}</span>
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
