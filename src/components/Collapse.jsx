import React, { useState } from 'react';
import collapseIcon from '../images/arrow_back_ios-24px.svg';
import expandIcon from '../images/arrow_back.svg';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : 'closed'}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>
          {title}
          <img
            className={`collapse-icon ${isOpen ? 'open' : 'closed'}`}
            src={isOpen ? collapseIcon : expandIcon}
            alt={isOpen ? 'Collapse' : 'Expand'}
          />
        </h3>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
        {content}</div>
    </div>
  );
};

export default Collapse;
