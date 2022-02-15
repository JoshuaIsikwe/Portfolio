import React from 'react';
import "./intro.css"
import Me from "../../images/Closeup.jpg"

const Intro = () => {
  return <div className='i'>
       <div className='i-left'>
           <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, my name is</h2>
                    <h1 className='i-name'>Joshua Isikwe</h1>
                <div className="title">
                    <div className="title-wrapper">
                        <div className="title-item">Web developer</div>
                        <div className="title-item">Product Manager</div>
                        <div className="title-item">Business Analyst</div>
                        <div className="title-item">UI/UX Designer</div>
                    </div>
                </div>
           <div className="i-description">I create custom and modern sites that suit customers and their company ideals</div>
            </div>
        </div>

            <div className='i-right'>
                <div className="i-background">   </div>
                <img src={Me} alt="Joshua Isikwe" className='i-profile'/>
            </div>
        </div>;
            
};

export default Intro;
