import React from 'react'
import './about.css'
import me from '../../my-assets/me.png'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { HiOutlineFolderOpen } from 'react-icons/hi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
             <img src={me} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAward  className="about_icon"/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about_card">
              <FiUsers  className="about_icon"/>
              <h5>Project</h5>
              <small>3 + more</small>
            </article>

            <article className="about_card">
              <HiOutlineFolderOpen  className="about_icon"/>
              <h5>Project</h5>
              <small>3 + more</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quia eum aut laborum labore, quam doloribus explicabo a corrupti fugiat consequuntur, deleniti assumenda possimus. Ut eveniet quidem consequatur impedit odio.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About