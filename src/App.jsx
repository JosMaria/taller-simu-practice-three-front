import { Content } from './components/Content';
import { Menu } from './components/Menu';

import './App.css';

export const App = () => {
  return (
    <div className='app__container'>
      <Menu />
      <Content title='Cuadrados Medios' />
    </div>
  );
}
