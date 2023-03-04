import { RefObject, useEffect } from 'react';

export function useOutsideClick(
    ref: RefObject<HTMLElement>,
    handler: (event: Event) => void,
): void {
    useEffect(() => {
        function listener(event: Event) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler(event);
            }
        }

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [handler, ref]);
}
