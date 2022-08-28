import { Content } from './components/Content';
import { Menu } from './components/Menu';

import './App.css';

//routes
// cuadrados medios --> localhost:8080/api/v1/exercises/middleSquare?seed=x&times=x

export const App = () => {
  const titleHeaders = ['n', 'X', 'X*X = X²', 'Ceros a la izquierda', 'Xn+1', 'Ri'];

  return (
    <div className='app__container'>
      <Menu />
      <Content title='Cuadrados Medios' titleHeaders={titleHeaders} />
    </div>
  );
}
