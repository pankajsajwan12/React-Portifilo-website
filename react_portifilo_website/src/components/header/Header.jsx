import React from 'react'
import './header.css'
import me2 from '../../my-assets/myPhoto.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>Hy 👋 I'm</h3>
        <h1 className="myName">Pankaj Singh Sajwan</h1>
        <h3 className="text-light">Frontend Developer</h3>
        <CTA />
        <HeaderSocials />
        <div className="myPhoto">
          <img src={me2} alt="Pankaj_singh_sajwan" className="myImg"/>
        </div>
        <div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header