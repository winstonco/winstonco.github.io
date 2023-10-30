import type { Component, JSX } from 'solid-js';
import { createSignal, Accessor, Show, For } from 'solid-js';
import { A } from '@solidjs/router';

import { AProps } from './Header';

const Sidebar: Component<{
  navBarExpanded: Accessor<boolean>;
  links: AProps[];
}> = (props) => {
  const [expanded, setExpanded] = createSignal(false);

  const handleClick: JSX.EventHandler<HTMLElement, MouseEvent> = (_) => {
    setExpanded((prev) => !prev);
  };

  return (
    <Show when={!props.navBarExpanded()}>
      <div class={'custom-sidebar' + (expanded() ? ' expanded' : '')}>
        <button type="button" class="hamburger" onClick={handleClick}>
          <div class="top"></div>
          <div class="mid"></div>
          <div class="bot"></div>
        </button>
        <div class="body">
          <div class="nav-items">
            <For each={props.links}>
              {({ href, name }) => (
                <A href={href} activeClass="active" end onclick={handleClick}>
                  {name}
                </A>
              )}
            </For>
          </div>
        </div>
      </div>
    </Show>
  );
};

export default Sidebar;
