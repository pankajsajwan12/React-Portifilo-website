import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zxyfqmx', 'service_zxyfqmx', form.current, 'cncoa7sdD8pJuxoFr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option"> 
             <MdEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>pankajsinghsajwan99@gmai.com</h5>
            <a href="mailto:pankajsinghsajwan99@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact_option"> 
             <RiMessengerLine className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>Pankaj Sajwan</h5>
            <a href="https://m.me/profile.php?id=100009194862711" target="_blank">Send a message</a>
          </article>

          <article className="contact_option"> 
             <FaWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>8851505898</h5>
            <a href="https://api/whatsapp.com/send?phone=+918851505898" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name " required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact