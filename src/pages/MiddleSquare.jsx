import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { dataOfMiddleSquare } from '../api/axios';
import { LabelInputField } from '../components/LabelInputField';
import { Table } from '../components/Table';

import '../stylesheets/pages/MiddleSquare.css';

const titleHeaders = ['n', 'X', 'X*X = X²', 'Ceros a la izquierda', 'Xn+1', 'Ri'];

export const MiddleSquare = () => {
  const [rows, setRows] = useState([]);
  const [payload, setPayload] = useState({ seed: 0, times: 0 })
  
  useEffect(() => {
    dataOfMiddleSquare(payload.seed, payload.times)
      .then(data => setRows(data));
  }, [payload]);

  return (
    <div className='middle-square-container'>
      <h1>Cuadrados Medios</h1>
      <FormMiddleSquare setPayload={setPayload} />
      <Table rows={rows} titleHeaders={titleHeaders} />
    </div>
  )
}

const FormMiddleSquare = ({ setPayload }) => {
  const [isSent, setIsSent] = useState(false);

  const smallerThan = (number , numberLimit) => {
    return number <= numberLimit;
  } 

  return (
    <Formik 
      initialValues={{ seed: '', times: '' }}

      validate={(values) => {
        let validation = {}
        if (!values.seed) {
          validation.seed = 'Ingrese la semilla';
        }
        if (smallerThan(parseInt(values.seed), 999)) {
          validation.seed = 'Semilla debe ser mayor a 3 digitos';
        }
        if (!values.times) {
          validation.times = 'Ingrese las repeticiones';
        }
        if (smallerThan(parseInt(values.times), 0)) {
          validation.times = 'Repeticiones deben ser mayor a 0';
        }
        return validation
      }}

      onSubmit={(values, { resetForm }) => {
        setPayload(values);
        resetForm();
        setIsSent(true);
        setTimeout(() => setIsSent(false), 2000);
      }}
    >
    {
    ({ errors }) => 
      <Form className='form'>
        <div>
          <LabelInputField
            textLabel='Semilla' 
            messageError={errors.seed}
            name='seed' />
          <LabelInputField
            textLabel='Repeticiones' 
            messageError={errors.times}
            name='times' />
        </div>
        <button type='submit' className='button-submit'>Comenzar</button>
        {isSent && <p className='successfully'>Proceso terminado con exito</p>}
      </Form>
    }
    </Formik>
  )
}
