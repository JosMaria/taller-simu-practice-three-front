import { useState } from 'react'
import { Table } from './Table'

const fake = [
  {
    "numberOfRow": 1,
    "valueOne": 5356,
    "valueTwo": 28686736,
    "valueThree": "28686736",
    "valueFour": "6867",
    "valueFive": 0.6867
  },
  {
    "numberOfRow": 2,
    "valueOne": 6867,
    "valueTwo": 47155689,
    "valueThree": "47155689",
    "valueFour": "1556",
    "valueFive": 0.1556
  },
  {
    "numberOfRow": 3,
    "valueOne": 1556,
    "valueTwo": 2421136,
    "valueThree": "02421136",
    "valueFour": "4211",
    "valueFive": 0.4211
  },
  {
    "numberOfRow": 4,
    "valueOne": 4211,
    "valueTwo": 17732521,
    "valueThree": "17732521",
    "valueFour": "7325",
    "valueFive": 0.7325
  },
  {
    "numberOfRow": 5,
    "valueOne": 7325,
    "valueTwo": 53655625,
    "valueThree": "53655625",
    "valueFour": "6556",
    "valueFive": 0.6556
  }
];

export const Content = () => {
  
  const [rows, setRows] = useState(fake);
  

  return (
    <Table rows={rows} />
  )
}
