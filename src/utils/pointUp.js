/**
 * Gives the point_up class to the class given on the first page.
 * @param {boolean} up True if should be pointing up. False if not.
 */
export default function pointUp(element, up) {
  if (up) {
    element.classList.add('point_up');
  } else {
    element.classList.remove('point_up');
  }
}
