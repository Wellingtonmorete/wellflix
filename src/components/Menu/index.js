import React from 'react';
import Logo from '../../assets/img/Logo.png'
import Button from '../Button';


import './menu.css'
// todo componente deve ser maiusculo
function Menu() {
    return(
        <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="wellflix"></img>
        </a>
        <Button as="a" className="ButtonLink" href="/">
          Novo Vídeo
        </Button>
      </nav>
    );
}
export default Menu