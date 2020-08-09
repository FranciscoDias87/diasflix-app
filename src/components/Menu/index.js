//colocando a imagem da logo
import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

//import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className='Menu'> 
      <a href='/'>
        <img className='Logo' src={Logo} alt='Diasflix'/>      
      </a>
      <Button as="a"  href='/'>
        Novo Video
      </Button>

    </nav>  
  );
}

export default Menu;