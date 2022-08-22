import { useEffect, useState } from 'react'
import { dataOfMiddleSquare } from '../api/axios';
import { Table } from './Table'

import '../stylesheets/Content.css';

export const Content = () => {  
  const [rows, setRows] = useState([]);
  
  useEffect(() => {
    dataOfMiddleSquare(5356, 5)
      .then(data => setRows(data));
  }, []);

  return (
    <div className='content-container'>
      <h1>Practica 3 - Cuadrados Medios</h1>
      <Table rows={rows} />
    </div>
    
  )
}
