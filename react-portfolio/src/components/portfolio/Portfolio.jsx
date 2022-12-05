import React from 'react'
import PCard from './PCard'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section >
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className='card-container'>
          <PCard 
            description ="Crypto Currency Dashboard & Financial Visualization"
            coverImg={img1}
          />
          <PCard
            coverImg={img2}
            description='Charts templates & infographics in Figma'
          />
          <PCard
            coverImg={img3}
            description='Figma dashboard UI kit for data design web apps'
          /> 
          <PCard
            coverImg={img4}
            description='Maintaininf tasjs and tracking progress'
          />
          <PCard
            coverImg={img5}
            description='Charts templates &infographics in Figma'
          />
          <PCard
            coverImg={img6}
            description='Charts templates & infographics in Figma'
          /> 
      </div>
    </section>
  )
}

export default Portfolio