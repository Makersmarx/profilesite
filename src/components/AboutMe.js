import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <h1 className="greeting">
        Hello, I'm<br></br>
        <mark className="orange">Robert.</mark>
      </h1>
      <h1 className="func">async&nbsp;&nbsp; {`{`}</h1>
      <h2 className="about">
        I am an aspiring JS && React dev looking for my break into the industry.{' '}
        <br></br>My passion is encouraging community growth and success thru{' '}
        <br></br>
        technology while creating a cycle that will promote learning,
        application,<br></br>
        and sharing of knowledge.
      </h2>
      <h1 className="func">{`}`}</h1>
    </div>
  );
};

export default AboutMe;
