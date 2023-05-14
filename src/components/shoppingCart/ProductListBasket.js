import React from 'react';
import { GetProductData } from '../others/ProductStore';

const ProductListBasket = ({ cart, currentFurnitureId }) => {
  const id = currentFurnitureId;
  const productData = GetProductData(id);
  const productQuantity = cart.getProductQuantity(productData?.id);

  return (
    <div className="productListBasket">
      <div className="productListBasket_left">
        <img
          src={productData?.fields?.image[0]?.url}
          alt={productData?.fields?.name}
        />
      </div>
      <div className="productListBasket_content">
        <div className="productListBasket_middle">
          <h4>{productData?.fields?.name}</h4>
          <p>${productData?.fields?.price / 100}</p>
          <button
            className="productList_middle_btn"
            onClick={() => cart.deleteFromCart(id)}
          >
            remove
          </button>
        </div>
        <div className="productListBasket_counter">
          <button
            className="productListBasket_counter_add"
            onClick={() => cart.addOneToCart(productData?.id)}
          >
            +
          </button>
          <p className="productListBasket_counter_quantity">
            {productQuantity}
          </p>
          <button
            className="productListBasket_counter_remove"
            onClick={() => cart.removeOneFromCart(productData?.id)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListBasket;
