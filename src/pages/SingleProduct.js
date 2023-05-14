import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleProductContent } from '../components/singleProductContent.js/SingleProductContent';

const SingleProduct = () => {
  const [singleFurniture, setSingleFurniture] = useState([]);

  let params = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://course-api.com/javascript-store-single-product?id=${params.id}`
      );
      setSingleFurniture(response.data);
    };
    getData();
  }, [params.id]);

  return (
    <>
      <SingleProductContent singleFurniture={singleFurniture} />
    </>
  );
};

export default SingleProduct;
