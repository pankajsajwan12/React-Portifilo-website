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
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/pankajsajwan12/ProjectFirst" className='btn'target="_blank">Github</a>
          <a href="https://polite-lamington-faa8d2.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
          
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
              <img src={img2} alt="" className="portfolio-img"/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/KalashThakur/straberrynet" className='btn'>Github</a>
          <a href="https://imaginative-praline-24d6d4.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
              <img src={img3} alt="" className="portfolio-img"/>
          </div>
          <h3>This is a portfolio item title</h3>
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