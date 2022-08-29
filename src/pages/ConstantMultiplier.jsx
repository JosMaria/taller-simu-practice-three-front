import { useState } from 'react';
import { Table } from '../components/Table';
import '../stylesheets/pages/ConstantMultiplier.css';

const titleHeaders = ['n', 'a', 'X', 'a * X', 'Xn+1', 'Ri'];

export const ConstantMultiplier = () => {
  const [rows, setRows] = useState([]);

  return (
    <div className='constant-multiplier-container'>
      <h1>Multiplicador Constante</h1>
      <Table titleHeaders={titleHeaders} rows={rows} />
    </div>
  )
}
