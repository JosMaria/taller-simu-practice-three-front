import { BiMenu } from 'react-icons/bi';

import '../stylesheets/Menu.css';

export const Menu = () => {
  return (
    <nav className='menu-container'>
      <div className='hamburguer'>
        <BiMenu className='icon' />
      </div>
    </nav>
  )
}

/* 
  GENEREADORES NO CONGRUENCIALES
    ALGORITMO DE CUADRADOS MEDIOS
    ALGORITMO DE PRODUCTOS MEDIOS
    ''      ''    MULTIPLICADOR CONSTANTE

  GENERADORES CONGRUENCIALES
    CONGRUENCIAL MIXTO
    CONGRUENCIAL MULTIPLICATIVO
    CONGRUENCIAL ADITIVO
    CUADRATICO
    BLUM BLUM Y SHUB

*/
