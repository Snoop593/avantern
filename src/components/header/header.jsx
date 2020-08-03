import React from 'react';
import { createCn } from 'bem-react-classname';

import dispatcher from '../../assets/dispatcher.svg';
import reports from '../../assets/reports.svg';
import settings from '../../assets/settings.svg';
import dispatcherSelected from '../../assets/dispatcher-selected.svg';
import reportsSelected from '../../assets/reports-selected.svg';
import settingsSelected from '../../assets/settings-selected.svg';

import Logo from '../logo';
import AckttLogo from '../acktt-logo';
import HeaderTab from '../header-tab';

import ROUTES from '../../constants/routing';

import './header.css';

const cn = createCn('header');

const Header = () => (
    <header className={ cn() }>
        <Logo />
        <div className={ cn('row') }>
            <HeaderTab
                key='Диспетчер'
                title='Диспетчер'
                icon={ <img src={ dispatcher } alt='dispatcher' /> }
                iconSelected={ <img src={ dispatcherSelected } alt='dispatcher-selected' /> }
                href={ ROUTES.DISPATCHER }
            />
            <HeaderTab
                key='Отчеты'
                title='Отчеты'
                icon={ <img src={ reports } alt='reports' /> }
                iconSelected={ <img src={ reportsSelected } alt='reports-selected' /> }
                href={ ROUTES.REPORTS }
            />
            <HeaderTab
                key='Настройки'
                title='Настройки'
                icon={ <img src={ settings } alt='settings' /> }
                iconSelected={ <img src={ settingsSelected } alt='settings-selected' /> }
                href={ ROUTES.SETTINGS }
            />
        </div>
        <AckttLogo />
    </header>
);

export default Header;
