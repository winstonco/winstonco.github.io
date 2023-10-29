import type { Component, JSX } from 'solid-js';
import { createSignal } from 'solid-js';

import { Col, Container } from 'solid-bootstrap';
import { AiOutlineMail, AiFillGithub } from 'solid-icons/ai';

// assets
import portraitSquarePng from '../../assets/images/portrait-square.png';
import typescriptSvg from '../../assets/svg/typescript.svg';
import javascriptSvg from '../../assets/svg/javascript.svg';
import reactSvg from '../../assets/svg/react.svg';
import nodeJsSvg from '../../assets/svg/nodejs.svg';
import html5Svg from '../../assets/svg/html5.svg';
import vsCodeSvg from '../../assets/svg/vscode.svg';
import linkedInSvg from '../../assets/svg/linkedin.svg';
import twitchSvg from '../../assets/svg/twitch.svg';

import Todo from '../../components/Todo';

const HomePage: Component = () => {
  const [shownSkill, setShownSkill] = createSignal('');

  const createSkill: (details: {
    name: string;
    level: 'proficient' | 'intermediate' | 'beginner';
    description: string;
    icon?: JSX.Element;
  }) => JSX.Element = ({ name, level, description, icon }) => {
    return (
      <div class={`skill${shownSkill() === name ? ' expanded' : ''}`}>
        <h4
          class="title"
          onClick={() => {
            setShownSkill(shownSkill() === name ? '' : name);
          }}
        >
          {icon}
          {name}
        </h4>
        <div class="body">
          <span class={`level level-${level}`}>
            Proficiency: {level.toUpperCase()}
          </span>
          <div class="desc">{description}</div>
        </div>
      </div>
    );
  };

  return (
    <Container fluid="md" id="home-page">
      <section id="about-me" class="home-page-section">
        <img
          class="portrait"
          aria-label="Picture of me"
          src={portraitSquarePng}
          draggable={false}
        />
        <h3 class="font-subsection-title">About Me</h3>
        <Col lg={8} class="body">
          <p>
            I'm a senior at the University of Hawai'i at Manoa, majoring in
            Computer Science. I love learning new technologies and working on
            personal projects. I'm aiming to be a full-stack developer, if those
            still exist in the future 😅.
          </p>
          <h4>📖 What I'm working on:</h4>
          <ul>
            <li>A Go-HTMX web app framework</li>
            <li>A Flutter app called "Today I Learned"</li>
            <li>Chugging through the Rust book...very slowly</li>
          </ul>
        </Col>
      </section>
      <section id="skills" class="home-page-section">
        <h3 class="font-subsection-title">Skills</h3>
        <div class="skills-row">
          {createSkill({
            name: 'TypeScript',
            icon: <img src={typescriptSvg} alt="TypeScript logo" />,
            level: 'intermediate',
            description: `TypeScript is my favorite language. After first learning
            JS and trying TypeScript, I could never go back! Adding strong typing to
            JS was probably one of mankind's smartest decisions, next to bidets. There
            are many tricks and small features I need to learn before I can call
            myself a true TypeScript wizard.`,
          })}
          {createSkill({
            name: 'JavaScript',
            icon: <img src={javascriptSvg} alt="JavaScript logo" />,
            level: 'proficient',
            description: `JavaScript is my 2nd favorite language (if it counts
            as different from TS) and the language I am most proficient in. It's
            the language I used when I first focused on learning to code. I am
            familiar with ES6 syntax, and many newer features.`,
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
        <div class="skills-row">
          {createSkill({
            name: 'NodeJS',
            icon: <img src={nodeJsSvg} alt="NodeJS logo" />,
            level: 'beginner',
            description: `When writing for backend, I am most familiar with NodeJS. I
            am still a beginner at using it, but am eager to continue learning.`,
          })}
          {createSkill({
            name: 'HTML + CSS',
            icon: <img src={html5Svg} alt="HTML5 logo" />,
            level: 'intermediate',
            description: `I am comfortable working with plain HTML and CSS. I'd label
            myself as 'intermediate' because I am still learning how to write good,
            semantic HTML, that supports web accessibility. I'm also always learning
            new tricks with CSS.`,
          })}
          {createSkill({
            name: 'VSCode',
            icon: <img src={vsCodeSvg} alt="VSCode logo" />,
            level: 'proficient',
            description: `VSCode is my go-to text editor for writing code. I've been
            using it since I started learning to code, and love the customizability
            it provides. I'm constantly learning new shortcuts and finding new plugins
            that improve my productivity.`,
          })}
        </div>
        <Todo todo="Add Go and Neovim" />
      </section>
      <section id="contact" class="home-page-section">
        <h3 class="font-subsection-title">Contact Me</h3>
        <div class="contact-methods">
          <a href="mailto: winstonco@live.com" class="contact-method">
            <AiOutlineMail /> <span>winstonco@live.com</span>
          </a>
        </div>
      </section>
      <section id="more" class="home-page-section">
        <h3 class="font-subsection-title">More Links...</h3>
        <small>They are in the footer too!</small>
        <div class="contact-methods">
          <a href="https://github.com/winstonco/" class="contact-method">
            <AiFillGithub /> <span>winstonco</span>
          </a>
          <a href="https://linkedin.com/in/winston-co/" class="contact-method">
            <img src={linkedInSvg} alt="Linked-In logo" />{' '}
            <span>winston-co</span>
          </a>
          <a href="https://twitch.tv/frostfireftw/" class="contact-method">
            <img src={twitchSvg} alt="Twitch Logo" /> <span>frostfireftw</span>
          </a>
        </div>
      </section>
    </Container>
  );
};

export default HomePage;
