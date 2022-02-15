import React, { useContext, useRef, useState } from 'react';
import "../contact/contact.css"
import Phone from "../../images/phone_2.png"
import Email from "../../images/email_2.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef()
    const[done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) =>{
      e.preventDefault();

      emailjs.sendForm('service_bozgj9f', 'template_lweqiaw', formRef.current, 'user_eGkpHWjR9gfmUgDBb0u72')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  
  return (
    <div className='c'>
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">What's Popping¿</h1>
                    <div className="c-info">
                      <div className="c-info-item">
                      <img src={Phone} alt="" className='c-icon'/>
                        +27 74 726 1744
                      </div>
                      <div className="c-info-item">
                        <img src={Email} alt="" className='c-icon'/>
                        Isikwejoshua@gmail.com
                      </div>
                    </div>
                </div>
                <div className="c-right">
                  <p className="c-desc">
                    <b>What do you need¿</b>. Get in touch. Always available for freelancing if the right oppportunity presents itself.
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "rgb(1, 1, 92)"}} type="text" placeholder='Name' name="user_name" />
                    <input style={{backgroundColor: darkMode && "rgb(1, 1, 92)"}} type="text" placeholder='Subject' name="user_subject" />
                    <input style={{backgroundColor: darkMode && "rgb(1, 1, 92)"}} type="text" placeholder='Email' name="user_email" />
                    <textarea id="" cols="30" rows="5" style={{backgroundColor: darkMode && "rgb(1, 1, 92)"}} placeholder='Message' name= "message"></textarea>
                    <button>Submit</button>
                    {done && "Message has been sent :)"}
                  </form>
                </div>
            </div>
    </div>
  )
}

export default Contact