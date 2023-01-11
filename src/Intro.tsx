import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

const Intro = () => {
  const [isDown, setIsDown] = useState(true);

  const hideIntro = () => {
    setIsDown(false);
  };
  // useScrollEvent(window.scrollY, [0, toggleSlide], [0, toggleSlide]);

  // Set triangle direction
  let style: React.CSSProperties = {};
  if (isDown) {
    // style = { transform: 'rotate(180deg)' };
  } else {
    style = { transform: 'rotate(0)' };
  }

  return (
    <Offcanvas show={isDown} placement="top" id="intro-all">
      <div
        className="intro_screen" // d-none d-sm-flex"
        onWheel={(ev) => {
          if (ev.deltaY > 0) hideIntro();
        }}
      >
        <div className="fulltitle">
          <code className="code">&lt;h1 class="title"&gt;</code>
          <h1 className="title font-title">Hi, I'm Winston.</h1>
          <code className="code">&lt;/h1&gt;</code>
          <br />
          <code className="code">&lt;h3 class="subtitle"&gt;</code>
          <h3 className="subtitle font-subtitle">Amateur Web Developer</h3>
          <code className="code">&lt;/h3&gt;</code>
        </div>
        <button
          className="btn"
          type="button"
          id="intro_triangle_wrapper"
          onClick={hideIntro}
        >
          <div style={style} className="triangle_down"></div>
        </button>
      </div>
    </Offcanvas>
  );
};

export default Intro;
