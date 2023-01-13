import React, { useEffect, useState } from 'react';

const PullIntro = (props: {
  isDown: boolean;
  setIsDown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { isDown, setIsDown } = props;

  const [dragging, setDragging] = useState<boolean>(false);
  const [initialTouchY, setInitialTouchY] = useState<number>(0);
  let movePos: number;

  const handleTouchEnd = (
    ev: React.MouseEvent<HTMLDivElement> | MouseEvent
  ) => {
    ev.preventDefault();
    const pull = document.getElementById('pull-intro');
    if (pull) {
      if (
        parseInt(pull.style.top.slice(0, pull.style.top.indexOf('p')), 10) >= 18
      ) {
        setIsDown(true);
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
      if (movePos <= 20) {
        pull.style.top = movePos + 'px';
      }
    }
  };
  // TODO
  return (
    <>
      <div
        id="pull-intro"
        onClick={() => {
          // setIsDown(true);
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleTouchEnd}
        // onMouseLeave={handleTouchEnd}
      ></div>
    </>
  );
};

export default PullIntro;
