import React from 'react'
import '../styles/SkillSection.css'
import { Code, Brain, Layout, BarChart3 } from 'lucide-react'

function SkillSection() {
  return (
    <section className='skillSection'>
      <div className="aboutSkills">
        <div className="skillHeading">
          <h1>How I Can <br /> Assist You</h1>
        </div>

        <div className="skillContents">
          
        
           <div className="skill1">
            <div>
              <Code size={40} strokeWidth={2.5} />
              <h3>Frontend Development</h3>
              <p>
                Building responsive and high-performance web applications using React, HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>

          <div className="skill2">
            <div>
              <Layout size={40} strokeWidth={2.5} />
              <h3>UI / UX Design</h3>
              <p>
                Crafting intuitive, engaging, and user-friendly interfaces using modern design systems.
                Focused on aesthetics, usability, and accessibility.
              </p>
            </div>
          </div>

       
          <div className="skill3">
            <div>
              <Brain size={40} strokeWidth={2.5} />
              <h3>AI / ML Developer</h3>
              <p>
                Implementing machine learning models for real-time and analytical use cases — from data preprocessing
                to model deployment using Python, TensorFlow, and YOLOv8.
              </p>
            </div>
          </div>

          <div className="skill4">
            <div>
              <BarChart3 size={40} strokeWidth={2.5} />
              <h3>Data Analysis</h3>
              <p>
                Extracting insights from data using Pandas, Matplotlib, and Power BI — turning raw numbers into meaningful stories.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default SkillSection
