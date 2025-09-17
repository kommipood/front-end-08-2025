import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z6kbz1p', 'template_8f48qpq', form.current, {
        publicKey: 'IPXjzGY-3izBdVCG-',
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
      <input type="text" name="from_name" /><br></br>
      <label>Email</label>
      <input type="email" name="from_email" /><br></br>
      <label>Message</label>
      <textarea name="message" /><br></br>
      <input type="range" name="rating" min={1} max={5}/><br></br>
      <input type="submit" value="Send"/><br></br>
    </form>
  );
};