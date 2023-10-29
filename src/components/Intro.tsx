import type { Component, Accessor, Setter, JSX } from 'solid-js';
import { Offcanvas } from 'solid-bootstrap';

const Intro: Component<{
  isDown: Accessor<boolean>;
  setIsDown: Setter<boolean>;
}> = (props) => {
  const { isDown, setIsDown } = props;

  const hideIntro = () => {
    setIsDown(false);
    sessionStorage.setItem('introIsDown', 'false');
  };

  // Set triangle direction
  let style: JSX.CSSProperties = {};
  if (isDown()) {
    // style = { transform: 'rotate(180deg)' };
  } else {
    style = { transform: 'rotate(0)' };
  }

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
      } else {
        all.style.top = '0px';
      }
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
    <Offcanvas show={isDown()} placement="top" id="intro-all">
      <div
        class="intro_screen" // d-none d-sm-flex"
        onWheel={(_) => {
          // if (ev.deltaY < 0)
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
          <code class="code">&lt;h1 class="title"&gt;</code>
          <h1 class="title font-title">Hi, I'm Winston.</h1>
          <code class="code">&lt;/h1&gt;</code>
          <br />
          <code class="code">&lt;h3 class="subtitle"&gt;</code>
          <h3 class="subtitle font-subtitle">Amateur Web Developer</h3>
          <code class="code">&lt;/h3&gt;</code>
        </div>
        <button
          class="btn"
          type="button"
          id="intro_triangle_wrapper"
          onClick={hideIntro}
        >
          <div style={style} class="triangle_down"></div>
        </button>
      </div>
    </Offcanvas>
  );
};

export default Intro;
