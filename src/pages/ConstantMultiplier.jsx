import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { dataOfConstantMultiplier } from '../api/axios';
import { LabelInputField } from '../components/LabelInputField';
import { Table } from '../components/Table';

import '../stylesheets/pages/ConstantMultiplier.css';

const titleHeaders = ['n', 'a', 'X', 'a * X', 'Xn+1', 'Ri'];

export const ConstantMultiplier = () => {
  const [rows, setRows] = useState([]);
  const [payload, setPayload] = useState({ seed: 0, constant: 0, times: 0 });

  useEffect(() => {
    dataOfConstantMultiplier(payload.seed, payload.constant, payload.times)
    .then(data => setRows(data))
  }, [payload]);

  return (
    <div className='constant-multiplier-container'>
      <h1>Multiplicador Constante</h1>
      <FormConstantMultiplier setPayload={setPayload} />
      <Table titleHeaders={titleHeaders} rows={rows} />
    </div>
  )
}

const FormConstantMultiplier = ({ setPayload }) => {
  const [isSent, setIsSent] = useState(false);

  const smallerThan = (number , numberLimit) => {
    return number <= numberLimit;
  }

  return (
    <Formik
      initialValues={{ seed: '', constant: '', times: '' }}

      validate={(values) => {
        let validation = {}
        if (!values.seed) {
          validation.seed = 'Ingrese la semilla';
        }
        if (!values.constant) {
          validation.constant = 'Ingrese la constante';
        }
        if (!values.times) {
          validation.times = 'Ingrese las repeticiones';
        }

        if (smallerThan(parseInt(values.seed), 999)) {
          validation.seed = 'La semilla tiene que ser mayor a 3 digitos';
        }
        if (smallerThan(parseInt(values.constant), 999)) {
          validation.constant = 'La constante tiene que ser mayor a 3 digitos';
        }
        if (smallerThan(parseInt(values.times), 0)) {
          validation.times = 'Las repeticiones tiene que ser mayor a 0';
        }
        return validation
      }}
      
      onSubmit={(values, { resetForm }) => {
        setPayload(values);
        console.log(values);
        resetForm();
        setIsSent(true);
        setTimeout(() => setIsSent(false), 2000);
      }}
    >
    {({ errors }) => 
      <Form className='form'>
        <div>
          <LabelInputField 
            textLabel='Semilla'
            messageError={errors.seed}
            name='seed' />
          <LabelInputField 
            textLabel='Constante'
            messageError={errors.constant}
            name='constant'/>
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
