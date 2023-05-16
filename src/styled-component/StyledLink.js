import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegisterLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledLogoMagnify = styled(Link)`
  color: white;
  width: 30px;
  display: grid;
  place-items: center;
`;

const LinkToAllProducts = styled(Link)`
  font-size: 3rem;
  background-color: rgb(223, 175, 80);
  padding: 5px;
  border-radius: 50%;
  color: black;
  width: 4rem;
  height: 4rem;
  display: grid;
  place-items: center;
  position: absolute;
  top: 16rem;
  right: 9rem;

  :hover {
    background-color: black;
    color: rgb(223, 175, 80);
  }
`;

const LinkToFavorite = styled(Link)`
  text-decoration: none;
  background-color: rgb(223, 175, 80);
  padding: 5px;
  border-radius: 10px;
  width: 14rem;
  display: grid;
  place-items: center;
  color: black;

  :hover {
    background-color: black;
    color: rgb(223, 175, 80);
  }
`;

const LinkToCart = styled(Link)`
  font-size: 2rem;
  background-color: rgb(223, 175, 80);
  padding: 2px;
  border-radius: 5px;
  color: black;
  width: 12rem;
  height: 3rem;
  display: grid;
  place-items: center;
  right: 5rem;
  text-decoration: none;

  :hover {
    background-color: black;
    color: rgb(223, 175, 80);
  }

  @media only screen and (max-width: 37.5em) {
    width: 8rem;
    font-size: 15px;
    padding: 1px;
    height: 2rem;
  }
`;

const LinkToPayPal = styled(Link)`
  font-size: 1.5rem;
  background-color: rgb(223, 175, 80);
  padding: 2px;
  border-radius: 5px;
  color: black;
  width: 16rem;
  height: 3rem;
  display: grid;
  place-items: center;
  text-decoration: none;
  margin-left: 35rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 2rem;

  :hover {
    background-color: black;
    color: rgb(223, 175, 80);
  }
`;

export {
  RegisterLink,
  StyledLogoMagnify,
  LinkToAllProducts,
  LinkToFavorite,
  LinkToCart,
  LinkToPayPal,
};
