import React from 'react'
import '../styles/ExperienceSection.css'
import { Briefcase, Code, Cpu, GraduationCap } from 'lucide-react'

function ExperienceSection() {
  return (
    <section className="expSection">

      {/* Main Title Card */}
      <div className="expMainCont">
        <h1>Wanna See My Experience?</h1>
      </div>

      {/* Internship / Project 1 */}
      <div className="expSubCont1">
        <div className="expContent">
          <div className="expIcon"><Briefcase size={40} /></div>
          <div className="expDetails">
            <h3>AIDA Association</h3>
            <p>
              Developer — Built and optimized responsive React interfaces, integrated APIs,
              improved component performance, and contributed to scalable frontend
              architecture using modern JavaScript and UI best practices.
            </p>
            <span className="expDuration">June 2024 – Aug 2024</span>

          </div>
        </div>
      </div>

      {/* Project / Research Experience */}
      <div className="expSubCont2">
        <div className="expContent">
          <div className="expIcon"><Cpu size={40} /></div>
          <div className="expDetails">
           <h3>Freelancer</h3>
              <p>
                Designed and developed AI-integrated web applications using React, Python, and modern  
                machine learning frameworks. Built responsive UIs, optimized workflows, and delivered  
                production-ready solutions for multiple clients.
              </p>
            <span className="expDuration">2024 – 2025</span>
          </div>
        </div>
      </div>

      {/* Research / Paper Publication */}
       <div className="expSubCont3">
        <div className="expContent">
          <div className="expIcon"><Code size={40} /></div>
          <div className="expDetails">
            <h3>Frontend Developer — Personal Projects</h3>
            <p>
              Designed and developed responsive web apps using React, Tailwind, and Flask backend integration.
              Focused on clean UI and optimal performance.
            </p>
            <span className="expDuration">2023 – Present</span>
          </div>
        </div>
      </div>

      {/* Extra / Development Role */}
     

    </section>
  )
}

export default ExperienceSection
