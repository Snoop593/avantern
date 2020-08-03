import React from 'react';
import { createCn } from 'bem-react-classname';
import PropTypes from 'prop-types';

import './heading.css';

const cn = createCn('heading');

const Heading = ({ title }) => (
    <h2 className={ cn() }>
        { title }
    </h2>
);

Heading.propTypes = {
    title: PropTypes.string.isRequired
};

export default Heading;
