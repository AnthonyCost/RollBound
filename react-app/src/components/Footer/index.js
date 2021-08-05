import React from 'react';
import { IconContext } from 'react-icons';
import { FaLinkedin, FaAngellist, FaGithub } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  return (
    <div className='main-footer'>
      <IconContext.Provider value={{ className: 'react-icons', size: 40 }}>
            <div className='footer-col-row1'>
              <img alt="TonyPic" className='footer-profilePic' src='https://user-images.githubusercontent.com/35717793/128299864-faa66eae-4c91-44ab-8420-9edbe4a86dfa.jpg' />
              <h3>Tony Costanza</h3>
              <div className='footer-row-row2'>
                <a rel="noreferrer" href='https://github.com/AnthonyCost' target='_blank'>
                  <FaGithub />
                </a>
                <a rel="noreferrer" href='https://angel.co/u/anthony-costanza-1' target='_blank'>
                  <FaAngellist />
                </a>
                <a
                  rel="noreferrer"
                  href='https://anthonycost.github.io/portfolio/'
                  target='_blank'
                >
                  <MdWeb />
                </a>
                <a
                  rel="noreferrer"
                  href='https://www.linkedin.com/in/anthony-costanza-64952820a/'
                  target='_blank'
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
      </IconContext.Provider>
    </div>
  );
};

export default Footer;