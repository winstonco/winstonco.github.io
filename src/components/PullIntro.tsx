import { useEffect, useState } from 'react';

import pullString from '../assets/images/pull-string.svg';

const PullIntro = ({
  isDown,
  setIsDown,
}: {
  isDown: boolean;
  setIsDown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [initialTouchY, setInitialTouchY] = useState<number>(0);
  let movePos: number;
  const maxMoveY = 25;
  const wiggleRoomY = 4;

  const handleTouchEnd = (
    ev: React.MouseEvent<HTMLDivElement> | MouseEvent
  ) => {
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

  useEffect(() => {
    document
      .getElementById('root')
      ?.addEventListener('mouseup', handleTouchEnd);
  }, [handleTouchEnd]);

  const handleDragStart = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.preventDefault();
    setInitialTouchY(ev.clientY);
    setDragging(true);
  };

  const handleDrag = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.preventDefault();
    const pull = document.getElementById('pull-intro');
    if (pull && dragging) {
      movePos = ev.clientY - initialTouchY;
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
      <img id="pull-intro" src={pullString} alt="pull string" />
      <span id="pull-intro-label">Pull Me!</span>
    </div>
  );
};

export default PullIntro;
