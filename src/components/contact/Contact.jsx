import React, { useRef } from 'react';
import "../contact/contact.css"
import Phone from "../../images/phone_2.png"
import Email from "../../images/email_2.png"

const Contact = () => {
    const formRef = useRef()

    const handleSubmit =(e)=>{
      e.preventDefault()
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
                    <input type="text" placeholder='Name' name="user_name" />
                    <input type="text" placeholder='Sub' name="user_subject" />
                    <input type="text" placeholder='Email' name="user_email" />
                    <textarea id="" cols="30" rows="5" placeholder='Message' name= "message"></textarea>
                    <button>Submit</button>
                  </form>
                </div>
            </div>
    </div>
  )
}

export default Contact