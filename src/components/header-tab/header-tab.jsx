import React from 'react';
import { createCn } from 'bem-react-classname';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './header-tab.css';

const cn = createCn('header-tab');

const HeaderTab = ({
    title, icon, iconSelected, href
}) => (
    <div className={ cn() }>
        <NavLink
            activeClassName={ cn('is-selected') }
            to={ href }
            className={ cn('link') }
        >
            { icon }
            { title }
        </NavLink>
    </div>
);

HeaderTab.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    href: PropTypes.string.isRequired,
    iconSelected: PropTypes.element.isRequired
};

export default HeaderTab;
