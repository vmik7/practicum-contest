import React, { FC } from 'react';
import { Award, Smile, Heart, ExternalLink } from 'react-feather';

import {
    DropdownMenu,
    DropdownMenuProps,
} from '@/components/DropdownMenu/DropdownMenu';
import { Button } from '@/components/Button/Button';

import styles from './App.module.css';

const items: DropdownMenuProps['items'] = [
    {
        value: 'great',
        title: 'Отличная работа',
        addonRight: <Smile />,
        onSelect: () => alert('У вас отлтичная работа, вы приняты!'),
    },
    {
        value: 'nice',
        title: 'Великолепно',
        addonRight: <Award />,
        onSelect: () => alert('У вас великолепная работа, вы приняты!'),
    },
    {
        value: 'unreal',
        title: 'Я в полном восторге',
        addonRight: <Heart />,
        onSelect: () =>
            alert(
                'Я в полном восторге от вашей работы, вы однозначно приняты!',
            ),
    },
    {
        value: 'cat',
        title: 'Котик',
        addonRight: <ExternalLink />,
        onSelect: () =>
            window
                .open(
                    'https://sun9-49.userapi.com/c302802/u16027025/-14/w_100c8a50.jpg',
                    '_blank',
                )
                ?.focus(),
    },
];

export const App: FC = function App() {
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
