import pointUp from './pointUp.js';
import showScrollbar from './showScrollbar.js';

const intro_triangle = document.getElementById('intro_triangle');

// if the intro screen is up
var isDown = true;

/**
 * Function that toggles the first page sliding up and down.
 */
export function toggleSlide() {
  if (isDown) {
    slideFromBottom('.intro_screen', 0, 95, 20, 1);
    isDown = false;
    showScrollbar(true);
    pointUp(intro_triangle, false);
  } else {
    slideFromBottom('.intro_screen', 95, 95, 20, -1);
    isDown = true;
    showScrollbar(false);
    pointUp(intro_triangle, true);
  }
}

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
export function slideFromBottom(
  targetElement,
  initBottom,
  distance,
  steps,
  direction
) {
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
}
