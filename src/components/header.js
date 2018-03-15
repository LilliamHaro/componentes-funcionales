import React, { Component } from 'react';
import PropTypes from 'prop-types'


const Header = ({title, src, paragraph}) => (

	<header>
   <h1>{title}</h1>
   <img src={src}/>
   <p>{paragraph}</p>
   </header>

)

Header.propType = {
	title : PropTypes.string.isRequired,
	url : PropTypes.string.isRequired,
	paragraph : PropTypes.string.isRequired,
}

export default Header