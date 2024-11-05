import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact_img from '../assets/image/contact-img.png'
import './Contact.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_70uzqbb', 'template_2e9przj', form.current, {
        publicKey: '_kubv8joNg6IbZ6Oc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
 
        //   // สร้าง div element สำหรับแสดง Popup
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.textContent = 'Send message success';
        document.body.appendChild(popup);

        // ให้ Popup หายไปหลังจาก 3 วินาที
        setTimeout(() => {
          popup.remove();
        }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="section-contact-con" id='contact'>
      <h1>Contact</h1>
      <p>Send message to email</p>
      <div className="contact-items-con">
        <div className="img-con">
          <img src={contact_img} alt="" />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h2>Contact</h2>
          <label>Name</label><br />
          <input type="text" name="from_name" required placeholder='input your name' /><br />
          <label>Email</label><br />
          <input type="email" name="from_email" required placeholder='input your email'/><br />
          <label>Message</label><br />
          <textarea name="message" required placeholder='typing message...'/><br />
          <input type="submit" value="Submit" required />
        </form>
      </div>
    </div>

  );
};
