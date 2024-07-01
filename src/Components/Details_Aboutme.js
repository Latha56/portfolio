import React, { useState, useEffect } from 'react';
import about from '../assests/about_me.gif';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { MdCamera } from 'react-icons/md';

function Details_Aboutme() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="position-relative d-flex align-items-center min-vh-100" style={{ marginTop: '30px', marginLeft: '100px', marginRight: '100px' }}>
      <div className={`d-flex align-items-center mb-4 fadeIn ${animated ? 'animated' : ''}`}>
        <div className="rounded-circle overflow-hidden" style={{ width: '200px', height: '150px' }}>
          <img src={about} className="img-fluid rounded-circle" alt="me" style={{ objectFit: 'cover' }} />
        </div>
        <div className="ps-3">
          <h4 className="mb-2 text-white">"Life is a journey, not a destination."</h4>
        </div>
      </div>
      <div className={`p-3 mb-4 bg-light rounded shadow-sm fadeIn ${animated ? 'animated' : ''}`} style={{ animationDelay: '0.2s' }}>
        <p className="mb-2 text-dark">
          <FaGraduationCap size={50} className="me-3" />
          Hey there! I'm Latha who enjoys singing, exploring new languages, diving into books,
          and expressing my thoughts through sketches.
        </p>
        <p className="mb-2 text-dark">
          I recently graduated with a Bachelor of Engineering (CSE department), and my academic background
          has equipped me with a solid foundation in computer science principles and practices. I applied
          my programming knowledge to create innovative projects, soft skills, and certifications that I've
          acquired along the way.
        </p>
      </div>
      <div className={`p-3 mb-4 bg-light rounded shadow-sm fadeIn ${animated ? 'animated' : ''}`} style={{ marginLeft: '10px', animationDelay: '0.4s' }}>
        <p className="mb-2 text-dark">
          <MdOutlineCastForEducation size={25} className="me-3" />
          I've had the opportunity to intern at Pearlarc company Bangalore, where I delved
          into <span style={{ color: 'blue' }}>React</span>, and at Capgemini, where I worked with the <span style={{ color: 'blue' }}>.Net Framework</span>. These experiences have enriched my
          technical skills and problem-solving abilities.
        </p>
      </div>
      <div className={`p-3 mb-4 bg-light rounded shadow-sm fadeIn ${animated ? 'animated' : ''}`} style={{ marginLeft: '10px', animationDelay: '0.6s' }}>
        <p className="mb-2 text-dark">
          <MdCamera size={25} className="me-3" />
          Apart from my programming prowess, I'm fluent in English, Hindi, and Kannada. When I'm not coding, you can find me
          singing (completed Shastriya Sangeetha Junior), delving into books, exploring new languages, and sketching my thoughts.
        </p>
      </div>
    </div>
  );
}

export default Details_Aboutme;
