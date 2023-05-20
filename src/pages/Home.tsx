import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { AiOutlineMail, AiFillGithub } from 'react-icons/ai';
import img from '../assets/images/portrait-square.png';

import twitchSvg from '../assets/svg/twitch.svg';
import linkedInSvg from '../assets/svg/linked-in.svg';
import tsSvg from '../assets/svg/typescript.svg';
import jsSvg from '../assets/svg/javascript.svg';
import reactSvg from '../assets/svg/react.svg';
import nodejsSvg from '../assets/svg/nodejs.svg';
import htmlSvg from '../assets/svg/html5.svg';
import vscodeSvg from '../assets/svg/vscode.svg';

const Home = () => {
  const [shownSkill, setShownSkill] = useState('');

  const createSkill: (details: {
    name: string;
    level: 'proficient' | 'intermediate' | 'beginner';
    description: string;
    icon?: React.ReactNode;
  }) => React.ReactNode = ({ name, level, description, icon }) => {
    return (
      <div className={`skill${shownSkill === name ? ' expanded' : ''}`}>
        <h4
          className="title"
          onClick={() => {
            setShownSkill(shownSkill === name ? '' : name);
          }}
        >
          {icon}
          {name}
        </h4>
        <div className="body">
          <span className={`level level-${level}`}>
            Proficiency: {level.toUpperCase()}
          </span>
          <div className="desc">{description}</div>
        </div>
      </div>
    );
  };

  return (
    <Container fluid="md" id="home-page">
      <section id="about-me" className="home-page-section">
        <img
          className="portrait"
          aria-label="Picture of me"
          src={img}
          draggable={false}
        />
        <h3 className="font-subsection-title">About Me</h3>
        <Col lg={8} className="body">
          <p>
            I'm a senior at the University of Hawai'i at Manoa, majoring in
            Computer Science. I love learning new technologies and working on
            personal projects. I'm aiming to be a full-stack developer, if those
            still exist in the future 😅.
          </p>
          <h4>📖 What I'm doing now:</h4>
          <p>
            In my latest project, I wanted to try make a cross-platform app, so
            I'm learning React Native with Expo. On the side, I'm also reading
            the Rust book and I also just started reading through the Svelte
            tutorials.
          </p>
        </Col>
      </section>
      <section id="skills" className="home-page-section">
        <h3 className="font-subsection-title">Skills</h3>
        <div className="skills-row">
          {createSkill({
            name: 'TypeScript',
            icon: <img src={tsSvg} alt="TypeScript logo" />,
            level: 'intermediate',
            description: `TypeScript is my favorite language. After first learning
            JS and trying TypeScript, I could never go back! Adding strong typing to
            a language I already enjoy makes for a great developer experience. There
            are many tricks and small features I need to learn before I can call
            myself a true TypeScript wizard.`,
          })}
          {createSkill({
            name: 'JavaScript',
            icon: <img src={jsSvg} alt="JavaScript logo" />,
            level: 'proficient',
            description: `JavaScript is my 2nd favorite language and the language I
            am most proficient in. It's the language I used when I first focused on
            learning to code. I am familiar with ES6 syntax, and many newer features.`,
          })}
          {createSkill({
            name: 'React',
            icon: <img src={reactSvg} alt="React logo" />,
            level: 'proficient',
            description: `React is my frontend framework of choice. I've made many
            projects using React, in both JavaScript and TypeScript. I'm very familiar
            with the fundamentals of React, such as state management, hooks, function
            components, etc. One thing I want to learn is using server components.`,
          })}
        </div>
        <div className="skills-row">
          {createSkill({
            name: 'NodeJS',
            icon: <img src={nodejsSvg} alt="NodeJS logo" />,
            level: 'beginner',
            description: `When writing for backend, I am most familiar with NodeJS. I
            am still a beginner at using it, but am eager to continue learning.`,
          })}
          {createSkill({
            name: 'HTML + CSS',
            icon: <img src={htmlSvg} alt="HTML5 logo" />,
            level: 'intermediate',
            description: `I am comfortable working with plain HTML and CSS. I'd label
            myself as 'intermediate' because I am still learning how to write good,
            semantic HTML, that supports web accessibility. I'm also always learning
            new tricks with CSS.`,
          })}
          {createSkill({
            name: 'VSCode',
            icon: <img src={vscodeSvg} alt="VSCode logo" />,
            level: 'proficient',
            description: `VSCode is my go-to text editor for writing code. I've been
            using it since I started learning to code, and love the customizability
            it provides. I'm constantly learning new shortcuts and finding new plugins
            that improve my productivity.`,
          })}
        </div>
      </section>
      <section id="contact" className="home-page-section">
        <h3 className="font-subsection-title">Contact Me</h3>
        <div className="contact-methods">
          <a href="mailto: winstonco@live.com" className="contact-method">
            <AiOutlineMail /> <span>winstonco@live.com</span>
          </a>
        </div>
      </section>
      <section id="more" className="home-page-section">
        <h3 className="font-subsection-title">More Links...</h3>
        <small>They are in the footer too!</small>
        <div className="contact-methods">
          <a href="https://github.com/winstonco/" className="contact-method">
            <AiFillGithub /> <span>winstonco</span>
          </a>
          <a
            href="https://linkedin.com/in/winston-co/"
            className="contact-method"
          >
            <img src={linkedInSvg} alt="Linked-In logo" />{' '}
            <span>winston-co</span>
          </a>
          <a href="https://twitch.tv/frostfireftw/" className="contact-method">
            <img src={twitchSvg} alt="Twitch Logo" /> <span>frostfireftw</span>
          </a>
        </div>
      </section>
    </Container>
  );
};

export default Home;
