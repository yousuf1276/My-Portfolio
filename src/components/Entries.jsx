import React, { useState } from 'react';

const Entries = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id='entries' className='entries container'>
      <div className="container">
        <div className="section-title ">
          <div className="row">
            <button
              className="btn btn-primary"
              onClick={handleToggle}
              aria-expanded={isOpen}
              aria-controls="collapseExample"
            >
              Blog
            </button>
            <div className={`collapse ${isOpen ? 'show' : ''}`} id="collapseExample">
              <div className="card card-body">





              <h3>Processing....</h3>






                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entries;
