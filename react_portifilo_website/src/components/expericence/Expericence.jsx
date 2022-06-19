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
            <h3>Fronted Development</h3>
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
                <small className="text-light">Intermediate</small>
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
                <h4>Chakra UI</h4>
                <small className="text-light">Basic</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>React</h4>
                <small className="text-light">Beginner</small>
                </div>
              </article>
            </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience_backend">
        <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>MongoDB</h4>
                <small className="text-light">Beginner</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill  className="experience_details-icon"/>
                <div>
                <h4>MySQL</h4>
                <small className="text-light">Beginner</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>Java</h4>
                <small className="text-light">Basic</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
                </div>
              </article>

            </div>
          </div>
      </div>
    </section>
  )
}

export default Expericence