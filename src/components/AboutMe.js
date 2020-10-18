import React from 'react';
import { FaGithub, FaLinkedin, FaJs, FaReact } from 'react-icons/fa';
import { IconContext } from 'react-icons';

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
      <IconContext.Provider
        value={{ style: { fontSize: '30px', color: '#d6cfc6' } }}
      >
        <div className="icons">
          <FaGithub
            onClick={() => {
              window.open('https://github.com/Makersmarx');
            }}
          />
          <FaLinkedin
            onClick={() => {
              window.open('https://www.linkedin.com/in/makersmarx');
            }}
          />
          <FaJs
            onClick={() => {
              window.open(
                'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
              );
            }}
          />
          <FaReact
            onClick={() => {
              window.open('https://reactjs.org/');
            }}
          />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default AboutMe;
