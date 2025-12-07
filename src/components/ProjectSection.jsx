import React from 'react'
import '../styles/ProjectSection.css'
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import {Link} from 'react-router-dom'
function ProjectSection() {
  return (
    <section className="projectSection">
        <div className="mainCont">
            <h1>My Works</h1>
            <Link to='/projects'>See More</Link>
        </div>
        <div className="sideCont">
            <div className="Cards1">
              <div className="card1Section1">
                <img src={Project1} alt="img" />
              </div>
              <div className="card1Section2">
                <p>AIDA Project - AIDA is an assososation for the department of AD</p>
              </div>
              <div className="projectLink1">
                 <a href="https://aidajecc.in/">vist website</a>
              </div>
            </div>
            <div className="Cards2">
              <div className="card2Section1">
                <img src={Project2} alt="img" />
              </div>
              <div className="card2Section2">
                <p>Signfy - An website for the duaf and mute communittee</p>
              </div>
              <div className="projectLink2">
                 <a href="">vist website</a>
              </div>
            </div>
            {/* <div className="Cards3"></div>
            <div className="Cards4"></div> */}
        </div>
    </section>
  )
}

export default ProjectSection
