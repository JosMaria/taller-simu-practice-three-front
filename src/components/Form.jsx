import { useForm } from 'react-hook-form';
import { validationOfSeed, validationNumberOfIterations } from '../utils/validations';

import '../stylesheets/Form.css';

export const Form = ({ statePayload }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const customSubmit = (data) => {
    statePayload(data)
  }

  const inputDataSeed = 
    <div className='input-data-container'>
      <label className='text-label'>Semilla</label>
      <input className='text-input' type='text' {...register('seed', {
        required: true,
        validate: validationOfSeed
      })} />
    </div> 

  const inputDataTimes = 
    <div className='input-data-container'>
      <label className='text-label'>Número de iteraciones</label>
      <input className='text-input' type='text' {...register('times', { 
        required: true,
        validate: validationNumberOfIterations
      })} />
    </div>
    
  const inputs = 
    <>
      { inputDataSeed }
      { errors.seed?.type === 'required' && <p>semilla campo obligatorio</p> }
      { errors.seed?.type === 'validate' && <p>Semilla tiene que tener mas de 3 digitos</p> }
      { inputDataTimes }
      { errors.times?.type === 'required' && <p>iteraciones campo obligatorio</p> }
      { errors.seed?.type === 'validate' && <p>Numero de iteraciones tiene que ser mayor a 0</p> }
    </>

  return (
    <form className='form-container' onSubmit={handleSubmit(customSubmit)}>
      { inputs }
      <input className='button-input' type='submit' value='Empezar' />
    </form>
  )
}
