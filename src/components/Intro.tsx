import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

const Intro = (props: {
  isDown: boolean;
  setIsDown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { isDown, setIsDown } = props;

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

  let dragging: boolean = false;
  let initialTouchY: number;
  let movePos: number;

  const handleTouchStart = (ev: React.TouchEvent<HTMLDivElement>) => {
    if (ev.touches.length === 1) {
      const touch = ev.touches.item(0);
      initialTouchY = touch.clientY;
    }
  };

  const handleTouchMove = (ev: React.TouchEvent<HTMLDivElement>) => {
    if (ev.touches.length === 1) {
      const touch = ev.touches.item(0);
      const all = document.getElementById('intro-all');
      if (all && touch) {
        movePos = touch.clientY - initialTouchY;
        if (movePos < 0) all.style.top = movePos + 'px';
      }
    }
  };

  const handleTouchEnd = (
    ev: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
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

  const handleTouchCancel = (ev: React.TouchEvent<HTMLDivElement>) => {
    const all = document.getElementById('intro-all');
    if (all) {
      all.style.top = '0px';
    }
  };

  const handleDragStart = (ev: React.MouseEvent<HTMLDivElement>) => {
    initialTouchY = ev.clientY;
    dragging = true;
  };

  const handleDrag = (ev: React.MouseEvent<HTMLDivElement>) => {
    const all = document.getElementById('intro-all');
    if (all && dragging) {
      movePos = ev.clientY - initialTouchY;
      if (movePos < 0) all.style.top = movePos + 'px';
    }
  };

  return (
    <Offcanvas show={isDown} placement="top" id="intro-all">
      <div
        className="intro_screen" // d-none d-sm-flex"
        onWheel={(ev) => {
          if (ev.deltaY < 0) hideIntro();
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleTouchEnd}
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
