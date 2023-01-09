const root = document.documentElement;

/**
 * Function to show scrollbar or not.
 *
 * html.show_scroll {
 *   overflow-y: scroll;
 *   @media (min-width: 576px) {
 *     ::-webkit-scrollbar {
 *       width: 4px;
 *      }
 *     ::-webkit-scrollbar-track {
 *       background: $background;
 *     }
 *     ::-webkit-scrollbar-thumb {
 *       background: $secondary;
 *     }
 *   }
 * }
 * @param {boolean} show True if showing scrollbar. False if not.
 */
export default function showScrollbar(show) {
  if (show) {
    root.classList.add('show_scroll');
  } else {
    root.classList.remove('show_scroll');
  }
}
