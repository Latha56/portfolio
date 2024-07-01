import React from 'react';
import { RiRobot3Fill } from "react-icons/ri";
import { FcAutomotive } from "react-icons/fc";
import { GiSpectacles } from "react-icons/gi";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import web from '../assests/web.png'
import ai from '../assests/ai.png'
import dbms from '../assests/dbms.png'

function Work() {
  
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
  const handleClick = () => {
    window.open('https://github.com/Latha56/lens_shop', '_blank');
  };
  const handleClick1 = () => {
    window.open('https://github.com/Latha56/Simple-Music-Player', '_blank');
  };

  return (
    <div style={{flexDirection: 'column',alignItems: 'center',paddingTop: '5%',}} className="position-relative d-flex min-vh-100">
      <div className="mb-2 text-white" style={{ paddingBottom: '100px' }}>
        <h1>Academic and Personal Projects</h1>
        <p>Project has been a stepping stone in my learning journey</p>
      </div>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4">
            <img src={web} alt="Project One" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <div>
                <h2><GiSpectacles size={50} className="me-3"/>Internship project: Lens Shop</h2>
                <p>Lens Cart is a fully functional e-commerce website designed using the React.js framework and CSS. 
                This project was developed using Visual Studio Code and does not have a backend server; instead, 
                it utilizes localStorage to manage user login details.</p>
                <button style={button} onClick={handleClick}>Get project <FaArrowAltCircleRight color="white" size={24} /></button>
            </div>
            <div style={{paddingTop:'5%'}}>
            <h2><FaHeadphonesSimple size={30} className="me-3"/>Music Player</h2>
            <p>Simple Music Player is a web-based application designed to provide a seamless music listening 
                experience. Utilizing the power of HTML, CSS, and JavaScript, this project offers an intuitive 
                interface to play, pause, and navigate through your favorite tracks.</p>
                <button style={button} onClick={handleClick1}>Get project <FaArrowAltCircleRight color="white" size={24} /></button>
            </div>
           </div>
        </div>
        <div className="row mb-4" style={{marginTop:'10%'}}>
          <div className="col-md-8">
            <h2><RiRobot3Fill size={30} className="me-3"/>Virtual Mouse Using Hand Gesture and Voice Assistant</h2>
            <p>For my final year project, I created a virtual mouse. It lets you control your computer with
                hand movements and voice commands. You can move the cursor, click, and even scroll without
                touching the mouse. You can also give voice commands to search in google or perform tasks. This makes
                using the computer easier and more fun!</p>
          </div>
          <div className="col-md-4">
            <img src={ai} alt="Project Two" className="img-fluid" />
          </div>
        </div>
        <div className="row mb-4" style={{marginTop:'10%'}}>
          <div className="col-md-4">
            <img src={dbms} alt="Project Three" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h2><FcAutomotive size={30} className="me-3"/>Auto Spare Part Management System</h2>
            <p>As part of my database management project, I designed an Auto Spare Part Management System. 
                This system helps automotive stores efficiently manage their inventory of spare parts. It 
                includes features for inventory tracking, order management, supplier information, and customer 
                transactions. The system ensures smooth operations and better organization of spare parts, 
                making it easier for stores to serve their customers effectively.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
