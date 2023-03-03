import { RefObject } from 'react';

type Result = { x: number; y: number };

const defaultResult: Result = { x: 0, y: 0 };

export function calcMenuTranslate(
    triggerRef: RefObject<HTMLElement>,
    menuRef: RefObject<HTMLElement>,
): Result {
    if (!triggerRef.current || !menuRef.current) {
        return defaultResult;
    }

    const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
    );
    const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
    );

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
        Math.max(distToTop, distToBottom) < menuHeight ||
        Math.max(distToLeft, distToRight) < menuWidth
    ) {
        return defaultResult;
    }

    const x =
        distToLeft > distToRight
            ? triggerX + triggerWidth - menuWidth
            : triggerX;
    const y =
        distToTop > distToBottom
            ? triggerY - menuHeight
            : triggerY + triggerHeight;

    return { x, y };
}
