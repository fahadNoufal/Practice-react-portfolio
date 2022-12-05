import React from 'react'
import {TbPoint} from "react-icons/tb"
import './services.css'

const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Service</h2>
      <div className='service-container'>
        <div className='services-box'>
          <div className='service-list-head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul>
            <li><TbPoint className='bullet'/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint className='bullet'/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint className='bullet'/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint className='bullet'/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint className='bullet'/>Lorem ipsum dolor sit omet consectetur.</li>
          </ul>
        </div>
        <div className='services-box'>
          <div className='service-list-head'>
            <h3>Web Development</h3>
          </div>
          <ul>
            <li><TbPoint/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint/>Lorem ipsum dolor sit omet consectetur.</li>
          </ul>
        </div>
        <div className='services-box'>
          <div className='service-list-head'>
            <h3>Content Creation</h3>
          </div>
          <ul>
            <li><TbPoint/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint/>Lorem ipsum dolor sit omet consectetur.</li>
            <li><TbPoint/>Lorem ipsum dolor sit omet consectetur.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services