import React from 'react';
import "../about/about.css"
import Pic from "../../images/Tanjiro.jpg"

const About = () => {
    
  return <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://i.pinimg.com/474x/7e/b4/a0/7eb4a04ead5153f78a3f8b37af774ece.jpg" className='a-image' alt="" />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About me</h1>
                <p className='a-sub'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem temporibus mollitia nesciunt!</p>
                <p className='a-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae sequi veniam saepe optio reiciendis aut, pariatur recusandae aperiam animi repudiandae delectus esse neque accusamus, perspiciatis quibusdam consequuntur fugiat commodi.</p>
                <div className="a-award">
                    <img src={Pic} alt="" className='a-award-image' />
                    <div className="a-award-text">
                        <h4 className='a-award-title'> Software Design as an Abstraction</h4>
                        <p>University of Colorado System. September 2020</p>
                        <h4 className='a-award-title'> Devops AWS</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor?</p>
                    </div>
                </div>
            </div>
        </div>;
};

export default About;
