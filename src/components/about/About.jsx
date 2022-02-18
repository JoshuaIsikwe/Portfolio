import React from 'react';
import "../about/about.css"
import Pic from "../../images/certificate.jpg"

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
                <p className='a-sub'>I am an Honors Graduate of Information systems from the University of Johannesburg.</p>
                <p className='a-desc'> I have been working in both finance and IT spaces for 3 years and have gained a lot of experience. Through that I have been tasked with reponsibilities where I have used agile development, project managment, research. I am also accustomed to leading teams to use scrum frameworks to achieve desired goal/product.</p>
                <div className="a-award">
                    <img src={Pic} alt="" className='a-award-image' />
                    <div className="a-award-text">
                        <h4 className='a-award-title'> Software Design as an Abstraction</h4>
                        <p>University of Colorado System. September 2020</p>
                        <h4 className='a-award-title'> DevOps on AWS Specialization</h4>
                        <p>Amazon Web Services. February 2022</p>
                    </div>
                </div>
            </div>
        </div>;
};

export default About;
