import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { MenuItem } from './MenuItem';
import { ItemChildren } from './MenuItem';

import '../stylesheets/Menu.css';
import { API_BASE_URL } from '../environment';

const Data = () => {
  const childrenFirstMenu = 
    <>
      <ItemChildren titleItem='Cuadrados Medios' to={`${API_BASE_URL}/middleSquare?seed=x&times=x`} />
      <ItemChildren titleItem='Productos Medios' to={`${API_BASE_URL}`} />
      <ItemChildren titleItem='Multiplicador Constante' to={`${API_BASE_URL}`} />
    </>

  const firstMenuItem = <MenuItem height={'6.2em'} children={childrenFirstMenu} />

  const childrenSecondMenu = 
    <>
      <ItemChildren titleItem='Mixto' to={`${API_BASE_URL}`} />
      <ItemChildren titleItem='Multiplicativo' to={`${API_BASE_URL}`} />
      <ItemChildren titleItem='Aditivo' to={`${API_BASE_URL}`} />
      <ItemChildren titleItem='Cuadratico' to={`${API_BASE_URL}`} />
      <ItemChildren titleItem='Blum Blum y Shub' to={`${API_BASE_URL}`} />
    </>

  const secondMenuItem = <MenuItem height={'10.6em'} children={childrenSecondMenu}/>
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
