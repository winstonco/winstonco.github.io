import type { ParentComponent } from 'solid-js';

const Container: ParentComponent<{
  id?: string;
  class?: string;
  fluid?: boolean;
}> = (props) => {
  return (
    <div
      class={
        'custom-container' +
        (props.fluid ? ' container-fluid' : '') +
        (props.class ?? '')
      }
      id={props.id}
    >
      {props.children}
    </div>
  );
};

export default Container;
