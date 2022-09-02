import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { dataOfMixed } from '../api/axios';
import { LabelInputField } from '../components/LabelInputField';
import { SectionMessages } from '../components/SectionMessages';
import { Table } from '../components/Table';

import '../stylesheets/pages/Mixed.css';

const titleHeaders = ['n', 'Xo','a * Xn', 'a * Xn + c', 'Xn+1', 'Un = Xn+1/m'];

export const Mixed = () => {
  const [rows, setRows] = useState([]);
  const [payload, setPayload] = useState({ seed: 0, multiplicative: 0, additive: 0, module: 0 });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    dataOfMixed(payload.seed, payload.multiplicative, payload.additive, payload.module)
      .then(data => {
        setRows(data.response);
        setMessages(data.messages);
      });
  }, [payload]);

  return (
    <div className='mixed-product-container'>
      <h1>Congruencial Mixto</h1>
      <FormMixed setPayload={setPayload} />
      <Table titleHeaders={titleHeaders} rows={rows} />
      <SectionMessages messages={messages} />
    </div>
  )
}

const FormMixed = ({ setPayload }) => {
  const [isSent, setIsSent] = useState(false);
  
  return (
    <Formik
      initialValues={{ seed: '', multiplicative: '', additive: '', module: '' }}

      onSubmit={(values, { resetForm }) => {
        setPayload(values);
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
            textLabel='C. Multiplicativa'
            messageError={errors.multiplicative}
            name='multiplicative' />
          <LabelInputField 
            textLabel='C. Aditiva'
            messageError={errors.additive}
            name='additive' />
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
