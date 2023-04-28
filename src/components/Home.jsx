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
            This tool utilises existing research from
            <a href="https://www.mdcalc.com/"> MD+Calc website. </a>
            The symptoms are selected based on the records in hospitals based in Mysore.
          </p>
          The tool calculates survival rates based on a varied combination of symptoms.
          The Milan criteria calculator is a tool to predict if the patient is eligible for
          liver transplantation is there exists an underlying Cirrhosis condition.
        </p>
      </div>
      <div className="external-links">
        <ExternalLink href="https://github.com/amulyal/CDSS-for-HCC">
          Website Code
          <FaGithub />
        </ExternalLink>
        <ExternalLink href="https://github.com/amulyal/CDSS-for-HCC">
          ML Code
          <FaGithub />
        </ExternalLink>
        <ExternalLink href="https://cdssforhcc.netlify.app/">
          View Live
          <RiShareBoxFill />
        </ExternalLink>
      </div>
      <p style={{ fontSize: '10px' }}> Project by Dept. of ISE, JSSATE, Bengaluru</p>
    </div>
    <div className="home-img">
      <img src={gif} alt="math" />
    </div>
  </section>
);

export default Home;
