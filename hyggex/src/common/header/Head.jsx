import React from 'react'
import logo from "../../components/images/logo.jpg"
import './Head.css'

const Head = () => {
  return (
    <div className='container'>
      <div className='naive'>
            <img src={logo} alt='' class="logowidth" />
            <ul>
                <li>Home</li>
                <li>Flashcard</li>
                <li>Contact</li>
                <li>FAQ</li>
            </ul>
            <button className='login'>Login</button>
      </div>
    </div>
  )
}

export default Head
