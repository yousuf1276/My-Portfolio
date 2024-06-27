import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gk27jsg', 'template_k6zlfmi', form.current,'lLkl58ijWTZtqCjgs')
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact' className='contact container'>
      <h2 className="text-center">Contact</h2>
      <p className="text-center">Fill out the form and I will get back to you as soon as possible!</p>
      <div className='row'>
        <div className='row justify-content-center card border border-dark'>
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Your Name' required/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder='example@gamil.com' pattern="^[^0-9][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
 required/>
      <label>Message</label>
      <textarea name="message" placeholder='Convey your concern' required/>
      <input type="text" name="company" placeholder='company' required/>

      <button type="submit">Send</button>
    </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
