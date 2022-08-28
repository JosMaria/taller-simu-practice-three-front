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
      <FormMiddleSquare />|·
      <Table rows={rows} titleHeaders={titleHeaders} />
    </div>
  )
}

const FormMiddleSquare = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <Formik 
      initialValues={{ seed: '', times: '' }}

      onSubmit={(values, { resetForm }) => {
        resetForm();
        console.log(values);
        setIsSent(true);
        setTimeout(() => setIsSent(!isSent), 2000);
      }}

      validate={(values) => {
        let validation = {}
        /*if (!values.seed) {
          validation.seed = 'Ingrese la semilla';
        }
        if (!values.times) {
          validation.times = 'Ingrese las repeticiones';
        }*/
        return validation
      }}
    >
      {({ errors }) => (
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
          <button className='button-submit' type='submit'>Comenzar</button>
          {isSent && <p className='successfully'>Proceso terminado con exito</p>}
        </Form>
      )}
    </Formik>
  )
}

const LabelInputField = ({ textLabel, messageError, name }) => {
  const labelError = <div className='message-error'>{messageError}</div>
  return (
    <div className='label-input-field-container'>
      <label className='label'>{textLabel}</label>
      <Field className='field' name={name} />
      <ErrorMessage name={name} component={() => labelError}/>
    </div>  
  )
}