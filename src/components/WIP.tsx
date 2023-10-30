import type { Component } from 'solid-js';

const WIP: Component = () => {
  return (
    <div class="wip">
      <p
        style={{
          'font-size': '1.3rem',
          padding: '1rem',
          margin: 0,
          'text-align': 'center',
        }}
      >
        This area is still in progress!,
        <br />
        Check back another time!
        <br />
        🛠️
      </p>
    </div>
  );
};

export default WIP;
