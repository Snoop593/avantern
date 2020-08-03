import React from 'react';
import { createCn } from 'bem-react-classname';
import PropTypes from 'prop-types';

import './label.css';

const cn = createCn('label');

const Label = ({
    text, size, img, isStrong, isRequired
}) => (
    <div className={ cn({ size, 'is-strong': isStrong }) }>
        { img }
        { text }
        { isRequired && <span className={ cn('required') }> * </span> }
    </div>
);

Label.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    isStrong: PropTypes.bool.isRequired,
    isRequired: PropTypes.bool.isRequired,
    img: PropTypes.element.isRequired
};

export default Label;
