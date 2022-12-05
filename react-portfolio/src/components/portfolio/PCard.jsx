import React from 'react'
import './portfolio.css'
const PCard = (props) => {
  return (
    <div className='p-card'>
        <div className='img-container'>
            <img src={props.coverImg} alt='portfolio'/>
        </div>
        <div>
            <p>{props.description}</p>
        </div>
        <div className='p-card-buttons'>
            <button className='outline-btn'>GitHun</button>
            <button className='primary-btn'>Live Demo</button>
        </div>
    </div>
  )
}

export default PCard