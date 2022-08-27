import { BsListNested } from "react-icons/bs";
import { FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

const ItemAncestor = ({ titleName, clickedAncestor }) => {
  return (
    <div className={`list__button list__button--click ${clickedAncestor ? 'arrow' : ''}`}>
      <BsListNested className='list__icon' />
      <a herf='#' className='nav__link'>{titleName}</a>
      <FiChevronRight className='list__arrow' />
    </div>
  )
};

const ItemChildrenList = ({ heightList, children }) => {
  return (
    <ul className='list__show' style={{ height: heightList }}>
      {children}
    </ul>
  )
};

const ItemChildren = ({ titleItem }) => {
  return (
    <li className='list__inside'>
      <a href='#' className='nav__link nav__link--inside'>{titleItem}</a>
    </li>  
  ) 
};

export const MenuItem = ({ height }) => {
  const [itemMenuClicked, setItemMenuClicked] = useState(false);
  const [itemMenuHeight, setItemMenuHeight] = useState('0');

  const menuItemClicked = () => {
    setItemMenuClicked(!itemMenuClicked);
    setItemMenuHeight(itemMenuClicked ? '0' : height);
  }

  const children = 
    <>
      <ItemChildren titleItem='Cuadrados Medios' /> 
      <ItemChildren titleItem='Productos Medios' />
      <ItemChildren titleItem='Multiplicador Constante' />
    </>
  
  return (
    <li className='list__item list__item--click' onClick={menuItemClicked}>
      <ItemAncestor titleName='NO CONGRUENCIALES' clickedAncestor={itemMenuClicked} />
      <ItemChildrenList heightList={itemMenuHeight} children={children} />
    </li>
  )
}
