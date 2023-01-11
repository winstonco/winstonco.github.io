import { Container } from 'react-bootstrap';

import Project from '../Project';
import odin from '../assets/images/odin-landing-page.png';
import abw from '../assets/images/background2.png';
import thisSite from '../assets/images/this-site.png';

const Projects = () => {
  return (
    <Container className="projects">
      <Project
        img={odin}
        title="Search Helper"
        link="https://search-helper-production.up.railway.app/"
        date={{ start: '11/6/2022' }}
        body="My first full stack web application. A 'Search Helper' that
              retrieves search results from Google and the Stack Exchange
              network. Allows for operators like '!-', '--', 't-' to adjust
              what results are received. Results are displayed in a sortable
              list, and can be favorited by a user. Built using React and
              Sass frontend, Node and Express backend, and MongoDB database.
              
              *Currently not deployed*"
      />
      <Project
        img={odin}
        title="Odin Project - Landing Page"
        link="https://winstonco.org/odin-landing-page"
        date={{ start: '11/12/2022', end: '11/13/2022' }}
        body="A recreation of the Odin Project Landing Page using pure HTML
              and CSS."
      />
      <Project
        img={abw}
        title="Alerts-Border Widget"
        link="https://alerts-border-widget.onrender.com"
        date={{ start: '10/15/2022', end: '10/27/2022' }}
        body="A web-based widget to be used in OBS, displaying stream alerts
              from Twitch such as follow notifications integrated with an
              animated webcam background. Subscribes to Twitch's eventsub
              webhooks to listen to events. Sends a custom message to the
              client through a Websocket.
              
              *Currently not deployed*"
      />
      <Project
        img={thisSite}
        title="This Website"
        link="/"
        date={{ start: '03/03/2022' }}
        body="This is my first time building a website from scratch, though
              I've learned some HTML and CSS in the past. I am currently
              learning about Sass and Bootstrap, hoping to implement them to
              create an eye-catching, responsive website."
      />
    </Container>
  );
};

export default Projects;
