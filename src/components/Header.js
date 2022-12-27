import React from 'react'

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
        </div>
        <div className='presentation'></div>
    </header>
  )
}
