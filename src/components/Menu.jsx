import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { BsListNested } from "react-icons/bs";
import { FiChevronRight } from 'react-icons/fi';

import '../stylesheets/Menu.css';

export const Menu = () => {
  const [itemCongruential, setItemCongruential] = useState({ clicked: false, height: '0' });
  const [itemNonCongruential, setItemNonCongruential] = useState({ clicked: false, height: '0' });
  const [menuClicked, setMenuClicked] = useState(false);
  
  const congruentialClicked = () => {
    const updated = {}
    updated.clicked = !itemCongruential.clicked;
    updated.height = itemCongruential.clicked ? '0' : '8.5em';
    setItemCongruential(updated);
  }

  const nonCongruentialClicked = () => {
    const updated = {}
    updated.clicked = !itemNonCongruential.clicked;
    updated.height = itemNonCongruential.clicked ? '0' : '3.6em';
    setItemNonCongruential(updated);
  }

  return (
    <nav className='menu__container'>
      <div className='hamburguer' onClick={() => setMenuClicked(!menuClicked)}>
        <BiMenu className='icon' />
      </div>
      <ul className={`list ${menuClicked ? 'translate' : ''}`}>
        <li className='list__item list__item--click' onClick={nonCongruentialClicked}>
          <div className={`list__button list__button--click ${itemNonCongruential.clicked ? 'arrow' : ''}`}>
            <BsListNested className='list__icon' />
            <a herf='#' className='nav__link'>NO CONGRUENCIALES</a>
            <FiChevronRight className='list__arrow' />
          </div>
          <ul className='list__show' style={{ height: itemNonCongruential.height }}>
            <li className='list__inside'>
              <a href='#' className='nav__link nav__link--inside'>Cuadrados Medios</a>
            </li>
            <li className='list__inside'>
              <a href='#' className='nav__link nav__link--inside'>Productos Medios</a>
            </li>
            <li className='list__inside'>
              <a href='#' className='nav__link nav__link--inside'>Multiplicador Constante</a>
            </li>
          </ul>
        </li>
        <li className='list__item list__item--click' onClick={congruentialClicked}>
          <div className={`list__button list__button--click ${itemCongruential.clicked ? 'arrow' : ''}`}>
            <BsListNested className='list__icon' />
            <a herf='#' className='nav__link'>CONGRUENCIALES</a>
            <FiChevronRight className='list__arrow' />
          </div>
          <ul className='list__show' style={{ height: itemCongruential.height }}>
            <li className='list__inside'>
              <a href='#' className='nav__link nav__link--inside'>Mixto</a>
            </li>
            <li className='list__inside'>
              <a href='#' className='nav__link nav__link--inside'>Multiplicativo</a>
            </li>
            <li className='list__inside'>
              <a href='#' className='nav__link nav__link--inside'>Aditivo</a>
            </li>
            <li className='list__inside'>
              <a href='#' className='nav__link nav__link--inside'>Cuadratico</a>
            </li>
            <li className='list__inside'>
              <a href='#' className='nav__link nav__link--inside'>Blum Blum y Shub</a>
            </li>
          </ul>
        </li>
      </ul>
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
