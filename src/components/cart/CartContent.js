import React from 'react';
import { GetProductData } from '../others/ProductStore';

export const CartContent = ({ cart, currentFurnitureId }) => {
  const id = currentFurnitureId;
  const productData = GetProductData(id);
  const productQuantity = cart.getProductQuantity(productData?.id);

  return (
    <div className="cart_summary_products_list">
      <h5 className="cart_summary_products_list_name">
        {productData?.fields?.name}
      </h5>
      <img
        src={productData?.fields?.image[0]?.url}
        alt={productData?.fields?.name}
      />
      <div className="cart_summary_products_list_qty">
        <button className="" onClick={() => cart.addOneToCart(productData?.id)}>
          +
        </button>
        <p className="cart_summary_products_list_qty_number">
          {productQuantity}
        </p>
        <button
          className=""
          onClick={() => cart.removeOneFromCart(productData?.id)}
        >
          -
        </button>
      </div>
      <p className="cart_summary_products_list_price">
        ${productData?.fields?.price / 100}
      </p>
    </div>
  );
};
