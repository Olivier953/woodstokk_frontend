import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { ApiContent } from '../utils/Api';

export const apiContext = createContext({
  furnituresFirstSlides: [],
  furnituresSecondSlides: [],
  furnituresList: [],
  filter: [],
  favorite: [],
  price: '',
  setPrice: '',
});

const ApiContext = ({ children }) => {
  const [furnituresFirstSlides, setFurnituresFirstSlides] = useState([]);
  const [furnituresSecondSlides, setFurnituresSecondSlides] = useState([]);
  const [furnituresList, setFurnituresList] = useState([]);
  const [filter, setFilter] = useState([]);
  const [price, setPrice] = useState(500);

  const getData = async () => {
    const data = await ApiContent();
    let firstSlidesFiltered = data.filter(
      (item) => item.fields?.company === 'caressa'
    );
    let secondSlidesFiltered = data.filter(
      (item) => item.fields?.featured === true
    );
    setFurnituresFirstSlides(firstSlidesFiltered);
    setFurnituresSecondSlides(secondSlidesFiltered);
    setFurnituresList(data);
    setFilter(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const furnituresValues = {
    furnituresFirstSlides: furnituresFirstSlides,
    furnituresSecondSlides: furnituresSecondSlides,
    furnituresList: furnituresList,
    filter: filter,
    setFilter: setFilter,
    price: price,
    setPrice: setPrice,
  };

  return (
    <>
      <apiContext.Provider value={furnituresValues}>
        {children}
      </apiContext.Provider>
    </>
  );
};

export default ApiContext;
