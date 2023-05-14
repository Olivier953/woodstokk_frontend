import { GiMagnifyingGlass } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StyledLogoMagnify } from '../../styled-component/StyledLink';
import { useContext } from 'react';
import { shoppingCartContext } from '../../context/ShoppingCartContext';

const HomeSecondSlides = ({ furnituresSecondSlides }) => {
  const cart = useContext(shoppingCartContext);

  return (
    <div className="carousel">
      <h1>Our best sellings</h1>
      <div className="carousel_content">
        {furnituresSecondSlides.map((item) => {
          return (
            <div key={item.id} className="carousel_content_card">
              <img src={item.fields.image[0].url} alt={item.fields.name} />
              <p>{item.fields?.name}</p>
              <span>${item.fields.price / 100}</span>
              <div className="logo">
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
      </div>
    </div>
  );
};

export default HomeSecondSlides;
