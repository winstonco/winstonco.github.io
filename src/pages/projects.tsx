import { Container } from 'react-bootstrap';

import Project from '../components/Project';
import nothingStore from '../assets/images/projects/nothing-store.png';
import illustraitor from '../assets/images/projects/illustraitor.png';
import searchHelper from '../assets/images/projects/search-helper.png';
import odin from '../assets/images/projects/odin-landing-page.png';
import abw from '../assets/images/projects/background2.png';
import thisSite from '../assets/images/projects/this-site.png';

const Projects = () => {
  return (
    <div id="projects-page">
      <Container className="projects">
        {/* <Project
        img={nothingStore}
        title="Nothing Store"
        link="https://nothing-store.vercel.app/"
        date={{ start: '1/14/2023' }}
        body="A VERY legitimate online store using Stripe where users can
        pay money to me in exchange for an image of an empty paper bag. Okay, but
        actually, I just wanted to try setting up a store with Stripe while learning
        a new tech stack. As a bonus, maybe someone will be duped into giving me money!"
        tags={['TypeScript', 'Next.js', 'Tailwind CSS', 'Pocketbase (maybe)']}
        foot="In progress! 🛠️"
      /> */}
        <Project
          img={illustraitor}
          title="Illustraitor"
          link="https://illustraitor.onrender.com/"
          date={{ start: new Date(2022, 11, 24), end: new Date(2023, 1, 18) }}
          body="The goal of this project was to learn Typescript. It is a party game
          with hand-drawn graphics, where everone is given the same prompt to draw
          except one person, who has to try blend in with the crowd. Each player takes
          turns continuing the drawing until the end of the game, when players must
          guess who the imposter is."
          tags={['TypeScript', 'Socket.io', 'React', 'MUI', 'Express']}
        />
        <Project
          img={searchHelper}
          title="Search Helper"
          link="https://search-helper-production.up.railway.app/"
          date={{ start: new Date(2022, 10, 6), end: new Date(2022, 11, 21) }}
          body="My first full stack web application. It finds search results from
          Google and the Stack Exchange network. Results are displayed in a sortable
          list, and can be favorited by a user. Users and favorited results are
          stored on a MongoDB database. The project is a monorepo and uses Lerna to
          manage it."
          tags={['React', 'Sass', 'MongoDB', 'Node', 'Express', 'Lerna']}
        />
        <Project
          img={odin}
          title="Odin Project - Landing Page"
          link="https://winstonco.org/odin-landing-page"
          date={{ start: new Date(2022, 10, 12), end: new Date(2022, 10, 13) }}
          body="A project made while doing the Odin Project Foundations course.
          It is a recreation of the Odin Project Landing Page using pure HTML and
          CSS to strengthen my familiarity with basic frontend tools."
          tags={['HTML', 'CSS']}
        />
        <Project
          img={abw}
          title="Alerts Border Widget"
          link="https://alerts-border-widget.onrender.com"
          date={{ start: new Date(2022, 9, 15), end: new Date(2023, 0, 13) }}
          body="A web-based widget to be used in OBS, displaying stream alerts
          from Twitch such as follow notifications integrated with an animated
          webcam background. Subscribes to Twitch's eventsub webhooks to listen
          to events. Sends a custom message to the client through a Websocket."
          tags={['HTML', 'CSS', 'Socket.io', 'Node', 'Express']}
        />
        <Project
          img={thisSite}
          title="This Website"
          link="https://github.com/winstonco/winstonco.github.io"
          date={{ start: new Date(2022, 2, 3) }}
          body="This is version 3.5 of my portfolio website. I rebuilt it
          using React and split it into more pages instead of all being in one.
          I'm using Webpack to build it before deploying to GitHub pages."
          tags={['React-Bootstrap', 'TypeScript', 'Sass', 'Webpack']}
        />
      </Container>
    </div>
  );
};

export default Projects;
