import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {ImLinkedin} from 'react-icons/im'
import {FaTwitterSquare} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <h2>KEEP EXPLORING</h2>
      <ul className='nav-items'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Service</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer-icons'>
        <div><FaFacebookSquare className='footer-icon'/></div>
        <div><ImLinkedin className='footer-icon'/></div>
        <div><FaTwitterSquare className='footer-icon'/></div>
      </div>

    </footer>
  )
}

export default Footer