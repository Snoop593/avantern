import React from 'react';
import { createCn } from 'bem-react-classname';
import PropTypes from 'prop-types';

import './main.css';

const cn = createCn('main');

const Main = ({ children }) => (
    <main className={ cn() }>
        { children }
    </main>
);

Main.propTypes = {
    children: PropTypes.element.isRequired
};

export default Main;
