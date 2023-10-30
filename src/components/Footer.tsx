import type { Component } from 'solid-js';
import { BsGithub, BsLinkedin } from 'solid-icons/bs';

const Footer: Component = () => {
  return (
    <footer>
      {/* Invisible element used to balance the marginLeft: auto copyright element on the other side */}
      <div style={{ 'margin-right': 'auto', visibility: 'hidden' }}>
        Dummy Text
      </div>
      <a
        href="https://github.com/winstonco"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/winston-co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <div style={{ 'margin-left': 'auto' }}>
        <p
          class="color_lighter"
          style={{ 'margin-bottom': 0, 'margin-right': '1rem' }}
        >
          © 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
