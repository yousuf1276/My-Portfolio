import React, { useState } from 'react';

const Experiences = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id='experiences' className='experiences container'>
      <div className="container">
        <div className="section-title center">
          <div className="row justify-content-center align-items-center">
            <button
              className="btn btn-primary"
              onClick={handleToggle}
              aria-expanded={isOpen}
              aria-controls="collapseExample"
            >
              Experiences
            </button>
            <div className={`collapse ${isOpen ? 'show' : ''}`} id="collapseExample">
              <div className="card card-body">

<h3>No Experience ,am a fresher</h3>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
