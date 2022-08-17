import React from 'react'
import './expericence.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Expericence = () => {
  return (
    <section id="expericence">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_fronted">
            <h3>TECHNICAL SKILL</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>Git & GitHub</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience_backend">
        <h3>FRAMEWORK & LIBRARY</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>Chakra UI</h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill  className="experience_details-icon"/>
                <div>
                <h4>Material UI</h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>

         <div className="experience_backend">
        <h3>SOFT SKILLS</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>Adaptability</h4>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill  className="experience_details-icon"/>
                <div>
                <h4>Teamwork</h4>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>Problem-Solving</h4>
                </div>
              </article>

            </div>
          </div> 
      </div>
    </section>
  )
}

export default Expericence