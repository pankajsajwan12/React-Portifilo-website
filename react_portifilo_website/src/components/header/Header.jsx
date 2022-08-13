import React from 'react'
import './header.css'
import me2 from '../../my-assets/myPhoto.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>Hello I'm</h3>
        <h1>Pankaj Singh Sajwan</h1>
        <h3 className="text-light">Frontend Developer</h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me2} alt="Pankaj_singh_sajwan" className="meImg"/>
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header