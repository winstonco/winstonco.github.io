import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsTwitch } from 'react-icons/bs';

const Footer: React.FC = () => {
  return (
    <footer>
      <Nav className="justify-content-center align-items-center">
        {/* Invisible element used to balance the marginLeft: auto copyright element on the other side */}
        <Nav.Item style={{ marginRight: 'auto', visibility: 'hidden' }}>
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
        <Nav.Item style={{ marginLeft: 'auto' }}>
          <p className="my-0 me-2 color_lighter text-end">© 2023</p>
        </Nav.Item>
      </Nav>
    </footer>
  );
};

export default Footer;
