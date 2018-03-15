// importanto la libreria de react de la carpeta react en el node_modules esto no es react nativo que es para mobile, lo estamos usando para la web
// si vas a usar react orientado a objetos vas a invocar tambien {component} junto a react
// nuestra aplicacion va a ser funcional 
import React from 'react';
// importanto una funcion del paquete react dom 
import { render } from 'react-dom';
import App from './components/app';
// tiene dos parametros su elemento padrea(viene de los componentes) y el elemento del dom en el que se va mostrar osea el div del index html
render(
  <App />,
  document.getElementById('root')
)
