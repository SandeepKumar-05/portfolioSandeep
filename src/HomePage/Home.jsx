import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import ExperienceSection from '../components/ExperienceSection'
import ContactSection from '../components/ContactSection'
import ConnectSection from '../components/ConnectSection'
import SkillSection from '../components/SkillSection'


function Home() {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <SkillSection/>
      <ProjectSection/>
      <ExperienceSection/>
      <ContactSection/>
      <ConnectSection/>
    </div>
  )
}

export default Home
