import '../stylesheets/Table.css';

export const Table = ({ rows, titleHeaders }) => {
  return (
    <table className='table-container'>
      <TableHeader titleHeaders={titleHeaders} />
      <tbody>
      {rows.map((row) =>
        <Row 
          key={row.numberOfRow} 
          numberOfRow={row.numberOfRow} 
          valueOne={row.valueOne}
          valueTwo={row.valueTwo}
          valueThree={row.valueThree}
          valueFour={row.valueFour}
          valueFive={row.valueFive} />)
      }
      </tbody>
    </table>
  )
}

const TableHeader = ({ titleHeaders }) => {
  return (
    <thead>
      <tr>
      {
        titleHeaders.map((titleHeader, index) => <th key={index}>{titleHeader}</th>)
      }
      </tr>
    </thead>
  )
}

const Row = ({ numberOfRow, valueOne, valueTwo, valueThree, valueFour, valueFive }) => {
  return (
    <tr>
      <td>{numberOfRow}</td>
      <td>{valueOne}</td>
      <td>{valueTwo}</td>
      <td>{valueThree}</td>
      <td>{valueFour}</td>
      <td>{valueFive}</td>
    </tr>
  )
}
