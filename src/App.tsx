import React, { FC, useMemo } from 'react';

import {
    DropdownMenu,
    DropdownMenuProps,
} from '@/components/DropdownMenu/DropdownMenu';

import styles from './App.module.css';
import { Button } from '@/components/Button/Button';

export const App: FC = function App() {
    const items = useMemo<DropdownMenuProps['items']>(
        () => [
            {
                value: 'create',
                title: 'Создать',
                onClick: () => console.log('Выбрана опция "Создать"'),
            },
            {
                value: 'edit',
                title: 'Редактировать',
                onClick: () => console.log('Выбрана опция "Редактировать"'),
            },
            {
                value: 'clone',
                title: 'Клонировать',
                onClick: () => console.log('Выбрана опция "Клонировать"'),
            },
        ],
        [],
    );

    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <DropdownMenu
                    trigger={<Button>Клик</Button>}
                    triggerType="click"
                    items={items}
                />
                <DropdownMenu
                    trigger={<Button>Клик</Button>}
                    triggerType="click"
                    items={items}
                />
                <DropdownMenu
                    trigger={<Button>Клик</Button>}
                    triggerType="click"
                    items={items}
                />
            </div>
            <div className={styles.row}>
                <DropdownMenu
                    trigger={<Button>Ховер</Button>}
                    triggerType="hover"
                    items={items}
                />
                <DropdownMenu
                    trigger={<Button>Ховер</Button>}
                    triggerType="hover"
                    items={items}
                />
                <DropdownMenu
                    trigger={<Button>Ховер</Button>}
                    triggerType="hover"
                    items={items}
                />
            </div>
            <div className={styles.row}>
                <DropdownMenu
                    trigger={<Button>Клик</Button>}
                    triggerType="click"
                    items={items}
                />
                <DropdownMenu
                    trigger={<Button>Клик</Button>}
                    triggerType="click"
                    items={items}
                />
                <DropdownMenu
                    trigger={<Button>Клик</Button>}
                    triggerType="click"
                    items={items}
                />
            </div>
        </div>
    );
};
