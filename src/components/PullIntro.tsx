import type { Component, Accessor, Setter, JSX } from 'solid-js';
import { createSignal, createEffect, onCleanup } from 'solid-js';

// assets
import pullStringSvg from '../assets/svg/pull-string.svg';

const PullIntro: Component<{
  isDown: Accessor<boolean>;
  setIsDown: Setter<boolean>;
}> = (props) => {
  const { setIsDown } = props;
  const [dragging, setDragging] = createSignal<boolean>(false);
  const [initialTouchY, setInitialTouchY] = createSignal<number>(0);
  let movePos: number;
  const maxMoveY = 25;
  const wiggleRoomY = 4;

  const handleTouchEnd = (ev: MouseEvent) => {
    ev.preventDefault();
    const pull = document.getElementById('pull-intro');
    if (pull) {
      if (
        parseInt(pull.style.top.slice(0, pull.style.top.indexOf('p')), 10) >=
        maxMoveY - wiggleRoomY
      ) {
        setIsDown(true);
        sessionStorage.removeItem('introIsDown');
      }
      pull.style.top = '0px';
    }
    setInitialTouchY(0);
    setDragging(false);
  };

  createEffect(() => {
    const root = document.getElementById('root');
    root?.addEventListener('mouseup', handleTouchEnd);

    onCleanup(() => {
      root?.removeEventListener('mouseup', handleTouchEnd);
    });
  });

  const handleDragStart: JSX.EventHandler<HTMLDivElement, MouseEvent> = (
    ev,
  ) => {
    ev.preventDefault();
    setInitialTouchY(ev.clientY);
    setDragging(true);
  };

  const handleDrag: JSX.EventHandler<HTMLDivElement, MouseEvent> = (ev) => {
    ev.preventDefault();
    const pull = document.getElementById('pull-intro');
    if (pull && dragging()) {
      movePos = ev.clientY - initialTouchY();
      if (movePos <= maxMoveY) {
        pull.style.top = movePos + 'px';
      }
    }
  };

  return (
    <div
      onMouseDown={handleDragStart}
      onMouseMove={handleDrag}
      onMouseUp={handleTouchEnd}
    >
      <img id="pull-intro" src={pullStringSvg} alt="pull string" />
      <span id="pull-intro-label">Pull Me!</span>
    </div>
  );
};

export default PullIntro;
