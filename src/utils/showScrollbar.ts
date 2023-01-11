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
 * @param show True if showing scrollbar. False if not.
 */
export default function showScrollbar(show: boolean) {
  if (show) {
    document.getElementById('root')?.classList.add('show_scroll');
  } else {
    document.getElementById('root')?.classList.remove('show_scroll');
  }
}
