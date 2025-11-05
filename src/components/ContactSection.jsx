import React from 'react'
import '../styles/ContactSection.css'
export default function ContactSection() {
  return (
    <section className='contSection'>
      <div className="contMainBox">
        <div className="header">
          <h1>Contact with me sizzle your project.</h1>
          <p>Feel free to contant as an techincal friend of yours</p>
        </div>

          <div className="details">
            <div className="name">
              <input type="text" placeholder='Name'/>
            </div>
            <div className="email">
              <input type="email" placeholder='Email'/>
            </div>
          </div>

          <div className="desc">
            <textarea type="text" placeholder='Work Description...' />
          </div>
          <div className="subButton">
            <button type="submit">Submit</button>
          </div>
      </div>
    </section>
  )
}
