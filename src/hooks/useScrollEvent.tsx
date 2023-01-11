import { useEffect } from 'react';

// adapted from: https://www.javascripttutorial.net/javascript-dom/javascript-scroll-events/

const useScrollEvent = (
  element: HTMLElement,
  current: number,
  wasOn?: [number, (args?: any[]) => void, any[]?],
  isOn?: [number, (args?: any[]) => void, any[]?]
) => {
  let pos = current;
  let scrolling = false;

  useEffect(() => {
    element.onscroll = (ev) => {
      scrolling = !(pos === window.scrollY);
    };

    setInterval(() => {
      if (scrolling) {
        scrolling = false;

        if (wasOn) {
          const [scrollPos, callback, ...args] = wasOn;
          if (pos === scrollPos) {
            callback(...args);
          }
        }
        if (isOn) {
          const [scrollPos, callback, ...args] = isOn;
          if (window.scrollY === scrollPos) {
            callback(...args);
          }
        }
        pos = window.scrollY;
      }
    }, 100);
  }, [wasOn, isOn]);
};

export default useScrollEvent;
