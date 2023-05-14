import React from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { LinkToAllProducts } from '../../styled-component/StyledLink';

export const SingleProductContent = ({ singleFurniture, cart }) => {
  return (
    <div className="singleProduct">
      <h1>Furniture Details</h1>
      <LinkToAllProducts to="/">
        <RiArrowGoBackFill />
      </LinkToAllProducts>
      <div className="singleProduct_content">
        <img src={singleFurniture?.fields?.image[0]?.url} alt="" />
        <h3>{singleFurniture?.fields?.name}</h3>

        <p className="singleProduct_content_desc">
          {singleFurniture?.fields?.description}
        </p>
        <p className="singleProduct_content_price">
          Price: ${singleFurniture.fields?.price / 100}
        </p>
      </div>
    </div>
  );
};
