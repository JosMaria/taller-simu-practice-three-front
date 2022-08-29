import { Menu } from './components/Menu';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { MiddleSquare } from './pages/MiddleSquare';
import { AverageProduct } from './pages/AverageProduct';

import './App.css';

export const App = () => {
  return (
    <div className='app__container'>
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/middleSquare' element={<MiddleSquare />} />
        <Route path='/averageProduct' element={<AverageProduct />} />
        <Route path='/constantMultiplier' element={<HomePage />} />
        <Route path='/mixed' element={<HomePage />} />
        <Route path='/multiplicative' element={<HomePage />} />
        <Route path='/additive' element={<HomePage />} />
        <Route path='/quadratic' element={<HomePage />} />
        <Route path='/blumBlumSub' element={<HomePage />} />
      </Routes>
    </div>
  );
}
