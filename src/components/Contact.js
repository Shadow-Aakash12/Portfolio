import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../components/Contact.css'

const Contact = () => {

  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9g98rei','template_b7schz5', form.current, {
      publicKey: 'GRTcJyCD4N224C5Qs',
    })
      .then((result) => {
        console.log(result.text)
        console.log("Mail Sent Successfully!!")
      },(error) => {
        console.log("Failed to Send...",error.text)
      },
    );
  }


  return (
    <div>
        <div className='header'>
            <a href="#" id='nav' className="logo"><span>C</span>ontact</a>
        </div>
        <br/><br/>
        <div className='contact_Info'>
        <div className='contact-form'>
          <form ref={form} className='contact-form' onSubmit={sendMail}>
            <label>Name</label>
            <input type='text' className='inbox' name='user_name'/>
            <label>E-mail</label>
            <input type='email' className='inbox' name='user_email'/>

            <label>Drop Your Message</label>
            <textarea className='desc' rows="10" cols="50" name='message'>
          
            </textarea>

            <button className='btn' type='submit' value="send">Send Mail</button>
          </form>
            
        </div>
        </div>
    </div>
  )
}

export default Contact
