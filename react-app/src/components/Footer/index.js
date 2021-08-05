import React from 'react';
import { IconContext } from 'react-icons';
import { FaLinkedin, FaAngellist, FaGithub } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  return (
    <div className='main-footer'>
      <IconContext.Provider value={{ className: 'react-icons', size: 45 }}>
              <div className="footer-icon">
                <a rel="noreferrer" href='https://github.com/AnthonyCost' target='_blank'>
                  <FaGithub />
                </a>
              </div>
              <div className="footer-icon">
                <a rel="noreferrer" href='https://angel.co/u/anthony-costanza-1' target='_blank'>
                  <FaAngellist />
                </a>
              </div>
              <div className="footer-icon">
                <a
                  rel="noreferrer"
                  href='https://anthonycost.github.io/portfolio/'
                  target='_blank'
                >
                  <MdWeb />
                </a>
              </div>
              <div className="footer-icon">
                <a
                  rel="noreferrer"
                  href='https://www.linkedin.com/in/anthony-costanza-64952820a/'
                  target='_blank'
                >
                  <FaLinkedin />
                </a>
              </div>
      </IconContext.Provider>
    </div>
  );
};

export default Footer;