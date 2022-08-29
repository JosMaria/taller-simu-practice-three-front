import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { dataOfAverageProduct } from '../api/axios';
import { LabelInputField } from '../components/LabelInputField';
import { Table } from '../components/Table';

import '../stylesheets/pages/AverageProduct.css';

const titleHeaders = ['n', 'Xo', 'X1', 'X0 * X1', 'Xn+1', 'Ri'];

export const AverageProduct = () => {
  const [rows, setRows] = useState([]);
  const [payload, setPayload] = useState({ seedOne: 0, seedTwo: 0, times: 0 });

  useEffect(() => {
    dataOfAverageProduct(payload.seedOne, payload.seedTwo, payload.times)
      .then(data => setRows(data))
  }, [payload])

  return (
    <div className='average-product-container'>
      <h1>Productos Medios</h1>
      <FormAverageProduct setPayload={setPayload} />
      <Table titleHeaders={titleHeaders} rows={rows} />
    </div>
  )
}

const FormAverageProduct = ({ setPayload }) => {
  const [isSent, setIsSent] = useState(false);

  const smallerThan = (number , numberLimit) => {
    return number <= numberLimit;
  }

  return (
    <Formik
      initialValues={{ seedOne: '', seedTwo: '', times: '' }}
      
      validate={(values) => {
        let validation = {}
        if (!values.seedOne) {
          validation.seedOne = 'Ingrese la semilla 1';
        }
        if (!values.seedTwo) {
          validation.seedTwo = 'Ingrese la semilla 2';
        }
        if (!values.times) {
          validation.times = 'Ingrese las repeticiones';
        }

        if (smallerThan(parseInt(values.seedOne), 999)) {
          validation.seedOne = 'La semilla 1 tiene que ser mayor a 3 digitos';
        }
        if (smallerThan(parseInt(values.seedTwo), 999)) {
          validation.seedTwo = 'La semilla 2 tiene que ser mayor a 3 digitos';
        }
        if (smallerThan(parseInt(values.times), 0)) {
          validation.times = 'Las repeticiones tiene que ser mayor a 0';
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
            textLabel='Semilla 1'
            messageError={errors.seedOne}
            name='seedOne' />
          <LabelInputField
            textLabel='Semilla 2'
            messageError={errors.seedTwo}
            name='seedTwo' />
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
};
