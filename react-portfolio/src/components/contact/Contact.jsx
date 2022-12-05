import React from 'react'
import "./contact.css"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineMessage} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='contact-container'>
        <div className='contact-boxes'>
          <div className='contact-box'>
            <div ><AiOutlineMail className='contact-logo'/></div>
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href=" ">Send a messafe</a>
          </div>
          <div className='contact-box'>
            <div ><AiOutlineMessage className='contact-logo'/></div>
            <h4>Messager</h4>
            <h5>Fahad_</h5>
            <a href=" ">Send a messafe</a>
          </div>
          <div className='contact-box'>
            <div ><BsWhatsapp className='contact-logo'/></div>
            <h4>WhatsApp</h4>
            <h5>+91 8590988835</h5>
            <a href=" ">Send a messafe</a>
          </div>
        </div>
        
        <form action="" className='form-container'>
          <input name="name" type='text' placeholder='Your Full Name'/>
          <input name="email" type='email' placeholder='Your Email' />
          <textarea name='message' placeholder='Your Message'/>
          <button className='primary-btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact