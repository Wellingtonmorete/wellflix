import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'
import Button from '../Button';



import './menu.css'
// todo componente deve ser maiusculo
function Menu() {
    return(
        <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="wellflix"></img>
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/Video">
          Novo Vídeo
        </Button>
      </nav>
    );
}
export default Menu