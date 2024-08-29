import React from 'react';
import './section.css';

function Section({ image, title }) {
  return (
    <div className="section-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Section;
