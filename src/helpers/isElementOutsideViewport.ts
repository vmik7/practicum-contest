import { getViewportRect } from '@/helpers/getViewportRect';

export function isElementOutsideViewport(el: HTMLElement): boolean {
    const { vh, vw } = getViewportRect();
    const { top, right, bottom, left } = el.getBoundingClientRect();

    return bottom <= 0 || right <= 0 || top >= vh || left >= vw;
}
