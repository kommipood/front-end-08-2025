import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Rating, TextField } from "@mui/material"


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
      <br></br>
      <TextField label="Name" variant="outlined" name="from_name"/>
      <br></br><br></br>
      <br></br>
      <TextField label="E-mail" variant="outlined" name="from_email"/>
      <br></br><br></br>
      <br></br>
      <TextField label="Message" variant="outlined" name="from_message"/>
      <br></br><br></br>
      <Rating name="rating" /><br></br><br></br>
      {/* <input type="range" name="rating" min={1} max={5}/><br></br><br></br> */}
      <Button type="submit" variant="contained">Send</Button>
    </form>
  );
};