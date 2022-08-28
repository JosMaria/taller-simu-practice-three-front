import { useEffect, useState } from 'react'
import { dataOfMiddleSquare } from '../api/axios';
import { Table } from './Table';
import { Form } from './Form';

import '../stylesheets/Content.css';

export const Content = ({ title }) => {  
  const [rows, setRows] = useState([]);
  const [payload, setPayload] = useState({ seed: 0, times: 0 })
  
  useEffect(() => {
    dataOfMiddleSquare(payload.seed, payload.times)
      .then(data => setRows(data));
  }, [payload]);

  return (
    <div className='content-container'>
      <h1>{title}</h1>
      <Form statePayload={setPayload} />
      <Table rows={rows} />
    </div> 
  )
}
