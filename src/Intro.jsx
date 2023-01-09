import { useRef, useState } from 'react';

import showScrollbar from './utils/showScrollbar.js';

const Intro = () => {
  const introTriangle = useRef(null);
  const [isDown, setIsDown] = useState(true);

  const toggleSlide = () => {
    if (isDown) {
      slideFromBottom('.intro_screen', 0, 95, 20, 1);
      setIsDown(false);
      showScrollbar(true);
    } else {
      slideFromBottom('.intro_screen', 95, 95, 20, -1);
      setIsDown(true);
      showScrollbar(false);
    }
  };

  /**
   * Slides targetElement a given distance in vh in a given number of steps.
   * The element's bottom position starts at initBottom in vh.
   * Steps must be a factor of distance.
   * Direction specified in 1:up or -1:down
   * @param {HTMLElement} targetElement The target element.
   * @param {number} initBottom     The target's initial bottom position.
   * @param {number} distance       The distance to move in vh.
   * @param {number} steps          The number of steps in the animation.
   * @param {number} direction      1 or -1.
   */
  const slideFromBottom = (
    targetElement,
    initBottom,
    distance,
    steps,
    direction
  ) => {
    let target = document.querySelector(targetElement);
    let id = null;
    let pos = initBottom;
    clearInterval(id);
    id = setInterval(frame, 5);
    // Different starting position based on direction
    function frame() {
      // Different target pos based on direction
      if (pos == initBottom + distance * direction) {
        clearInterval(id);
      } else {
        pos = pos + Math.round(distance / steps) * direction;
        target.style.bottom = pos + 'vh';
      }
    }
  };

  // Set triangle direction
  let style = {};
  if (isDown) {
    style = { transform: 'rotate(180deg)' };
  } else {
    style = { transform: 'rotate(0)' };
  }

  return (
    <div className="intro_screen d-none d-sm-block">
      <div className="fulltitle">
        <h1 className="title font-title">Hi, I'm Winston.</h1>
        <p className="subtitle font-subtitle">
          <code id="very">&lt;very/&gt;</code> Amateur Web Developer
        </p>
      </div>
      <button
        className="btn"
        type="button"
        id="intro_triangle_wrapper"
        onClick={toggleSlide}
      >
        <div ref={introTriangle} style={style} className="triangle_down"></div>
      </button>
    </div>
  );
};

export default Intro;
