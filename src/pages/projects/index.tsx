import type { Component } from 'solid-js';

// assets
import illustraitorPng from '../../assets/images/projects/illustraitor.png';
import searchHelperPng from '../../assets/images/projects/search-helper.png';
import odinLandingPagePng from '../../assets/images/projects/odin-landing-page.png';
import alertsBorderWidgetPng from '../../assets/images/projects/alerts-border-widget.png';
import personalWebsitePng from '../../assets/images/projects/personal-website.png';
import onuPng from '../../assets/images/projects/onu.png';
import gomxPng from '../../assets/images/projects/gomx.png';

import Container from '../../components/Container';
import Project from '../../components/Project';

const ProjectsPage: Component = () => {
  return (
    <Container id="projects-page">
      <h1>Personal Projects</h1>
      <div class="projects">
        {/* <Project
        img={nothingStore}
        title="Nothing Store"
        link="https://nothing-store.vercel.app/"
        date={{ start: '1/14/2023' }}
        body="A VERY legitimate online store using Stripe where users can pay money to me in exchange for an image of an empty paper bag. Okay, but actually, I just wanted to try setting up a store with Stripe while learning  a new tech stack. As a bonus, maybe someone will be duped into giving me money!"
        tags={['TypeScript', 'Next.js', 'Tailwind CSS', 'Pocketbase (maybe)']}
        foot="In progress! 🛠️"
      /> */}
        <Project
          img={gomxPng}
          title="GOMX"
          link="https://github.com/gomxapp/gomx"
          date={{ start: new Date(2023, 8, 30) }}
          body="A full-stack web framework using Go, Go templates, HTMX, and Tailwind. Uses Go 1.22’s new router, with file-based routing and APIs. Includes a CLI app to scaffold new apps with a base app or an example app, or add a SQLite instance."
          tags={['Go', 'htmx']}
        />
        <Project
          img={onuPng}
          title="ONU"
          link="https://github.com/winston-and-co/onu"
          date={{ start: new Date(2024, 2, 18), end: new Date(2024, 5, 9) }}
          body="ONU is an UNO-themed roguelike deckbuilder heavily inspired by Slay the Spire and Balatro. I spearheaded the design and development of the game. It is the first real game I've made in Unity. The game is currently in alpha."
          tags={['Unity', 'C#']}
        />
        <Project
          img={personalWebsitePng}
          title="Personal Website"
          link="https://github.com/winstonco/winstonco.github.io"
          date={{ start: new Date(2022, 2, 3) }}
          body="This is version 4 of my portfolio website. I like experimenting with new technologies here. In the latest version, I converted from React to SolidJS and stopped using Bootstrap. I also switched to using Vite to build the app since Webpack is huge pain comparatively. On the 'Projects' page, I've compiled other projects that I've finished working on."
          tags={['SolidJS', 'TypeScript', 'Sass', 'Vite']}
        />
        <Project
          img={illustraitorPng}
          title="Illustraitor"
          link="https://illustraitor.onrender.com/"
          date={{ start: new Date(2022, 11, 24), end: new Date(2023, 1, 18) }}
          body="The goal of this project was to learn Typescript. It is a party game with hand-drawn graphics, where everone is given the same prompt to draw except one person, who has to try blend in with the crowd. Each player takes turns continuing the drawing until the end of the game, when players must guess who the imposter is."
          tags={['TypeScript', 'Socket.io', 'React', 'MUI', 'Express']}
        />
        <Project
          img={searchHelperPng}
          title="Search Helper"
          link="https://search-helper-production.up.railway.app/"
          date={{ start: new Date(2022, 10, 6), end: new Date(2022, 11, 21) }}
          body="My first full stack web application. It finds search results from Google and the Stack Exchange network. Results are displayed in a sortable list, and can be favorited by a user. Users and favorited results are stored on a MongoDB database. The project is a monorepo and uses Lerna to manage it."
          tags={['React', 'Sass', 'MongoDB', 'Node', 'Express', 'Lerna']}
        />
        <Project
          img={odinLandingPagePng}
          title="Odin Project - Landing Page"
          link="https://winstonco.org/odin-landing-page"
          date={{ start: new Date(2022, 10, 12), end: new Date(2022, 10, 13) }}
          body="A project made while doing the Odin Project Foundations course. It is a recreation of the Odin Project Landing Page using pure HTML  and CSS to strengthen my familiarity with basic frontend tools."
          tags={['HTML', 'CSS']}
        />
        <Project
          img={alertsBorderWidgetPng}
          title="Alerts Border Widget"
          link="https://alerts-border-widget.onrender.com"
          date={{ start: new Date(2022, 9, 15), end: new Date(2023, 0, 13) }}
          body="A web-based widget to be used in OBS, displaying stream alerts from Twitch such as follow notifications integrated with an animated webcam background. Subscribes to Twitch's eventsub webhooks to listen to events. Sends a custom message to the client through a Websocket."
          tags={['HTML', 'CSS', 'Socket.io', 'Node', 'Express']}
        />
      </div>
    </Container>
  );
};

export default ProjectsPage;
