import { IoTriangleSharp } from 'solid-icons/io';
import { Component, Accessor, JSX, onMount } from 'solid-js';

const Intro: Component<{
  isDown: Accessor<boolean>;
  hideIntro: VoidFunction;
}> = (props) => {
  const { isDown, hideIntro } = props;

  onMount(() => {
    if (isDown()) {
      const body = document.querySelector('body');
      body?.style.setProperty('overflow', 'hidden');
    }
  });

  let dragging: boolean = false;
  let initialTouchY: number;
  let movePos: number;

  const handleTouchStart: JSX.EventHandler<HTMLDivElement, TouchEvent> = (
    ev,
  ) => {
    if (ev.touches.length === 1) {
      const touch = ev.touches.item(0);
      if (touch) {
        initialTouchY = touch.clientY;
      }
    }
  };

  const handleTouchMove: JSX.EventHandler<HTMLDivElement, TouchEvent> = (
    ev,
  ) => {
    if (ev.touches.length === 1) {
      const touch = ev.touches.item(0);
      const all = document.getElementById('intro-all');
      if (all && touch) {
        movePos = touch.clientY - initialTouchY;
        if (movePos < 0) all.style.top = movePos + 'px';
      }
    }
  };

  const handleTouchEnd: JSX.EventHandler<
    HTMLDivElement,
    TouchEvent | MouseEvent
  > = (_) => {
    const all = document.getElementById('intro-all');
    if (all) {
      if (movePos < -100) {
        hideIntro();
      }
      all.style.top = '0px';
    }
    dragging = false;
  };

  const handleTouchCancel: JSX.EventHandler<HTMLDivElement, TouchEvent> = (
    _,
  ) => {
    const all = document.getElementById('intro-all');
    if (all) {
      all.style.top = '0px';
    }
  };

  const handleDragStart: JSX.EventHandler<HTMLDivElement, MouseEvent> = (
    ev,
  ) => {
    initialTouchY = ev.clientY;
    dragging = true;
  };

  const handleDrag: JSX.EventHandler<HTMLDivElement, MouseEvent> = (ev) => {
    const all = document.getElementById('intro-all');
    if (all && dragging) {
      movePos = ev.clientY - initialTouchY;
      if (movePos < 0) all.style.top = movePos + 'px';
    }
  };

  return (
    <div class={isDown() ? 'active' : ''} id="intro-all">
      <div
        class="intro-screen"
        onWheel={(_) => {
          hideIntro();
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleTouchEnd}
      >
        <div class="fulltitle">
          <code class="code">&lt;</code>
          <code class="code-keyword">h1 </code>
          <code class="code-class">class</code>
          <code class="code">=</code>
          <code class="code-string">"title"</code>
          <code class="code">&gt;</code>
          <h1 class="title font-title">Hi, I'm Winston.</h1>
          <code class="code">&lt;/</code>
          <code class="code-keyword">h1</code>
          <code class="code">&gt;</code>
          <br />
          <code class="code">&lt;</code>
          <code class="code-keyword">h2 </code>
          <code class="code-class">class</code>
          <code class="code">=</code>
          <code class="code-string">"subtitle"</code>
          <code class="code">&gt;</code>
          <h2 class="subtitle font-subtitle">Amateur Web Developer</h2>
          <code class="code">&lt;/</code>
          <code class="code-keyword">h2</code>
          <code class="code">&gt;</code>
        </div>
        <button type="button" id="intro-triangle-wrapper" onClick={hideIntro}>
          <IoTriangleSharp size={36} class="triangle-down" />
        </button>
      </div>
    </div>
  );
};

export default Intro;
