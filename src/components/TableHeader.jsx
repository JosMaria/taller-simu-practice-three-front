export const TableHeader = ({ titleHeaders }) => {
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
