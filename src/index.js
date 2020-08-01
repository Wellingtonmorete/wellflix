import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import Pagina404 from './components/NotFound';
import CadastroCategoria from './pages/cadastro/Categoria';


// desafio fazer a pagina
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>,
      <Route path='/cadastro/video' component={CadastroVideo} exact/>,
      <Route path='/cadastro/categoria' component={CadastroCategoria } exact/>,
      
      <Route component={Pagina404} exact/>,{/* 404 */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


