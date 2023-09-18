import { ComponentPropsWithoutRef, ElementType } from 'react';
export interface GridProps extends ComponentPropsWithoutRef<'div'> {
    /**
     * Grid의 HTML 태그
     *
     * @default 'div'
     */
    as?: ElementType;
    /**
     * Grid 의 자식요소 세로열 갯수
     *
     * @default 2
     */
    row?: number;
    /**
     * Grid 의 자식요소 가로열 갯수
     *
     * @default 2
     */
    column?: number;
    /**
     * Grid의 자식요소 사이 간격
     *
     * @default '12px'
     */
    gap?: string;
    /**
     * Grid의 자식요소 가로열 사이 간격
     *
     * @default '12px'
     */
    rowGap?: string;
    /**
     * Grid의 자식요소 세로열 사이 간격
     *
     * @default '12px'
     */
    columnGap?: string;
}
declare const Grid: ({ as, row, column, gap, rowGap, columnGap, children, ...attribute }: GridProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Grid;
