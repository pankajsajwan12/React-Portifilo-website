import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaDribbble } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/pankaj-singh-sajwan-6ba061224/" target="_blank">
            <BsLinkedin className="icon_size"/>
        </a>
        <a href="https://github.com/pankajsajwan12" target="_blank">
            <BsGithub  className="icon_size"/>
        </a>
        <a href="https://dribble.com" target="_blank">
            <FaDribbble  className="icon_size"/>
        </a>
        
    </div>
  )
}

export default HeaderSocials