import { RefObject } from 'react';

import { getViewportRect } from '@/helpers/getViewportRect';
import { getScrollTop } from '@/helpers/getScrollTop';

type Result = { x: number; y: number };

const defaultResult: Result = { x: 0, y: 0 };
const gap = 5;

export function calcMenuTranslate(
    triggerRef: RefObject<HTMLElement>,
    menuRef: RefObject<HTMLElement>,
): Result {
    if (!triggerRef.current || !menuRef.current) {
        return defaultResult;
    }

    const { vh, vw } = getViewportRect();
    const scrollTop = getScrollTop();

    const { x: triggerX, y: triggerY } =
        triggerRef.current.getBoundingClientRect();
    const { offsetHeight: triggerHeight, offsetWidth: triggerWidth } =
        triggerRef.current;

    const { offsetWidth: menuWidth, offsetHeight: menuHeight } =
        menuRef.current;

    const distToTop = triggerY;
    const distToBottom = vh - triggerY - triggerHeight;
    const distToLeft = triggerX;
    const distToRight = vw - triggerX;

    if (
        Math.max(distToTop, distToBottom) < menuHeight + gap ||
        Math.max(distToLeft, distToRight) < menuWidth
    ) {
        return defaultResult;
    }

    const x =
        distToLeft > distToRight
            ? triggerX + triggerWidth - menuWidth
            : triggerX;
    const y =
        scrollTop +
        (distToTop > distToBottom
            ? triggerY - menuHeight - gap
            : triggerY + triggerHeight + gap);

    return { x, y };
}
