import type { Component } from 'solid-js';

// assets
import portraitSquarePng from '../../assets/images/winston1-square.png';
import goSvg from '../../assets/svg/go.svg';
import typescriptSvg from '../../assets/svg/typescript.svg';
import reactSvg from '../../assets/svg/react.svg';
import vsCodeSvg from '../../assets/svg/vscode.svg';

import emailSvg from '../../assets/svg/email.svg';
import githubSvg from '../../assets/svg/github.svg';
import linkedInSvg from '../../assets/svg/linkedin.svg';
// import twitchSvg from '../../assets/svg/twitch.svg';

import Container from '../../components/Container';
import Page from '../../components/Page';

const HomePage: Component = () => {
  const blobMaskSvg = `url(/blob-${Math.floor(Math.random() * 3)}.svg)`;

  return (
    <Page id="home-page">
      <section id="hero-wrapper">
        <Container id="hero">
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
            <h1 id="name" class="section-title">
              Winston Co
            </h1>
            <h2 class="text-normal">aspiring software developer</h2>
            <br />
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
      <img src="/wave.svg" alt="" srcset="" class="header-svg" />
      <Container>
        <main>
          <section id="about-me" class="home-page-section">
            <h3 class="section-title">About Me</h3>
            <div class="body">
              <p>Born in Hawaii</p>
              <p>
                Graduated in Spring 2024 with a BS in Computer Science from the
                University of Hawaii at Manoa
              </p>
              <p>
                I like drawing, doing the dles, bouldering, watching YouTube,
                watching One Piece, playing games, and coding sometimes
              </p>
            </div>
          </section>
          <section id="skills" class="home-page-section">
            <h3 class="section-title">Skills</h3>
            <div class="body">
              <img class="skill" src={goSvg} alt="Go logo" />
              <img class="skill" src={typescriptSvg} alt="TypeScript logo" />
              <img class="skill" src={reactSvg} alt="React logo" />
              <img class="skill" src={vsCodeSvg} alt="VSCode logo" />
            </div>
          </section>
        </main>
      </Container>
    </Page>
  );
};

export default HomePage;
