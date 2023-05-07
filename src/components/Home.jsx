import React from 'react';
import { ExternalLink } from 'react-external-link';
import { FaGithub } from 'react-icons/fa';
import { RiShareBoxFill } from 'react-icons/ri';
import '../stylesheets/Home.css';
import gif from '../images/pill.gif';

const Home = () => (
  <section className="home-container">
    <div>
      <div className="description">
        <p className="text">
          <b>Clinical Decision Support System for Hepatocellular Carcinoma</b>
          <br />
          <br />
          This is a tool to predict the survival of patients with Hepatocellular Carcinoma.
          <p>
            The tool calculates survival rates based on a varied combination of symptoms.
            It utilises existing research from
            <a href="https://www.mdcalc.com/"> MD+Calc website. </a>
          </p>
          The data utilised is based on the records in hospitals located in Mysore, Karnataka.
          This website acts a decision support system to aid practitioners.
        </p>
      </div>
      <div className="external-links">
        <ExternalLink href="https://github.com/amulyal/CDSS-for-HCC">
          Website Code
          <FaGithub />
        </ExternalLink>
        <ExternalLink href="https://github.com/amulyal/ML-for-HCC">
          ML Code
          <FaGithub />
        </ExternalLink>
        <ExternalLink href="https://cdssforhcc.netlify.app/">
          View Live
          <RiShareBoxFill />
        </ExternalLink>
      </div>
      <br />
      <p style={{ fontSize: '10px' }}> Project by Dept. of ISE, JSSATE, Bengaluru</p>
    </div>
    <div className="home-img">
      <img src={gif} alt="math" />
    </div>
  </section>
);

export default Home;
