import React from 'react'
import '../styles/ConnectSection.css'
import { Instagram, Github, Linkedin, Mail } from "lucide-react";
function ConnectSection() {
  return (
    <section className='connectSection'>
        <div className='cntContainer'>
            <div className="mainCntCard">
                <h1>Let's Connect and Chat</h1>
            </div>
            <div className="subCntCard">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link instagram"
      >
        <Instagram className="icon" />
        <span>Instagram</span>
      </a>

      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link github"
      >
        <Github className="icon" />
        <span>GitHub</span>
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link linkedin"
      >
        <Linkedin className="icon" />
        <span>LinkedIn</span>
      </a>

      <a
        href="mailto:sandeepkumarps005@gmail.com"
        className="social-link email"
      >
        <Mail className="icon" />
        <span>Email</span>
      </a>
    </div>
        </div>
        <div className='cntContact'>
          <h1>Sandeep</h1>
          <p>2025</p>
          <button>Book a call</button>

        </div>
    </section>
  )
}

export default ConnectSection
