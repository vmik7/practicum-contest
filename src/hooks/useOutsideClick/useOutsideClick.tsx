import { RefObject, useEffect } from 'react';

export function useOutsideClick(
    ref: RefObject<HTMLElement>,
    handler: (event: Event) => void,
) {
    useEffect(() => {
        function listener(event: Event) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler(event);
            }
        }

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [handler, ref]);
}
