import { useEffect, useState } from 'react';
import { dataOfAverageProduct } from '../api/axios';
import { Table } from '../components/Table';

import '../stylesheets/pages/AverageProduct.css';

const titleHeaders = ['n', 'Xo', 'X1', 'X0 * X1', 'Xn+1', 'Ri'];

export const AverageProduct = () => {
  const [rows, setRows] = useState([]);
  const [payload, setPayload] = useState({ seedOne: 0, seedTwo: 0, times: 0 });

  useEffect(() => {
    dataOfAverageProduct(payload.seedOne, payload.seedTwo, payload.times)
      .then(data => setRows(data))
  }, [payload])

  return (
    <div className='average-product-container'>
      <h1>Productos Medios</h1>
      <Table titleHeaders={titleHeaders} rows={rows} />
    </div>
  )
}
