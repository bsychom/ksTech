'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = (e : any) => {
    e.preventDefault();

    if(form.current)
    emailjs
      .sendForm('service_kepce0w', 'template_lj3z6iq', form.current, {
        publicKey: 'PPp09cJMr2Rxwbh38',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit" value="Send" className='bg-red-400 px-4 mx-4 cursor-pointer' >send</button>
    </form>
  );
};

export default ContactUs;