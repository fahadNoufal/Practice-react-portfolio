import React from 'react';
import profileMe from "../../assets/me-about.jpg"
import "./about.css"
import {GiSkills} from "react-icons/gi"
import {HiOutlineUserGroup} from "react-icons/hi"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"


const about = () => {
  return (
    <section id="about">
        <h5>Get to Know</h5>
        <h2>About Me</h2>
        <div className='about-container'>
          <div className='profile-container'>
            <div className='prf-pic'>
              <img src={profileMe} alt="profile pic"/>
            </div>
          </div>
          <div className="about-details-container">
            <div className='ab-box-container'>
            <div className='ab-box'>
              <GiSkills className='abt-icon'/>
              <h3>Experience</h3>
              <h6>1+ Years Practicing</h6>
              </div>

              <div className='ab-box'>
              <HiOutlineUserGroup  className='abt-icon'/>
              <h3>Clients</h3>
              <h6>200+ Worldwide</h6>
              </div>

              <div className='ab-box'>
              <AiOutlineFundProjectionScreen className='abt-icon'/>
              <h3>Projects</h3>
              <h6>30+ Completed</h6>
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quod excepturi officia sapiente assumenda vel quibusdam rem in nam recusandae possim
              us, magnam eligendi perspiciatis alias laborum, delectus eaque accusamus? Non.
            </p>
            <button className='primary-btn'>Let's Talk</button>
          </div>
        </div>
    </section>
    )
}

export default about