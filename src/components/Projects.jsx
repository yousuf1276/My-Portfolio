import React, { useState } from 'react';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id='projects' className='projects container'>
      <div className="container">
        <div className="section-title center">
          <div className="row justify-content-center align-items-center">
            <button
              className="btn btn-primary"
              onClick={handleToggle}
              aria-expanded={isOpen}
              aria-controls="collapseExample"
            >
              Projects
            </button>
            <div className={`collapse ${isOpen ? 'show' : ''}`} id="collapseExample">
              <div className="card card-body">
                <a href="https://github.com/yousuf1276/Complete-Bank-App">
                  <li>Bank Web App</li>
                </a>
                <a href="https://github.com/yousuf1276/College-Website">
                  <li>College Website</li>
                </a>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
