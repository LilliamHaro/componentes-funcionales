import React, { Component } from 'react';
import Lista from './lista'


const Section = ({texto, arrayCursos}) => (
	<section>
	<p>{texto}</p>
      <Lista
      cursos = {arrayCursos} />
   </section>)

export default Section