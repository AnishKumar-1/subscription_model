import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div className='NavBar'>
      <Link to='/'>Home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact" >contact</Link>
      <Link to="/plans">Plans and price</Link>
    </div>
  )
}

export default NavBar
