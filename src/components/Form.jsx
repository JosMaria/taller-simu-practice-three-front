import { useForm } from 'react-hook-form';

import '../stylesheets/Form.css';

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const customSubmit = (data) => {
    console.log(data);
  }

  return (
    <form className='form-container' onSubmit={handleSubmit(customSubmit)}>
      <div>
        <label>Semilla</label>
        <input type='text' {...register('seed', {
          required: true
        })} />
        { errors.seed?.type === 'required' && <p>La semilla es requerida</p> }
      </div>
      <div>
        <label>Número de iteraciones</label>
        <input type='text' {...register('times', { 
          required: true 
        })} />
        { errors.times?.type === 'required' && <p>Numero de iteraciones requerida</p>}
      </div>
      <input type='submit' value='Empezar' />
    </form>
  )
}
