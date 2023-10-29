import type { Component } from 'solid-js';

const Todo: Component<{ todo?: string }> = (props = { todo: '' }) => {
  return (
    <div class="todo">
      <p
        class="py-2 m-0 text-danger text-center"
        style={{ 'font-size': '1.0rem' }}
      >
        TODO: {props.todo}
      </p>
    </div>
  );
};

export default Todo;
