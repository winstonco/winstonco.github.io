/**
 * Slides targetElement a given distance in vh in a given number of steps.
 * The element's bottom position starts at initBottom in vh.
 * Steps must be a factor of distance.
 * Direction specified in 1=up or -1=down
 * @param targetElement The target element.
 * @param initBottom     The target's initial bottom position.
 * @param distance       The distance to move in vh.
 * @param steps          The number of steps in the animation.
 * @param direction      1 or -1.
 */
const slideFromBottom = (
  targetElement: HTMLElement,
  initBottom: number,
  distance: number,
  steps: number,
  direction: number
) => {
  let id: NodeJS.Timer | undefined = undefined;
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
      targetElement.style.bottom = pos + 'vh';
    }
  }
};

export default slideFromBottom;
