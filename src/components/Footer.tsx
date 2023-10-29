import type { Component } from 'solid-js';
import { Nav } from 'solid-bootstrap';
import { BsGithub, BsLinkedin } from 'solid-icons/bs';

const Footer: Component = () => {
  return (
    <footer>
      <Nav class="justify-content-center align-items-center">
        {/* Invisible element used to balance the marginLeft: auto copyright element on the other side */}
        <Nav.Item style={{ 'margin-right': 'auto', visibility: 'hidden' }}>
          Dummy Text
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link
            href="https://twitch.tv/frostfireftw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitch />
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link
            href="https://github.com/winstonco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://www.linkedin.com/in/winston-co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ 'margin-left': 'auto' }}>
          <p class="my-0 me-2 color_lighter text-end">© 2023</p>
        </Nav.Item>
      </Nav>
    </footer>
  );
};

export default Footer;
