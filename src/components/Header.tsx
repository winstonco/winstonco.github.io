import type { Component } from 'solid-js';
import { onMount, onCleanup, For, createSignal, Show } from 'solid-js';
import { A } from '@solidjs/router';

import Container from './Container';
import Sidebar from './Sidebar';

export type AProps = {
  href: string;
  name: string;
};

const Header: Component = () => {
  const [expanded, setExpanded] = createSignal(true);

  const handleResize = () => {
    setExpanded(window.innerWidth > 650);
  };

  onMount(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  onCleanup(() => {
    window.removeEventListener('resize', handleResize);
  });

  const links: AProps[] = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/projects',
      name: 'Projects',
    },
  ];

  return (
    <header>
      <Show when={expanded()}>
        <nav class="custom-navbar">
          <Container>
            <div class="nav-items">
              <For each={links}>
                {({ href, name }, _) => (
                  <A href={href} activeClass="active" end>
                    {name}
                  </A>
                )}
              </For>
            </div>
          </Container>
        </nav>
      </Show>
      <Sidebar navBarExpanded={expanded} links={links} />
    </header>
  );
};

export default Header;
