import React from 'react';
import './Header.css';
import header_img from '../../Assets/header.png'

const Header = () => {
  return (
    <div className='header'>
        <img src={header_img} alt="Affischen för KRIS-turnén"/>
        </div>
  )
}

export default Header