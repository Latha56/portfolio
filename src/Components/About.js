import React from 'react'
import {useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';

function About() {
  const navigate = useNavigate();
  const display = () => {
    navigate('/Details_Aboutme'); 
  };

  const button = {
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    justifyContent: 'center',
    backgroundColor: '#5078f2',
    height: '50px',
    width: '180px',
    textDecoration: 'none',
    fontSize: '18px',
  };
  return (
    <>
    <div className="position-relative d-flex align-items-center min-vh-100" style={{ gap: '5%',  marginLeft:'30%'}}>
      <div  style={{ fontSize: '1.5rem'}}>
      <p style={{fontSize: '3.5rem',color:'black',textshadow: '2px 2px 4px rgba(255, 255, 255, 0.9)'}}>
       Hi.. I'm Latha HN</p>
      <p class=" mb-2 text-white">Passionate computer science engineer | Recent graduate </p>
      <a href="https://github.com/Latha56" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-github" style={{ color: 'white' }}></i></a>
      &nbsp;&nbsp;&nbsp;
      <a href="https://www.linkedin.com/in/latha-hn-196059287" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-linkedin" style={{ color: 'white' }}></i></a> 
      <div style={{paddingTop:'10%'}}><button style={button} onClick={display}>About Me &nbsp;
        <FaArrowAltCircleRight color="white" size={24} /></button></div>
      </div>
      </div>
  </>
  )
}

export default About
