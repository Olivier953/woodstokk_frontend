import { useContext } from 'react';
import { apiContext } from '../../context/ApiContext';

function GetProductData(id) {
  const { furnituresList } = useContext(apiContext);
  let productData = furnituresList.find((product) => product.id === id);
  if (productData === undefined) {
    return undefined;
  }
  return productData;
}

export { GetProductData };
