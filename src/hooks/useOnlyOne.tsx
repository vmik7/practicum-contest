import { RefObject, useEffect } from 'react';

export function useOnlyOne(
    eventUniqName: string,
    ref: RefObject<HTMLElement>,
    isOpen: boolean,
    closeFn: () => void,
): void {
    useEffect(() => {
        function listener(event: Event) {
            if (event.target !== ref.current) {
                closeFn();
            }
        }
        document.addEventListener(eventUniqName, listener);

        return () => {
            document.removeEventListener(eventUniqName, listener);
        };
    }, [closeFn, eventUniqName, ref]);

    useEffect(() => {
        if (ref.current && isOpen) {
            ref.current.dispatchEvent(
                new Event(eventUniqName, { bubbles: true }),
            );
        }
    }, [closeFn, eventUniqName, isOpen, ref]);
}
