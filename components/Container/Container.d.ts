import type { ComponentPropsWithoutRef, ElementType } from 'react';
import React from 'react';
export interface ContainerProps extends ComponentPropsWithoutRef<React.ElementType> {
    /**
     * Container의 HTML 태그
     *
     * @default 'div'
     */
    as?: ElementType;
    /**
     * 최대 넓이 (number로 입력시 px로 고정, string으로 입력시 그대로 반영)
     *
     * @default '100%'
     */
    maxWidth?: number | string;
    /**
     * 최소 넓이 (number로 입력시 px로 고정, string으로 입력시 그대로 반영)
     *
     * @default '100px'
     */
    minWidth?: number | string;
}
declare const Container: ({ maxWidth, minWidth, as, children, ...attributes }: ContainerProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Container;
