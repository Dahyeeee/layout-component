import type { ComponentPropsWithoutRef, ElementType } from 'react';
export interface FlexProps extends ComponentPropsWithoutRef<'div'> {
    /**
     * Flex의 HTML 태그
     *
     * @default 'div'
     */
    as?: ElementType;
    /**
     * Flex 자식 요소의 정렬 방향
     *
     * @default 'row'
     */
    dir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    /**
     * Flex의 교차축을 따라 배치하는 방식
     *
     * @default 'center'
     */
    align?: 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'baseline' | 'inherit' | 'initial' | 'unset';
    /**
     * Flex의 주축을 기준으로 배치하는 방식
     *
     * @default 'center'
     */
    justify?: 'center' | 'start' | 'flex-start' | 'end' | 'flex-end' | 'left' | 'right' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'inherit' | 'initial' | 'revert' | 'unset';
    /**
     * Flex의 자식요소들 간의 간격
     *
     * @default '10px'
     */
    gap?: string;
}
declare const Flex: ({ as, dir, align, justify, gap, children, ...attributes }: FlexProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Flex;
