import { TableHeader } from './TableHeader';
import { Row } from './Row';

import '../stylesheets/Table.css';

export const Table = ({ rows, titleHeaders }) => {
  return (
    <table className='table-container'>
      <TableHeader titleHeaders={titleHeaders}/>
      <tbody>
      {
      rows.map((row) =>
        <Row 
          key={row.numberOfRow} 
          numberOfRow={row.numberOfRow} 
          valueOne={row.valueOne}
          valueTwo={row.valueTwo}
          valueThree={row.valueThree}
          valueFour={row.valueFour}
          valueFive={row.valueFive}
        />)
      }
      </tbody>
    </table>
  )
}
