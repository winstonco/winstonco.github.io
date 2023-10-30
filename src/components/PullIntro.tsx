import type { Component, Accessor, JSX } from 'solid-js';
import { createSignal } from 'solid-js';

// assets
import pullStringSvg from '../assets/svg/pull-string.svg';

const PullIntro: Component<{
  isDown: Accessor<boolean>;
  showIntro: VoidFunction;
}> = (props) => {
  const { showIntro } = props;
  const [dragging, setDragging] = createSignal<boolean>(false);
  const [initialTouchY, setInitialTouchY] = createSignal<number>(0);
  let movePos: number;
  const maxMoveY = 25;
  const wiggleRoomY = 4;

  const toListener =
    <E extends Event>(handler: JSX.EventHandler<any, E>) =>
    (e: E) =>
      handler(e as E & { currentTarget: HTMLElement; target: Element });

  const handlePointerDown: JSX.EventHandler<HTMLDivElement, PointerEvent> = (
    ev,
  ) => {
    ev.preventDefault();
    ev.stopPropagation();
    if (ev.isPrimary && ev.isTrusted) {
      console.log('Pulling!');
      setInitialTouchY(ev.clientY);
      setDragging(true);
    }
  };
  const handlePointerMove: JSX.EventHandler<HTMLElement, PointerEvent> = (
    ev,
  ) => {
    ev.preventDefault();
    const pull = document.getElementById('pull-intro');
    if (pull && dragging()) {
      movePos = ev.clientY - initialTouchY();
      if (movePos <= maxMoveY) {
        pull.style.top = movePos + 'px';
      }
    }
  };
  const handlePointerUp: JSX.EventHandler<HTMLElement, PointerEvent> = (ev) => {
    ev.preventDefault();
    const pull = document.getElementById('pull-intro');
    if (pull) {
      if (
        parseInt(pull.style.top.slice(0, pull.style.top.indexOf('p')), 10) >=
        maxMoveY - wiggleRoomY
      ) {
        console.log('Let go!');
        showIntro();
        sessionStorage.removeItem('introIsDown');
      }
      pull.style.top = '0px';
    }
    setInitialTouchY(0);
    setDragging(false);
  };

  const windowPointerMoveListener: (ev: PointerEvent) => void = (ev) => {
    toListener(handlePointerMove)(ev);
  };
  const windowPointerUpListener: (ev: PointerEvent) => void = (ev) => {
    toListener(handlePointerUp)(ev);
  };

  return (
    <>
      <div
        onPointerDown={(ev) => {
          document.addEventListener('pointermove', windowPointerMoveListener);
          document.addEventListener('pointerup', windowPointerUpListener);
          document.addEventListener('mousemove', (ev) => {
            ev.preventDefault();
          });
          handlePointerDown(ev);
        }}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <img id="pull-intro" src={pullStringSvg} alt="pull string" />
      </div>
      <span
        id="pull-intro-label"
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        Pull Me!
      </span>
    </>
  );
};

export default PullIntro;
