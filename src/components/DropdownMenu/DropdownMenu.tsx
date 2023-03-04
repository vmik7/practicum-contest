import React, {
    Children,
    cloneElement,
    FC,
    useCallback,
    useMemo,
    useRef,
    useState,
    RefAttributes,
    FunctionComponentElement,
} from 'react';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useOnlyOne } from '@/hooks/useOnlyOne';

import { useMenuPosition } from './hooks/useMenuPosition';
import styles from './DropdownMenu.module.css';

export interface MenuItemType {
    value: string;
    title: string;
    onClick?: () => void;
}

interface MenuItemProps {
    item: MenuItemType;
    onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = function MenuItem(props) {
    const { item, onClick } = props;

    const onClickHandler = useCallback(() => {
        onClick?.();
        item.onClick?.();
    }, [item, onClick]);

    return (
        <div className={styles.menuItem} onClick={onClickHandler}>
            {item.title}
        </div>
    );
};

interface TriggerHoverProps extends RefAttributes<HTMLElement> {
    onHover?: () => void;
}

interface TriggerClickProps extends RefAttributes<HTMLElement> {
    onClick?: () => void;
}

type TriggerProps = TriggerHoverProps | TriggerClickProps;

interface DropdownBaseMenuProps {
    items: MenuItemType[];
    triggerType?: 'click' | 'hover';
}

interface DropdownClickMenuProps extends DropdownBaseMenuProps {
    trigger: FunctionComponentElement<TriggerClickProps>;
    triggerType: 'click';
}

interface DropdownHoverMenuProps extends DropdownBaseMenuProps {
    trigger: FunctionComponentElement<TriggerHoverProps>;
    triggerType: 'hover';
}

export type DropdownMenuProps = DropdownClickMenuProps | DropdownHoverMenuProps;

export const DropdownMenu: FC<DropdownMenuProps> = function DropdownMenu(
    props,
) {
    const { trigger: triggerElement, items, triggerType } = props;
    const triggerRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const [menuOpened, setMenuOpened] = useState<boolean>(false);
    const openMenu = useCallback(() => setMenuOpened(true), []);
    const closeMenu = useCallback(() => setMenuOpened(false), []);

    const { menuXTranslate, menuYTranslate, triggerOutside } = useMenuPosition(
        triggerRef,
        menuRef,
        menuOpened,
    );

    useOutsideClick(menuRef, closeMenu);
    useOnlyOne('menu-open', menuRef, menuOpened, closeMenu);

    const trigger = useMemo(
        () =>
            cloneElement<TriggerProps>(Children.only(triggerElement), {
                ref: triggerRef,
                onHover: triggerType === 'hover' ? openMenu : undefined,
                onClick: triggerType === 'click' ? openMenu : undefined,
            }),
        [openMenu, triggerElement, triggerType],
    );
    const menu = useMemo(
        () =>
            menuOpened &&
            !triggerOutside && (
                <div
                    ref={menuRef}
                    className={styles.menuWrapper}
                    style={{
                        transform: `translate3d(${menuXTranslate}px, ${menuYTranslate}px, 0px)`,
                    }}
                >
                    {items.map((item) => (
                        <MenuItem
                            item={item}
                            key={item.value}
                            onClick={closeMenu}
                        />
                    ))}
                </div>
            ),
        [
            closeMenu,
            items,
            menuOpened,
            menuXTranslate,
            menuYTranslate,
            triggerOutside,
        ],
    );

    return (
        <>
            {trigger}
            {menu}
        </>
    );
};
