import { useEffect, useState } from 'react'
import { dataOfMiddleSquare } from '../api/axios';
import { Table } from './Table';
import { Form } from './Form';

import '../stylesheets/Content.css';

export const Content = () => {  
  const [rows, setRows] = useState([]);
  
  useEffect(() => {
    dataOfMiddleSquare(5356, 5)
      .then(data => setRows(data));
  }, []);

  return (
    <div className='content-container'>
      <h1>Cuadrados Medios</h1>
      <Form />
      <Table rows={rows} />
    </div>
    
  )
}
