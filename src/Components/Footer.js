import React from 'react';
import { IoStar } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{marginLeft:'30%',marginRight:'30%',marginTop:'10%'}}>
        <hr className="flex-grow-1" style={{ width: '5cm', maxWidth: '100%' }} /> 
        <div style={{ margin: '0 0.2rem' }}>
          <IoStar style={{ fontSize: '0.5rem' }} />
        </div>
        <div style={{ margin: '0 0.2rem' }}>
          <IoStar style={{ fontSize: '1.5rem' }} />
        </div>
        <div style={{ margin: '0 0.2rem' }}>
          <IoStar style={{ fontSize: '0.5rem' }} />
        </div>
        <hr className="flex-grow-1" style={{ width: '5cm', maxWidth: '100%' }} /> 
      </div>
      <h5 className="text-center mt-3 text-primary">"Every setback is a setup for a comeback."</h5>
      <p className="text-center mt-3 text-black" style={{ fontSize: '0.50rem' }}>© Copyright Latha H Natesh 2024</p>
      <div>
      <div style={{marginLeft:'25%',marginTop:'30px'}}>
      <p className="text-black "><IoIosMail color='#5078f2' size={'2rem'}/>&nbsp; lathahn2002@gmail.com</p>
      <div style={{marginTop:'10px'}}>
      <a href="https://github.com/Latha56" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-github" style={{ color: '#5078f2' ,fontSize: '1.5rem'}}></i></a>
      &nbsp;&nbsp;&nbsp;
      <a href="https://www.linkedin.com/in/latha-hn-196059287" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-linkedin" style={{ color: '#5078f2' ,fontSize: '1.5rem' }}></i></a></div>
      </div>
      </div>
    </>
  );
}

export default Footer;
