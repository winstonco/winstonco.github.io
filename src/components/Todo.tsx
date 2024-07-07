import type { Component } from 'solid-js';

const Todo: Component<{ todo?: string }> = (props = { todo: '' }) => {
  if (import.meta.env.MODE !== 'development') {
    return undefined;
  }
  return (
    <div class="todo">
      <p
        style={{
          'font-size': '1.0rem',
          padding: '1rem',
          margin: 0,
          'text-align': 'center',
          color: 'goldenrod',
          'font-weight': 'bold',
        }}
      >
        TODO: {props.todo}
      </p>
    </div>
  );
};

export default Todo;
