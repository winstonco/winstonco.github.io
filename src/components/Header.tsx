import type { Component } from 'solid-js';
import { Container, Nav, Navbar } from 'solid-bootstrap';
import { A } from '@solidjs/router';

const Header: Component = () => {
  return (
    <header>
      <Navbar
        bg="primary"
        variant="dark"
        fixed="top"
        collapseOnSelect
        expand="sm"
      >
        <Container>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav fill class="justify-content-start me-auto align-items-start">
              <Nav.Link as={A} href="/">
                Home
              </Nav.Link>
              <Nav.Link as={A} href="/projects">
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
