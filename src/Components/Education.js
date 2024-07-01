import React ,{useEffect} from 'react'
import { useState } from 'react';
import skills from '../assests/skills1.png'
import education from '../assests/education_logo.gif'
import skill_logo from '../assests/skills_logo.gif'
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Education() {
  const [selectedDetail, setSelectedDetail] = useState('');

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);
  
  const skills = [
    { name: 'C Programming', level: 75 },
    { name: 'C++ Programming', level: 75 },
    { name: 'Java Programming', level: 70 },
    { name: 'Python Programming', level: 60 },
    { name: '.net framwork', level: 80 },
    { name: 'React js framwork', level: 90 },
    { name: 'HTML,CSS,bootstrap', level: 95 },
    { name: 'My SQL', level: 70 },
  ];


  const details = {
    degree: {
      degreeName: 'Bachelor of Engineering',
      institute: 'visvesvaraya technological university - Rajeev Institute of Technology',
      course :'Computer Science and Engineering',
      duration: '2020 - 2024',
      percentage: 'CGPA - 9.12', 
    },
    college: {
      degreeName: 'Pre University College Degree',
      institute: 'st philomena pu college ,hassan ',
      course :'Science - PCMC',
      duration: '2018 - 2020',
      percentage: '86.6 %', 
    },
    school: {
      degreeName: 'Higher Secondary School',
      institute: 'st philomena high school ,hassan',
      duration: '2016-2018',
      percentage: '87.52 %',
    }
  };

  return (
    <>
    <div className="position-relative d-flex min-vh-100">
      <div className="container mt-1" style={{marginLeft: '30px'}}>
      <div className="row">
        <div className="col-lg-4">
            <div className="education-sidebar" style={{ marginTop: '30%' }}>
              <div className="position-relative d-flex min-vh-10">
                <div><div className="rounded-circle overflow-hidden" style={{ width: '100px', height: '100px'}}>
                  <img src={education} className="img-fluid rounded-circle" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div></div>  
                <div style={{paddingTop:'15px',paddingLeft:'10px'}}><h1 className="mb-2 text-white education-heading" style={{ whiteSpace: 'nowrap' }}>EDUCATION DETAILS</h1></div>          
              </div>
            <div style={{paddingTop:'10px'}}>
            <p><a href="#" onClick={() => setSelectedDetail('degree')}style={{ color: 'black', textDecoration: 'none',fontSize: '1.3rem' }}>Degree</a></p>
            <p><a href="#" onClick={() => setSelectedDetail('college')}style={{ color: 'black', textDecoration: 'none',fontSize: '1.3rem'}}> Pre University College</a></p>
            <p><a href="#" onClick={() => setSelectedDetail('school')}style={{ color: 'black', textDecoration: 'none',fontSize: '1.3rem' }}>Higher Secondary School</a></p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          {selectedDetail && (
            <div className={`card fadeIn ${animated ? 'animated' : ''}`}  style={{ marginLeft: '50px', marginTop: '30%', width: '700px', fontFamily: "'Dancing Script', cursive", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', color: 'rgba(255, 255, 255, 0.8)', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', padding: '20px' , backgroundColor:'transparent'}}>
              <div>
                <h3 style={{ color: 'black' }}>{details[selectedDetail].degreeName}</h3>
                <p style={{ color: 'white' }}>{details[selectedDetail].institute}</p>
                {details[selectedDetail].course && (
                <p style={{ color: 'white' }}>{details[selectedDetail].course}</p>)}
                <p style={{ color: 'white' }}>{details[selectedDetail].duration}</p>
                <p style={{ color: 'white' }}>{details[selectedDetail].percentage}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
    
    <div style={{marginTop:'10px',marginLeft:'30px'}}>
      <div className="position-relative d-flex min-vh-10">
        <div><div className="rounded-circle overflow-hidden" style={{ width: '100px', height: '100px'}}>
          <img src={skill_logo} className="img-fluid rounded-circle" alt="skillLogo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div></div>  
        <div style={{paddingTop:'15px',paddingLeft:'10px'}}><h1 className="mb-2 text-white education-heading" style={{ whiteSpace: 'nowrap' }}>SKILLS</h1></div>          
      </div>
      <div className="position-relative d-flex min-vh-10">
        <div className="col-lg-8" style={{paddingTop:'10px'}}>
          <p style={{fontSize: '1.5rem'}}>"Tiny skills create a path so wide,Leading to dreams where joy can reside."</p>
          <div style={{ marginTop: '10px', marginLeft: '30px' }}>
      <div className="container mt-4">
        <div className="row">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-auto p-2 position-relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`btn btn-primary d-flex align-items-center justify-content-center position-relative ${hoveredSkill === index ? 'blur-3' : ''}`}
                style={{
                  textAlign: 'center',
                  backgroundColor: '#5078f2',
                  transition: 'filter 0.3s',
                  marginRight:'20px',
                  marginBottom:'20px'
                }}
              >
                {skill.name}
                {hoveredSkill === index && (
                  <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                    <div className="progress w-75" style={{ height: '20px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.level}%`, backgroundColor: "#b592d4" }}
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {skill.level}%
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  </>
  );
}

export default Education;

