import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { dataOfMiddleSquare } from '../api/axios';
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
      <FormMiddleSquare />
      <Table rows={rows} titleHeaders={titleHeaders} />
    </div>
  )
}

const FormMiddleSquare = () => {
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

      onSubmit={(valores, { resetForm }) => {
        console.log(valores);
        resetForm();
        setIsSent(true);
        setTimeout(() => setIsSent(false), 1500);
      }}
    >
    {
    ({ errors, handleSubmit }) => 
      <Form className='form' onSubmit={handleSubmit}>
        <div>
          <LabelInputField
            textLabel='Semilla' 
            messageError={errors.seed}
            id='seed'
            name='seed' />
          <LabelInputField 
            textLabel='Repeticiones' 
            messageError={errors.times}
            id='times'
            name='times' />
        </div>
        <button type='submit' className='button-submit'>Comenzar</button>
        {isSent && <p className='successfully'>Proceso terminado con exito</p>}
      </Form>
    }
    </Formik>
  )
}

const LabelInputField = ({ textLabel, messageError, name }) => {
  const labelError = <div className='message-error'>{messageError}</div>
  return (
    <div className='label-input-field-container'>
      <div className='label-input'>
        <label className='label'>{textLabel}</label>
        <Field className='field' name={name} placeholder={name} />
      </div>
      <ErrorMessage name={name} component={() => labelError}/>
    </div>  
  )
}