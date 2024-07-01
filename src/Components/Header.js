import profile from "../assests/profile.jpeg";
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import Chat from "./Chat";

function Header() {
  const [showImage, setShowImage] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const imageRef = useRef(null);
  const chatRef = useRef(null);

  const handleIconClick = () => {
    setShowImage(!showImage);
  };

  const handleChatClick = () => {
    setShowChat(!showChat);
  };

  const handleClickOutside = (event) => {
    if (imageRef.current && !imageRef.current.contains(event.target)) {
      setShowImage(false);
    }
    if (chatRef.current && !chatRef.current.contains(event.target)) {
      setShowChat(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? 'blue' : 'black',
    textDecoration: 'none',
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ position: 'sticky', top: '0', zIndex: '1030', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink to="/About" className="nav-link" style={navLinkStyle}>About</NavLink></li>
            <li className="nav-item"><NavLink to="/Education" className="nav-link" style={navLinkStyle}>EduSkills</NavLink></li>
            <li className="nav-item"><NavLink to="/Work" className="nav-link" style={navLinkStyle}>Works</NavLink></li>
          </ul>
        </div>
        <div className="navbar-brand">
          <IoIosChatboxes size={30} onClick={handleChatClick} style={{ cursor: 'pointer' }} />
        </div>
        <div className="navbar-brand">
          <IoPersonCircleSharp size={30} onClick={handleIconClick} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      {showImage && (
        <div ref={imageRef} style={{ position: 'absolute', top: '60px', right: '10px', width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <img src={profile} className="img-fluid rounded-circle" alt="Person" style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} />
        </div>
      )}
      {showChat && (
        <div ref={chatRef} style={{ position: 'absolute', top: '60px', right: '20px', width: '350px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <Chat />
        </div>
      )}
    </nav>
  );
}

export default Header;
