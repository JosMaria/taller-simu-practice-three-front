import axios from 'axios';

const URL = 'http://localhost:8080/api/v1/exercises';

const dataOfMiddleSquare = async (seed = 5356, times = 5) => {
  const request = `${URL}/middleSquare?seed=${seed}&times=${times}`; 
  const response = await axios.get(request);
  return response.data;
};

export {
  dataOfMiddleSquare
}