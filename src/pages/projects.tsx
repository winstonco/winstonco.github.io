import { Container } from 'react-bootstrap';

import Project from '../components/Project';
import nothingStore from '../assets/images/nothing-store.png';
import illustraitor from '../assets/images/illustraitor.png';
import searchHelper from '../assets/images/search-helper.png';
import odin from '../assets/images/odin-landing-page.png';
import abw from '../assets/images/background2.png';
import thisSite from '../assets/images/this-site.png';

const Projects = () => {
  return (
    <Container className="projects">
      <Project
        img={nothingStore}
        title="Nothing Store"
        link="https://nothing-store.vercel.app/"
        date={{ start: '1/14/2023' }}
        body="A VERY legitimate online store using Stripe where users can
        pay money to me in exchange for an image of an empty paper bag. Okay, but
        actually, I just wanted to try setting up a store with Stripe while learning
        a new tech stack. As a bonus, maybe someone will be duped into giving me money!"
        stack="TypeScript, Next.js, Tailwind CSS, Pocketbase (maybe)"
        foot="In progress! 🛠️"
      />
      <Project
        img={illustraitor}
        title="Illustraitor"
        link="https://illustraitor.onrender.com/"
        date={{ start: '12/24/2022' }}
        body="A bit of a shorter project than the last, mainly to learn Typescript.
        It is a party game where everone but one person is given the same prompt.
        Each player takes turns adding to the same drawing for a short time, and at
        the end of the game, players must guess who they think the fake is."
        stack="TypeScript, Socket.io, React + MUI, Express"
      />
      <Project
        img={searchHelper}
        title="Search Helper"
        link="https://search-helper-production.up.railway.app/"
        date={{ start: '11/6/2022' }}
        body="My first full stack web application. A 'Search Helper' that
              retrieves search results from Google and the Stack Exchange
              network. Allows for operators like '!-', '--', 't-' to adjust
              what results are received. Results are displayed in a sortable
              list, and can be favorited by a user and stored on a MongoDB
              database."
        stack="React, Sass, MongoDB, Node, Express, Lerna"
      />
      <Project
        img={odin}
        title="Odin Project - Landing Page"
        link="https://winstonco.org/odin-landing-page"
        date={{ start: '11/12/2022', end: '11/13/2022' }}
        body="A project made while doing the Odin Project Foundations course.
              It is a recreation of the Odin Project Landing Page using pure HTML
              and CSS to strengthen my familiarity with basic frontend tools."
        stack="Raw HTML, CSS"
      />
      <Project
        img={abw}
        title="Alerts-Border Widget"
        link="https://alerts-border-widget.onrender.com"
        date={{ start: '10/15/2022', end: '1/13/2023' }}
        body="A web-based widget to be used in OBS, displaying stream alerts
              from Twitch such as follow notifications integrated with an
              animated webcam background. Subscribes to Twitch's eventsub
              webhooks to listen to events. Sends a custom message to the
              client through a Websocket."
        stack="Raw HTML, CSS, Socket.io, Node, Express"
      />
      <Project
        img={thisSite}
        title="This Website"
        link="https://github.com/winstonco/winstonco.github.io"
        date={{ start: '03/03/2022' }}
        body="This is version 3 of my portfolio website. I wanted to rebuild it
        using React and split it into more pages instead of all being in one.
        I'm using Webpack to build it before deploying to GitHub pages."
        stack="React-Bootstrap, TypeScript, Sass, Webpack"
      />
    </Container>
  );
};

export default Projects;
