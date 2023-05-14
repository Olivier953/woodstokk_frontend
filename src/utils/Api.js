import axios from 'axios';

export const baseUrl = 'https://course-api.com/javascript-store-products?';

export const ApiContent = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
