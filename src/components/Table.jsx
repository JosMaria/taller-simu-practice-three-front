import '../stylesheets/Table.css';

export const Table = ({ rows }) => {
  return (
    <table className='table-container'>
      <thead>
        <tr>
          <th>n</th>
          <th>X</th>
          <th>X*X=X²</th>
          <th>Ceros a la izquierda</th>
          <th>X n+1</th>
          <th>R i</th>
        </tr>
      </thead>
      <tbody>
        {
        rows.map((row) => 
          <tr key={row.numberOfRow}>
            <td>{row.numberOfRow}</td>
            <td>{row.valueOne}</td>
            <td>{row.valueTwo}</td>
            <td>{row.valueThree}</td>
            <td>{row.valueFour}</td>
            <td>{row.valueFive}</td>
          </tr>)
        }
      </tbody>
    </table>
  )
}
