import { Content } from './components/Content';
import { Menu } from './components/Menu';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';

import './App.css';
import { MiddleSquare } from './pages/MiddleSquare';
import { AverageProduct } from './pages/AverageProduct';
//routes
// cuadrados medios --> localhost:8080/api/v1/exercises/middleSquare?seed=x&times=x

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
