import axios from 'axios';

const URL = 'http://localhost:8080/api/v1/exercises';

const dataOfMiddleSquare = async (seed, times) => {
  if (seed !== 0 && times !== 0) {
    const request = `${URL}/middleSquare?seed=${seed}&times=${times}`; 
    const response = await axios.get(request);
    return response.data;
  }
  return [];
};

export {
  dataOfMiddleSquare
}