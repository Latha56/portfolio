import React from 'react'
import { RiRobot3Fill } from "react-icons/ri";
import { FcAutomotive } from "react-icons/fc";
import { GiSpectacles } from "react-icons/gi";
import { FaHeadphonesSimple } from "react-icons/fa6";

function Project() {
    const containerStyle = {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '5%',
      };
    
  return (
    <>
    <div style={containerStyle} className="position-relative d-flex min-vh-100">
      <div className="mb-2 text-white" style={{paddingBottom:'100px'}}>
      <h1>Academic and Personal Projects</h1>
      <p>Project has been a stepping stone in my learning journey</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6" >
            <div className="p-3 mb-4 bg-light rounded shadow-sm mb-2 text-dark">
              <h4><RiRobot3Fill size={30} className="me-3"/>Virtual Mouse Using Hand Gesture and Voice Assistant</h4>
              <p>For my final year project, I created a virtual mouse. It lets you control your computer with
                hand movements and voice commands. You can move the cursor, click, and even scroll without
                touching the mouse. You can also give voice commands to search in google or perform tasks. This makes
                using the computer easier and more fun!</p>
            </div>
          </div>
          <div className="col-md-6" >
            <div className="p-3 mb-4 bg-light rounded shadow-sm mb-2 text-dark">
              <h4><FcAutomotive size={30} className="me-3"/>Auto Spare Part Management System</h4>
              <p>As part of my database management project, I designed an Auto Spare Part Management System. 
                This system helps automotive stores efficiently manage their inventory of spare parts. It 
                includes features for inventory tracking, order management, supplier information, and customer 
                transactions. The system ensures smooth operations and better organization of spare parts, 
                making it easier for stores to serve their customers effectively.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6" >
            <div className="p-3 mb-4 bg-light rounded shadow-sm mb-2 text-dark">
                <h4><FaHeadphonesSimple size={30} className="me-3"/>Internship project:Music Player</h4>
                <p className="mb-2 text-dark">
                Simple Music Player is a web-based application designed to provide a seamless music listening 
                experience. Utilizing the power of HTML, CSS, and JavaScript, this project offers an intuitive 
                interface to play, pause, and navigate through your favorite tracks.</p>
                <p>for more details : <a href="https://github.com/Latha56/Simple-Music-Player" target="_blank" rel="noopener noreferrer">here</a></p>
            </div>
          </div>
          <div className="col-md-6" >
            <div className="p-3 mb-4 bg-light rounded shadow-sm mb-2 text-dark">
                <h4><GiSpectacles size={50} className="me-3"/>Internship project: Lens Shop</h4>
                <p className="mb-2 text-dark">
                Lens Cart is a fully functional e-commerce website designed using the React.js framework and CSS. 
                This project was developed using Visual Studio Code and does not have a backend server; instead, 
                it utilizes localStorage to manage user login details.
                </p>
                <p>for more details : <a href="https://github.com/Latha56/lens_shop" target="_blank" rel="noopener noreferrer">here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Project
