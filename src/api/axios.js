import axios from 'axios';

const domain = axios.create({
  baseURL: 'http://localhost:8080/'
})

const dataOfMiddleSquare = async (seed, times) => {
  if (seed !== 0 && times !== 0) {
    const response = await domain.get(`api/middleSquare?seed=${seed}&times=${times}`)
    return response.data;
  }
  return [];
};

export {
  dataOfMiddleSquare
}