import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import { Container } from 'solid-bootstrap';

const NotFoundPage: Component = () => {
  return (
    <Container>
      <h1>Page Not Found</h1>
      <A href="/">Back to home</A>
    </Container>
  );
};

export default NotFoundPage;
