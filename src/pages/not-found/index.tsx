import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import Container from '../../components/Container';

const NotFoundPage: Component = () => {
  return (
    <Container>
      <h1>Page Not Found</h1>
      <A href="/">Back to home</A>
    </Container>
  );
};

export default NotFoundPage;
