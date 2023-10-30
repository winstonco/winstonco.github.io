import type { ParentComponent } from 'solid-js';

const Container: ParentComponent<{ id?: string }> = (props) => {
  return (
    <div class="custom-container" id={props.id}>
      {props.children}
    </div>
  );
};

export default Container;
