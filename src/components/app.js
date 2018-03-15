
// si va a ser funcional
import React from 'react';
import Header from './header';
import Section from './section';


const datos = {
  cursos:['react', 'rutas'],
  //notas: [0,1,2] -- contenido= {datos.cursos}
}

const App = () => (
  <div >
   <Header
   title= 'Esto es mi spa de react'
   src= 'react.png'
   paragraph = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
   />
   <Section
   texto = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
   arrayCursos= {datos.cursos} 
   />
  </div>
)

export default App
