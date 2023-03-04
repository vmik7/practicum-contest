import {
    RefObject,
    useCallback,
    useLayoutEffect,
    useEffect,
    useState,
} from 'react';
import { calcMenuTranslate } from '@/components/DropdownMenu/helpers/calcMenuTranslate';
import { isElementOutsideViewport } from '@/helpers/isElementOutsideViewport';

export function useMenuPosition(
    triggerRef: RefObject<HTMLElement>,
    menuRef: RefObject<HTMLElement>,
    isMenuOpen: boolean,
) {
    const [triggerOutside, setTriggerOutside] = useState<boolean>(false);
    const [menuXTranslate, setMenuXTranslate] = useState<number>(0);
    const [menuYTranslate, setMenuYTranslate] = useState<number>(0);

    const calc = useCallback(() => {
        if (triggerRef.current) {
            setTriggerOutside(isElementOutsideViewport(triggerRef.current));
        }

        if (triggerRef.current && menuRef.current) {
            const { x, y } = calcMenuTranslate(triggerRef, menuRef);

            setMenuXTranslate(x);
            setMenuYTranslate(y);
        }
    }, [menuRef, triggerRef]);

    useLayoutEffect(() => {
        if (isMenuOpen) {
            calc();
        }
    }, [calc, isMenuOpen]);

    useEffect(() => {
        if (isMenuOpen) {
            window.addEventListener('scroll', calc);

            return () => {
                window.removeEventListener('scroll', calc);
            };
        } else {
            window.removeEventListener('scroll', calc);
        }
    }, [calc, isMenuOpen]);

    return {
        menuXTranslate,
        menuYTranslate,
        triggerOutside,
    };
}
