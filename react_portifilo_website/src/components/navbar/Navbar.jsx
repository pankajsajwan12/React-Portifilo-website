import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { FiBook } from 'react-icons/fi'
import { MdOutlinePermContactCalendar } from 'react-icons/md'

import './navbar.css';
const Navbar = () => {
  const [acitveNav, setActiveNav]= useState('#')
  
  return (
    <nav>
      <a href="#"onClick={() => setActiveNav('#')} className={acitveNav === '#' ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={acitveNav === '#about' ? 'active' : ''} > <AiOutlineUser /> </a>
      <a href="#expericence" onClick={() => setActiveNav('#expericence')} className={acitveNav === '#expericence' ? 'active' : ''}> <FiBook /> </a>
      <a href="#contact"> <MdOutlinePermContactCalendar onClick={() => setActiveNav('#contact')} className={acitveNav === '#contact' ? 'active' : ''}/> </a>
    </nav>
  )
}

export default Navbar