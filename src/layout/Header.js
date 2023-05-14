import { useContext } from 'react';
import { useState } from 'react';
import HeaderContent from '../components/header/HeaderContent';
import { LoginLoading } from '../context/LoginContext';
import { shoppingCartContext } from '../context/ShoppingCartContext';

const Header = () => {
  const [login] = useContext(LoginLoading);
  const [shoppingCart, setShoppingCart] = useState(false);
  const cart = useContext(shoppingCartContext);

  const showShoppingCart = () => {
    setShoppingCart((toggle) => !toggle);
  };

  const closeShoppingCart = () => {
    setShoppingCart(false);
  };

  const Logout = () => {
    localStorage.clear();
    window.location.href = '/login';
    login.isLoggedIn.set(false);
  };

  return (
    <HeaderContent
      shoppingCart={shoppingCart}
      showShoppingCart={showShoppingCart}
      closeShoppingCart={closeShoppingCart}
      login={login}
      Logout={Logout}
      cart={cart}
    />
  );
};

export default Header;

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faHouse} />
