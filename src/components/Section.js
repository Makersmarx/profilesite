import React from 'react';

const Section = ({ title, subtitle, dark, id }) => {
  return (
    <div className={'section' + (dark ? ' section-dark' : '')}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

export default Section;
