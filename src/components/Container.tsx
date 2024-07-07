import type { ParentComponent } from 'solid-js';

const Container: ParentComponent<{ id?: string; fluid?: boolean }> = (
  props,
) => {
  return (
    <div
      class={'custom-container' + (props.fluid ? ' container-fluid' : '')}
      id={props.id}
    >
      {props.children}
    </div>
  );
};

export default Container;
