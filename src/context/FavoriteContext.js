import React, { createContext, useEffect, useState } from 'react';

export const favoriteContext = createContext('');

export const FavoriteContext = ({ children }) => {
  const favoriteFromLocalStorage = JSON.parse(
    localStorage.getItem('favorite') || '[]'
  );
  const [favorite, setFavorite] = useState(favoriteFromLocalStorage);

  const getProductQuantity = (id) => {
    const quantity = favorite.find((product) => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };

  const addToFavorite = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setFavorite([...favorite, { id: id, quantity: 1 }]);
    } else {
      setFavorite(
        favorite.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity }
            : product
        )
      );
    }
  };

  function deleteFromFavorite(id) {
    setFavorite((items) =>
      items.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  const favoriteProductsValues = {
    items: favorite,
    getProductQuantity,
    addToFavorite,
    deleteFromFavorite,
  };

  return (
    <>
      <favoriteContext.Provider value={favoriteProductsValues}>
        {children}
      </favoriteContext.Provider>
    </>
  );
};
