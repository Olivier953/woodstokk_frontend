import React, { createContext, useEffect, useState } from 'react';
import { GetProductData } from '../components/others/ProductStore';

export const shoppingCartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  furnituresCount: () => {},
});

const ShoppingCartContext = ({ children }) => {
  const cartFormLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cartProducts, setCartProducts] = useState(cartFormLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

  const furnituresCount = cartProducts.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((items) =>
      items.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = GetProductData(cartItem.id);
      totalCost += (productData?.fields?.price / 100) * cartItem.quantity;
    });
    return totalCost;
  }

  const shoppingCartValues = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    furnituresCount,
  };

  return (
    <>
      <shoppingCartContext.Provider value={shoppingCartValues}>
        {children}
      </shoppingCartContext.Provider>
    </>
  );
};

export default ShoppingCartContext;
