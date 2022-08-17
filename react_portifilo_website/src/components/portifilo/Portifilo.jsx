import React from 'react'
import './portifilo.css'
import img from '../../my-assets/img.webp'
import img2 from '../../my-assets/img2.jpg'
import img3 from '../../my-assets/img3.jpg'




const Portifilo = () => {
  return (
    <section id="portifilo">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
              <img src={img} alt=""  className="portfolio-img"/>
          </div>
          <div className="protfolio_item-image_Tech_Stack">
          <p>KFC is online food order website</p>
          <h4>Tech-Stack: HTML,CSS, JAVASCRIPT, GIT</h4>
          </div>
          <div className="portfolio_item-cta">
          <a href="https://github.com/pankajsajwan12/ProjectFirst" className='btn'target="_blank">Github</a>
          <a href="https://polite-lamington-faa8d2.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
          
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
              <img src={img2} alt="" className="portfolio-img"/>
          </div>
          <div className="protfolio_item-image_Tech_Stack">
          <p >strawberrynet is online e-commerce beauty products website</p>
          <h4>Tech-Stack: HTML,CSS, JAVASCRIPT, GIT </h4>
          </div>
          <div className="portfolio_item-cta">
          <a href="https://github.com/KalashThakur/straberrynet" className='btn'>Github</a>
          <a href="https://imaginative-praline-24d6d4.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
              <img src={img3} alt="" className="portfolio-img"/>
          </div>
          <div className="protfolio_item-image_Tech_Stack">
          <p>zara is online e-commerce clothes  website</p>
          <h4>Tech-Stack: HTML,CSS, JAVASCRIPT, GIT </h4>
          </div>
          <div className="portfolio_item-cta">
          <a href="https://github.com/pankajsajwan12/zara-clone" className='btn'>Github</a>
          <a href="https://polite-lamington-faa8d2.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portifilo