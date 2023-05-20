import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header: React.FC = () => {
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
            <Nav
              fill
              className="justify-content-start me-auto align-items-start"
            >
              <LinkContainer to={'/'}>
                <Nav.Link>About Me</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/projects'}>
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to={'/resume'}>
                <Nav.Link>Resume</Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
