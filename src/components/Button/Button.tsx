import React, { forwardRef, PropsWithChildren } from 'react';

import styles from './Button.module.css';

export interface ButtonProps {
    onClick?: () => void;
    onHover?: () => void;
}

export const Button = forwardRef<
    HTMLButtonElement,
    PropsWithChildren<ButtonProps>
>(function Button(props, ref) {
    const { children, onClick, onHover } = props;

    return (
        <button
            onClick={onClick}
            onMouseEnter={onHover}
            className={styles.button}
            ref={ref}
        >
            {children}
        </button>
    );
});
