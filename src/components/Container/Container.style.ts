import { css } from '@emotion/react';

export const containerStyle = (
  minWidth: string | number,
  maxWidth: string | number
) =>
  css({
    display: 'block',

    minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth,
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,

    marginLeft: 'auto',
    marginRight: 'auto',

    whiteSpace: 'normal',
  });
