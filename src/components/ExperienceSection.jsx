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
            <h3>AI & ML Intern — Aicrowd</h3>
            <p>
              Developed deep learning models for image classification and text analytics.
              Improved accuracy through fine-tuning and data preprocessing.
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
            <h3>Final Year Project — ISL Converter</h3>
            <p>
              Built a real-time <b>Indian Sign Language Converter</b> using YOLOv8, Python, and React.
              Enabled bidirectional sign-to-text/speech and text/speech-to-sign translation.
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
