import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import ExperienceSection from '../components/ExperienceSection'


function Home() {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <ProjectSection/>
      <ExperienceSection/>
    </div>
  )
}

export default Home
