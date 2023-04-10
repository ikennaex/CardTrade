import React from 'react'
import "./Navbar.css"
import { Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>CardTrade</h2>

        <div>
         <Link to= "/signin"> <button> Get Started</button> </Link>
        </div>
    </div>
  )
}

export default Navbar