import React from 'react'
import "./experience.css"
import {MdVerified} from "react-icons/md"

const SkillBox = (props) => {
  return (
    <div className='skill-box'>
        <div class="skill-name">
            <MdVerified className='verified'/>
            <h4>{props.skill}</h4>
        </div>
        <h6>{props.level}</h6>
    
    </div>
  )
}

export default SkillBox