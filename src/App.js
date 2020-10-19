import React from 'react';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Section from './components/Section';
import about from './about';
import skillMe from './skillMe';
import { FaGithub, FaLinkedin, FaJs, FaReact } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <AboutMe />
        <Section title="My Story" subtitle={about} dark={true} id="section1" />
        <Section
          title="My Skills"
          subtitle={skillMe}
          dark={false}
          id="section2"
        />

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
  }
}

export default App;
