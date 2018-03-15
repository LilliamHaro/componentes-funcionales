import React from 'react';
import Item from './item';

const Lista = ({cursos}) => (
   <ul>
   <div>vass</div>
       {
           cursos.map(curso => {
         <Item 
         curso={curso}/>
           })
       }
     </ul>
)

export default Lista;