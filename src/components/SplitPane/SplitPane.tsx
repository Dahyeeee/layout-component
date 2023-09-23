import { useEffect, useRef, useState, useCallback } from 'react';
import { Flex } from '../..';
import {
  dividerStyle,
  pan1Style,
  pan2Style,
  splitPaneContainerStyle,
} from './SplitPane.styles';

interface SplitPaneProps {
  maxWidth?: number;
  minWidth?: number;
}

const SplitPane = ({ maxWidth = 400, minWidth = 50 }: SplitPaneProps) => {
  const [isActive, setIsActive] = useState(false);
  const leftPaneRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isActive) return;

      if (leftPaneRef.current) {
        console.log(e.clientX);
        if (e.clientX < minWidth || e.clientX > maxWidth) return;

        leftPaneRef.current.style.width = `${e.clientX}px`;
      }
    },
    [isActive, maxWidth, minWidth]
  );

  useEffect(() => {
    if (leftPaneRef.current) {
      leftPaneRef.current.style.width = `${leftPaneRef.current.offsetWidth}px`;
      leftPaneRef.current.style.flex = 'none';
    }
  }, []);

  const handleMouseUp = () => {
    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove]);

  return (
    <Flex dir="row" css={splitPaneContainerStyle} onMouseMove={handleMouseMove}>
      <div draggable={false} css={pan1Style} ref={leftPaneRef}></div>
      <div css={dividerStyle} onMouseDown={handleMouseDown} />
      <div draggable={false} css={pan2Style}></div>
    </Flex>
  );
};

export default SplitPane;
