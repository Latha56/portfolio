import {  Routes, Route  } from "react-router-dom"
import './App.css';
import About from './Components/About';
import Education from './Components/Education';
import Project from './Components/Project';
import Header from "./Components/Header";
import Details_Aboutme from "./Components/Details_Aboutme";
import Chat from "./Components/Chat";
import Work from "./Components/Work";
import Footer from "./Components/Footer"

function App() {
  return (
    <div id='grad'>
      <Header />
      <div className="page-container">
            <Routes >
              <Route path="/" element={<About />} />
              <Route path="/About" element={<About />} />
              <Route path="/Details_Aboutme" element={<Details_Aboutme />} />
              <Route path="/Education" element={<Education />} />
              <Route path="/Work" element={<Work />} />
              <Route path="/Project" element={<Project />} />
              <Route path="/Chat" element={<Chat />} />
            </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
