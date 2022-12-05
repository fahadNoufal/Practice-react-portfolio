import React from 'react'
import SkillBox from "./SkillBox"
import "./experience.css"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='experience-container'>
        <div className='front-end development'>
          <h3>Frontend Development</h3>
          <div className='skill-list'>
              <div className='column1'>
                <SkillBox 
                  skill="HTML"
                  level="Experienced"
                />
                <SkillBox 
                  skill="JavaScript"
                  level="Experienced"
                />
                <SkillBox 
                  skill="Tailwind"
                  level="Experienced"
                />
              </div>
              <div className='column2'>
                <SkillBox 
                  skill="css"
                  level="Intermediate"
                />
                <SkillBox 
                  skill="Bootstrap"
                  level="Experienced"
                />
                <SkillBox 
                  skill="React"
                  level="Experienced"
                />
              </div>
            </div>
          </div>
          <div className='back-end development'>
            <h3>Backend Development</h3>

            <div className='skill-list'>
              <div className='column1'>
                <SkillBox 
                  skill="Node JS"
                  level="Intermediate"
                />
                <SkillBox 
                  skill="PHP"
                  level="Basic"
                />
                <SkillBox 
                  skill="Python"
                  level="Intermediate"
                />
              </div>
              <div className='column2'>
                <SkillBox 
                  skill="MonfoDB"
                  level="Experienced"
                />
                <SkillBox 
                  skill="BySQL"
                  level="Intermediate"
                />
              </div>
            </div>
          </div>
        </div>
     
    </section>
  )
}

export default Experience