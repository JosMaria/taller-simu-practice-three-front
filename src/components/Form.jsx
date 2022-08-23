import { useForm } from 'react-hook-form';

import '../stylesheets/Form.css';

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const customSubmit = (data) => {
    console.log(data);
  }

  const inputDataSeed = 
    <div className='input-data-container'>
      <label className='text-label'>Semilla</label>
      <input className='text-input' type='text' {...register('seed', {
        required: true
      })} />
    </div>

  const inputDataTimes = 
    <div className='input-data-container'>
      <label className='text-label'>Número de iteraciones</label>
      <input className='text-input' type='text' {...register('times', { 
        required: true
      })} />
    </div>
    
  const inputs = 
    <>
      { inputDataSeed }
      { errors.seed?.type === 'required' && <p>campo obligatorio</p> }
      { inputDataTimes }
      { errors.times?.type === 'required' && <p>campo obligatorio</p> }
    </>
    

  return (
    <form className='form-container' onSubmit={handleSubmit(customSubmit)}>
      { inputs }
      <input className='button-input' type='submit' value='Empezar' />
    </form>
  )
}
