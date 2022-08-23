export const Row = ({ numberOfRow, valueOne, valueTwo, valueThree, valueFour, valueFive }) => {
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
