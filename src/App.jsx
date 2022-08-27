import { Content } from './components/Content';
import { Menu } from './components/Menu';

import './stylesheets/App.css';


export const App = () => {
  return (
    <div className="app-container">
      <Menu />
      <Content />
    </div>
  );
}
