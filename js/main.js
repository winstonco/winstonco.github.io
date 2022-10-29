const triangle_wrapper = document.getElementById('intro_triangle_wrapper');
const intro_triangle = document.getElementById('intro_triangle');
// if the intro screen is up
var isUp = false;

// check if null
function toggleSlide() {
  if (isUp == false) {
    slideFromBottom('.intro_screen', 0, 95, 20, 1);
    isUp = true;
  } else {
    slideFromBottom('.intro_screen', 95, 95, 20, -1);
    isUp = false;
  }
  flipTriangle();
}

/*
 * Slides targetElement a given distance in vh in a given number of steps.
 * The element's bottom position starts at initBottom in vh.
 * Steps must be a factor of distance.
 * Direction specified in 1:up or -1:down
*/
function slideFromBottom(targetElement, initBottom, distance, steps, direction) {
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
      pos = pos + Math.round(distance/steps) * direction;
      target.style.bottom = pos + 'vh';
    }
  }
}

// direction of arrow on intro screen
let pointingDown = false;

function flipTriangle() {
  if (pointingDown) {
    intro_triangle.classList.add('pointUp');
    pointingDown = false;
  } else {
    intro_triangle.classList.remove('pointUp')
    pointingDown = true;
  }
}