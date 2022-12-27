import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';



export default function header() {
  return (
    <header>
        <div>
            <span className='logo'>Home Premium</span>
            <ul className='nav'>
              <li>About us</li>
              <li>Contacts</li>
              <li>Login</li>
            </ul>
            <FaShoppingCart className='shop-card-button' />
        </div>
        <div className='presentation'></div>
    </header>
  )
}

