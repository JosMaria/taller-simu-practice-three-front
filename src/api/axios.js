import axios from 'axios';

const domain = axios.create({
  baseURL: 'http://localhost:8080/'
})

const dataOfMiddleSquare = async (seed, times) => {
  if (seed !== 0 && times !== 0) {
    const response = await domain.get(`api/middleSquare?seed=${seed}&times=${times}`);
    return response.data;
  }
  return [];
};

const dataOfAverageProduct = async (seedOne, seedTwo, times) => {
  if (seedOne !== 0 && seedTwo !== 0 && times !== 0) {
    const response = await domain.get(`api/averageProduct?seedOne=${seedOne}&seedTwo=${seedTwo}&times=${times}`);
    return response.data;
  }
  return [];
};

const dataOfConstantMultiplier = async (seed, constant, times) => {
  if (seed !== 0 && constant !== 0 && times !== 0) {
    const response = await domain.get(`api/constantMultiplier?seed=${seed}&constant=${constant}&times=${times}`);
    return response.data;
  }
  return [];
}

export {
  dataOfMiddleSquare,
  dataOfAverageProduct,
  dataOfConstantMultiplier
}