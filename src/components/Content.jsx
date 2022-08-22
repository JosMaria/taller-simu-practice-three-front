import { useEffect, useState } from 'react'
import { dataOfMiddleSquare } from '../api/axios';
import { Table } from './Table'

export const Content = () => {  
  const [rows, setRows] = useState([]);
  
  useEffect(() => {
    dataOfMiddleSquare(5356, 5)
      .then(data => setRows(data));
  }, []);

  return (
    <Table rows={rows} />
  )
}
