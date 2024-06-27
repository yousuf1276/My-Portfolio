import React, { useState } from 'react';

const Skill = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id='skills' className='skills container'>
      <div className="container">
        <div className="section-title center">
          <div className="row justify-content-center align-items-center">
            <button
              className="btn btn-primary"
              onClick={handleToggle}
              aria-expanded={isOpen}
              aria-controls="collapseExample"
            >
              Skills
            </button>
            <div className={`collapse ${isOpen ? 'show' : ''}`} id="collapseExample">
              <div className="card card-body">

              <li><b>Programming Languages:</b> Proficient in Python, Java, and C++</li><br />
                <li><b>Front End Technologies:</b> Skilled in HTML, CSS, React.js</li><br />
                <li><b>Back End Technologies:</b> Spring Boot</li><br />
                <li><b>Database Management:</b> MongoDB , MySQL</li><br />
                <li><b>Tools:</b> Proficient in using GitHub, Eclipse, Postman, MongoDB Compass</li>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
