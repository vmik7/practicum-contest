import { RefObject, useState, useEffect } from 'react';

import { isElementOutsideViewport } from '@/helpers/isElementOutsideViewport';

export function useElementOutside(ref: RefObject<HTMLElement>): boolean {
    const [outside, setOutside] = useState<boolean>(false);

    useEffect(() => {
        function listener() {
            if (ref.current) {
                setOutside(isElementOutsideViewport(ref.current));
            }
        }
        window.addEventListener('scroll', listener);

        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, [ref]);

    return outside;
}
