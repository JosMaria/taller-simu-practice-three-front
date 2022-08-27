import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { MenuItem } from './MenuItem';
import { ItemChildren } from './MenuItem';

import '../stylesheets/Menu.css';

const Data = () => {
  const childrenFirstMenu = 
    <>
      <ItemChildren titleItem='Cuadrados Medios' to={'#'} />
      <ItemChildren titleItem='Productos Medios' to={'#'} />
      <ItemChildren titleItem='Multiplicador Constante' to={'#'} />
    </>

  const firstMenuItem = <MenuItem height={'5.1em'} children={childrenFirstMenu} />

  const childrenSecondMenu = 
    <>
      <ItemChildren titleItem='Mixto' to={'#'} />
      <ItemChildren titleItem='Multiplicativo' to={'#'} />
      <ItemChildren titleItem='Aditivo' to={'#'} />
      <ItemChildren titleItem='Cuadratico' to={'#'} />
      <ItemChildren titleItem='Blum Blum y Shub' to={'#'} />
    </>

  const secondMenuItem = <MenuItem height={'8.6em'} children={childrenSecondMenu}/>
  return (
    <>
      {firstMenuItem}
      {secondMenuItem}
    </>
  )
}

export const Menu = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  
  return (
    <nav className='menu__container'>
      <div className='hamburguer' onClick={() => setMenuClicked(!menuClicked)}>
        <BiMenu className='icon' />
      </div>
      <ul className={`list ${menuClicked ? 'translate' : ''}`}>
        <Data />
      </ul>
    </nav>
  )
}
