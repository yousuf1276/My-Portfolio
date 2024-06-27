import React, { useState } from 'react';

const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id='certificates' className='certificates container'>
      <div className="container">
        <div className="section-title center">
          <div className="row justify-content-center align-items-center">
            <button
              className="btn btn-primary"
              onClick={handleToggle}
              aria-expanded={isOpen}
              aria-controls="collapseExample"
            >
              Certificates
            </button>
            <div className={`collapse ${isOpen ? 'show' : ''}`} id="collapseExample">
              <div className="card card-body">

              <li>Programming in Java</li>
              <li>Joy of Computing using python</li>
              <li>DataBase Management System</li>
              <li>Responsive Web Design</li>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
