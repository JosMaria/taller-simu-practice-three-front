import { Form, Formik } from 'formik';
import { useState } from 'react';
import { LabelInputField } from '../components/LabelInputField';
import { Table } from '../components/Table';

import '../stylesheets/pages/Mixed.css';

const titleHeaders = ['n', 'Xo','a * Xn', 'a * Xn + c', 'Xn+1', 'Un = Xn+1/m'];

export const Mixed = () => {
  const [rows, setRows] = useState([]);

  return (
    <div className='mixed-product-container'>
      <h1>Congruencial Mixto</h1>
      <FormMixed />
      <Table titleHeaders={titleHeaders} rows={rows} />
    </div>
  )
}

const FormMixed = () => {
  const [isSent, setIsSent] = useState(false);
  
  return (
    <Formik
      initialValues={{ seed: '', multiplicativeConstant: '', additiveConstant: '', module: '' }}

      onSubmit={(values, { resetForm }) => {
        /*setPayload(values);*/
        console.log(values)
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
              textLabel='C. Multiplicativa'
              messageError={errors.multiplicativeConstant}
              name='multiplicativeConstant' />
            <LabelInputField 
              textLabel='C. Aditiva'
              messageError={errors.additiveConstant}
              name='additiveConstant' />
            <LabelInputField 
              textLabel='Modulo'
              messageError={errors.module}
              name='module' />
          </div>
          <button type='submit' className='button-submit'>Comenzar</button>
          {isSent && <p className='successfully'>Proceso terminado con exito</p>}
        </Form>
    }
    </Formik>
  )
}
