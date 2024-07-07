import type { Component, JSX } from 'solid-js';
import { createSignal } from 'solid-js';

import { AiOutlineMail, AiFillGithub } from 'solid-icons/ai';

// assets
import portraitSquarePng from '../../assets/images/portrait-square.png';
import goSvg from '../../assets/svg/go.svg';
import typescriptSvg from '../../assets/svg/typescript.svg';
// import javascriptSvg from '../../assets/svg/javascript.svg';
import reactSvg from '../../assets/svg/react.svg';
import nodeJsSvg from '../../assets/svg/nodejs.svg';
import html5Svg from '../../assets/svg/html5.svg';
import vsCodeSvg from '../../assets/svg/vscode.svg';
import neovimSvg from '../../assets/svg/neovim.svg';

import emailSvg from '../../assets/svg/email.svg';
import githubSvg from '../../assets/svg/github.svg';
import linkedInSvg from '../../assets/svg/linkedin.svg';
// import twitchSvg from '../../assets/svg/twitch.svg';

import Container from '../../components/Container';
import Page from '../../components/Page';

type Proficiency = 'proficient' | 'intermediate' | 'beginner';

const HomePage: Component = () => {
  let nextSkillId = 0;
  const [shownSkill, setShownSkill] = createSignal(-1);
  const SkillItem: Component<{
    name?: string;
    level: Proficiency;
    description: string;
    icon?: JSX.Element;
  }> = ({ name, level, description, icon }) => {
    const skillId = nextSkillId++;
    return (
      <div class={`skill${shownSkill() === skillId ? ' expanded' : ''}`}>
        <h4
          class="title"
          onClick={() => {
            setShownSkill(shownSkill() === skillId ? -1 : skillId);
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

  const blobMaskSvg = `url(/blob-${Math.floor(Math.random() * 3)}.svg)`;

  return (
    <Page id="home-page">
      <section id="about-me-wrapper">
        <Container id="about-me">
          <img
            class="portrait"
            aria-label="Picture of me"
            src={portraitSquarePng}
            draggable={false}
            style={{
              'mask-image': blobMaskSvg,
            }}
          />
          <div class="body">
            <h3 id="name" class="section-title">
              Winston Co
            </h3>
            <p>
              I'm an aspiring full-stack software developer. I graduated in
              Spring 2024 with a BS in Computer Science from the University of
              Hawai'i at Manoa. I'm a fast and eager learner with a tenacious
              work ethic.
            </p>
            <div id="contact-links">
              <a href="mailto: winstonco@live.com" class="contact-method">
                <img src={emailSvg} alt="Email icon" />{' '}
              </a>
              <a
                href="https://github.com/winstonco/"
                target="_blank"
                class="contact-method"
              >
                <img src={githubSvg} alt="GitHub logo" />{' '}
              </a>
              <a
                href="https://linkedin.com/in/winston-co/"
                target="_blank"
                class="contact-method"
              >
                <img src={linkedInSvg} alt="LinkedIn logo" />{' '}
              </a>
            </div>
          </div>
        </Container>
      </section>
      <img src="/wave.svg" alt="" srcset="" />
      <Container>
        <section id="skills" class="home-page-section">
          <div class="skills-row">
            <SkillItem
              icon={<img src={goSvg} alt="Go logo" />}
              level="beginner"
              description="As I use it more, Go is becoming my favorite language. I love the Go team's dedication to making a simple, yet powerful langauge. I actually really like Go's error handling. And of course I like its extensive standard library. I'm still very much a beginner to the language (I haven't done anything yet with goroutines), but I know I will continue to enjoy using it and learning it."
            />
            <SkillItem
              icon={<img src={typescriptSvg} alt="TypeScript logo" />}
              level="intermediate"
              description="TypeScript (and by proxy JavaScript) is my most used, and possibly favorite language. I am very familiar with ES6 syntax, and most newer features. Though I've used TS the longest of any language, I wouldn't call myself proficient yet, since there are many tricks and small features I need to learn."
            />
            <SkillItem
              icon={<img src={reactSvg} alt="React logo" />}
              level="proficient"
              description="React is my frontend framework of choice (even though this site uses Solid). I've made many projects using React, in both JavaScript and TypeScript. I'm very familiar with the fundamentals of React, such as state management, hooks, function components, etc. One thing I want to learn is using server components."
            />
            <SkillItem
              icon={<img src={nodeJsSvg} alt="NodeJS logo" />}
              level="beginner"
              description="When writing for backend, I am most familiar with NodeJS. I am still a beginner at using it, but am eager to continue learning."
            />
            <SkillItem
              icon={<img src={html5Svg} alt="HTML5 logo" />}
              level="intermediate"
              description="I am comfortable working with plain HTML and CSS. I'd label myself as 'intermediate' because I am still learning how to write good, semantic HTML, that supports web accessibility. I'm also always learning new tricks with CSS."
            />
            <SkillItem
              icon={<img src={vsCodeSvg} alt="VSCode logo" />}
              level="proficient"
              description="VSCode is my go-to text editor for writing code. I've been using it since I started learning to code, and love the customizability it provides. I'm constantly learning new shortcuts and finding new plugins that improve my productivity."
            />
            <SkillItem
              icon={<img src={neovimSvg} alt="Neovim logo" />}
              level="beginner"
              description="While I already use Vim motions in VSCode or JetBrains editors, I've been trying to make my own Neovim config and start using it as my main editor. It's still a long way to go, and I struggle with customizing it exactly how I want."
            />
          </div>
        </section>
        <section class="home-page-section">
          <h3 class="section-title">a little more about me</h3>
          <div class="body">
            <p>
              I also like bouldering and doing the dles. I like trying "new"
              tech (if you can count Go as new) and bouncing around on personal
              projects.
            </p>
            <p style="margin-bottom: 0;">Here's some extra ideas:</p>
            <ul>
              <li>A -dles leaderboard with maybe a Chrome extension</li>
              <li>Slay the Spire-dle</li>
              <li>AI Pokemon where every single thing is generated</li>
            </ul>
            <p style="margin-bottom: 1rem;">
              P.S. If you make one of these, please tell me because I'd love to
              see it.
            </p>
          </div>
        </section>
      </Container>
    </Page>
  );
};

export default HomePage;
