import React from 'react'
import '../styles/AboutSection.css'

import ScrollReveal from '../Animations/ScrollReveal'

function AboutSection() {
  return (
    <section className="aboutSection">
        <div className="aboutContent">
            <div className="aboutSubCont">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                >
                    I’m a Frontend Developer with a passion for creating smart, user-friendly web interfaces.
                    Skilled in React, JavaScript, and modern UI design.
                    I integrate AI/ML models into real-time web apps using Flask, Node.js, and APIs.
                </ScrollReveal>
            </div>
        </div>
       


    </section>
  )
}

export default AboutSection
