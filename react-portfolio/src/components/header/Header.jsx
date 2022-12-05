import React from 'react'
import ME from "../../assets/me.png"
import "./header.css"
import {BsLinkedin} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";

const Header = () => {
  return (
    <header id='header'>
      <div className='name-detail'>
          <h5 className='hello'>Hello,I'm</h5>
          <h1 className='name'>Fahad Noufal</h1>
          <h5 className='job'>Full-time learning Student</h5>
      </div>  
      <div class="interact-btn">
        <button className='outline-btn'>Download CV</button>
        <button className='primary-btn'>Let's Talk</button>
      </div>
      <div className='profile-img'>
        <img src={ME} alt="profile" />
      </div>
      <div class="social-links">
        <a class="header-link" href="linkedin.com" target="_blank"><BsLinkedin/> </a>
        <a class="header-link" href="github.com" target="_blank"><FaGithubSquare/> </a>
        <a class="header-link" href="twitter.com" target="_blank"><FaTwitterSquare/> </a>
      </div>
      <a href='#footer' className='scroll-down'>SCROLL DOWN</a>
    </header>
  )
}

export default Header